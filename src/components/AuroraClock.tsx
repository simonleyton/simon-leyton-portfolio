"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/* A working miniature of aurora-clock.vercel.app, rendering with the piece's
   own WebGL2 shaders (spectral thin-film simulation, verbatim) — only the
   time source differs: it reads a chosen city's timezone. */

/* Ordered west to east; Miami is home and stays the default. */
const CITIES = [
  { label: "SF", zone: "America/Los_Angeles" },
  { label: "Miami", zone: "America/New_York" },
  { label: "Paris", zone: "Europe/Paris" },
  { label: "Tokyo", zone: "Asia/Tokyo" },
] as const;

const DEFAULT_CITY = 1; // Miami

const VERT = `#version 300 es
layout(location=0) in vec2 a_pos;
out vec2 v_p;
void main() {
  v_p = a_pos;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}`;

const FRAG = `#version 300 es
precision highp float;

in vec2 v_p;
out vec4 o_color;

uniform vec3  u_angles;        // hour, minute, second hand angles (rad, cw from 12)
uniform float u_exposure;
uniform vec3  u_wrgb[20];      // per-wavelength CIE->sRGB weights, white-normalized
uniform float u_lambda[20];    // wavelengths, nm
uniform vec4  u_gamma;         // retardances: bg base, disk, hour, minute (nm)
uniform float u_gdot;          // extra retardance of the seconds dot film (nm)
uniform float u_hax;           // hand film axis offset from the hand body (rad)
uniform float u_seed;          // grain frame seed, advances at film cadence
uniform float u_grain;         // grain amplitude (post-gamma)
uniform float u_pxScale;       // device px per grain cell (~1 CSS px)

const float PI  = 3.14159265358979;
const float TAU = 6.28318530717959;

const float R_DIAL = 0.86;     // dial film radius (canvas half-units)
const float R_BEZ  = 0.925;    // bezel outer radius

/* ---------- hash / value noise (static: this is the film, not the motion) -- */
float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float a = hash21(i);
  float b = hash21(i + vec2(1, 0));
  float c = hash21(i + vec2(0, 1));
  float d = hash21(i + vec2(1, 1));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
float fbm(vec2 p) {
  return vnoise(p) * 0.667 + vnoise(p * 2.13 + 17.7) * 0.333;
}

/* ---------- Jones calculus -------------------------------------------------
   Light path, back to front, exactly as in the physical clock:
   backlight -> polarizer(0 deg) -> dial retarder film -> hour film -> minute
   film -> rotating retarder disk (seconds) -> dot film on disk -> analyzer
   (90 deg, crossed). Complex 2-vectors: (Ex, Ey), each vec2 = (re, im).   */
vec2 cmul(vec2 a, vec2 b) { return vec2(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x); }

void retard(inout vec2 Ex, inout vec2 Ey, float theta, float delta) {
  float c = cos(theta), s = sin(theta);
  vec2 e1 =  c * Ex + s * Ey;     // into the retarder's fast/slow frame
  vec2 e2 = -s * Ex + c * Ey;
  float h = 0.5 * delta;
  float ch = cos(h), sh = sin(h);
  e1 = cmul(e1, vec2(ch, -sh));   // fast axis leads
  e2 = cmul(e2, vec2(ch,  sh));   // slow axis lags
  Ex = c * e1 - s * e2;           // back to lab frame
  Ey = s * e1 + c * e2;
}

/* per-pixel stack parameters, set once in main() */
float g_thBg, g_gBg, g_thH, g_thM, g_thDisk, g_thDot;

float chain(float lam, bool hH, bool hM, bool hD) {
  vec2 Ex = vec2(1.0, 0.0), Ey = vec2(0.0);
  retard(Ex, Ey, g_thBg, TAU * g_gBg / lam);
  if (hH) retard(Ex, Ey, g_thH, TAU * u_gamma.z / lam);
  if (hM) retard(Ex, Ey, g_thM, TAU * u_gamma.w / lam);
  retard(Ex, Ey, g_thDisk, TAU * u_gamma.y / lam);
  if (hD) retard(Ex, Ey, g_thDot, TAU * u_gdot / lam);
  return dot(Ey, Ey);             // crossed analyzer passes only Ey
}

/* ---------- geometry ------------------------------------------------------ */
float sdBox(vec2 p, vec2 b) {
  vec2 d = abs(p) - b;
  return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}
/* hand pointing at clock angle a (cw from 12), in dial-unit space */
float sdHand(vec2 p, float a, float len, float halfW) {
  float c = cos(a), s = sin(a);
  vec2 q = vec2(c * p.x - s * p.y, s * p.x + c * p.y);  // hand now along +y
  return sdBox(q - vec2(0.0, (len - 0.015) * 0.5), vec2(halfW, (len + 0.015) * 0.5)) - 0.006;
}

void main() {
  vec2 p = v_p;
  float r = length(p);
  float fw = fwidth(r) * 1.2;

  if (r > R_BEZ + fw) { o_color = vec4(0.0); return; }

  float hourA = u_angles.x, minA = u_angles.y, secA = u_angles.z;
  vec3 rgb = vec3(0.0);

  /* ======================= DIAL ======================= */
  float dialCov = 1.0 - smoothstep(R_DIAL - fw, R_DIAL + fw, r);
  if (dialCov > 0.0) {
    vec2 pd = p / R_DIAL;                 // dial radius = 1
    float rd = length(pd);
    float fwd = fwidth(pd.x) * 1.2;

    /* the dial film: gentle thickness drift gives the cloud-like wash */
    g_gBg  = u_gamma.x
           + 85.0 * (fbm(pd * 0.7 + 7.3) - 0.5)
           + 85.0 * dot(pd, vec2(0.825, 0.565))
           + 40.0 * rd * rd;
    g_thBg = PI * 0.25 + 0.10 * (fbm(pd * 0.7 + 19.7) - 0.5);

    /* film axes ride their elements: hands with the hands, disk with seconds */
    g_thH    = PI * 0.5 - hourA + u_hax;
    g_thM    = PI * 0.5 - minA + u_hax;
    g_thDisk = PI * 0.5 - secA + 0.35;
    g_thDot  = g_thDisk + PI * 0.5;   // crossed to the disk: subtracts when the field adds

    /* coverages, proportions measured from the physical clock */
    float ch = clamp(0.5 - sdHand(pd, hourA, 0.70, 0.065) / fwd, 0.0, 1.0);
    float cm = clamp(0.5 - sdHand(pd, minA, 0.96, 0.065) / fwd, 0.0, 1.0);
    vec2 dotC = vec2(sin(secA), cos(secA)) * 0.64;
    float cd = clamp(0.5 - (length(pd - dotC) - 0.295) / fwd, 0.0, 1.0);

    /* incoherent mix over film combinations (exact at every edge/overlap) */
    float wts[8];
    for (int s = 0; s < 8; s++) {
      wts[s] = ((s & 1) != 0 ? ch : 1.0 - ch)
             * ((s & 2) != 0 ? cm : 1.0 - cm)
             * ((s & 4) != 0 ? cd : 1.0 - cd);
    }
    for (int i = 0; i < 20; i++) {
      float lam = u_lambda[i];
      float I = 0.0;
      for (int s = 0; s < 8; s++) {
        if (wts[s] > 0.0015)
          I += wts[s] * chain(lam, (s & 1) != 0, (s & 2) != 0, (s & 4) != 0);
      }
      rgb += I * u_wrgb[i];
    }

    /* backlight through the diffuser: even, bright nearly to the rim */
    float backlight = mix(1.02, 0.95, smoothstep(0.1, 1.0, rd));
    backlight *= mix(0.70, 1.0, smoothstep(1.005, 0.975, rd));
    /* film seam: the rotating disk's edge catches as a hairline arc, left side */
    backlight *= 1.0 + 0.09 * (1.0 - smoothstep(0.004, 0.013, abs(rd - 0.982)))
                            * clamp(0.5 - pd.x / max(rd, 0.001) * 0.5, 0.0, 1.0);
    rgb *= backlight * u_exposure;

    /* quadrant hairlines, printed on the front layer: over field, hands, dot */
    float lw = 0.0075;   // piece uses 0.005; nudged up so the hairlines read at 72px
    float lineCov = max(1.0 - smoothstep(lw - fwd, lw + fwd, abs(pd.x)),
                        1.0 - smoothstep(lw - fwd, lw + fwd, abs(pd.y)));
    rgb = mix(rgb, rgb * 0.15, lineCov);

    /* black center cap hiding the movement; hands emerge from under it */
    float cap = 1.0 - smoothstep(0.32 - fwd * 2.0, 0.32 + fwd * 2.0, rd);
    rgb = mix(rgb, vec3(0.004), cap);
  }

  /* ======================= BEZEL ======================= */
  if (dialCov < 1.0) {
    float t = clamp((r - R_DIAL) / (R_BEZ - R_DIAL), 0.0, 1.0);
    float phi = atan(p.y, p.x);

    /* semi-matte black: bead-blasted anodize, soft broad sheen, no hot streaks */
    float lum = 0.030 + 0.018 * (p.y * 0.5 + 0.5);
    lum += 0.050 * pow(max(cos(phi - 1.95), 0.0), 2.5);   // soft key, upper left
    lum += 0.022 * pow(max(cos(phi + 0.55), 0.0), 2.0);   // faint fill, lower right

    /* bead-blast micro-texture */
    lum *= 1.0 + 0.12 * (vnoise(p * 420.0) - 0.5)
                     * smoothstep(0.0, 0.10, t) * smoothstep(1.0, 0.92, t);

    /* inner chamfer gap stays darkest against the film */
    lum *= mix(0.25, 1.0, smoothstep(0.0, 0.14, t));
    /* matte edge: the silhouette simply turns away, no specular catch */
    lum *= 1.0 - 0.65 * smoothstep(0.86, 1.0, t);

    vec3 bez = lum * vec3(0.98, 0.985, 1.0);

    /* the luminous film spills onto the inner wall of the black ring */
    float spill = 1.0 - smoothstep(0.0, 0.45, t);
    if (spill > 0.004) {
      vec2 pd2 = p / max(r, 1e-4) * 0.985;     // film color just inside the rim
      g_gBg  = u_gamma.x + 85.0 * (fbm(pd2 * 0.7 + 7.3) - 0.5)
             + 85.0 * dot(pd2, vec2(0.825, 0.565)) + 38.8;
      g_thBg = PI * 0.25 + 0.10 * (fbm(pd2 * 0.7 + 19.7) - 0.5);
      g_thDisk = PI * 0.5 - secA + 0.35;
      vec3 glow = vec3(0.0);
      for (int i = 0; i < 20; i++)
        glow += chain(u_lambda[i], false, false, false) * u_wrgb[i];
      bez += glow * u_exposure * spill * spill * 0.16;
    }
    rgb = mix(bez, rgb, dialCov);
  }

  rgb = pow(clamp(rgb, 0.0, 1.0), vec3(1.0 / 2.2));

  /* film grain: fine monochrome luminance noise, pixel-locked, strongest in
     the midtones, gentle in deep blacks and highlights. Doubles as dither. */
  vec2 gp = floor(gl_FragCoord.xy / u_pxScale);
  vec2 sd = vec2(u_seed * 0.1531, u_seed * 0.2719);
  float gr = hash21(gp + sd) * 0.65 + hash21(floor(gp * 0.5) + sd + 31.7) * 0.35 - 0.5;
  float luma = dot(rgb, vec3(0.299, 0.587, 0.114));
  float amp = u_grain * (0.62 + 0.38 * smoothstep(0.0, 0.35, luma))
                      * (1.0 - 0.5 * smoothstep(0.75, 1.05, luma));
  rgb += gr * amp;

  float alpha = 1.0 - smoothstep(R_BEZ - fw, R_BEZ + fw, r);
  o_color = vec4(rgb * alpha, alpha);
}`;

function zoneHM(zone: string) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: zone,
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  }).formatToParts(new Date());
  const get = (t: string) => Number(parts.find((p) => p.type === t)?.value ?? 0);
  return { h: get("hour") % 24, m: get("minute") };
}

export function AuroraClock({ size = 72 }: { size?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const zoneRef = useRef<string>(CITIES[DEFAULT_CITY].zone);
  const [cityIdx, setCityIdx] = useState(DEFAULT_CITY);
  const [display, setDisplay] = useState<string | null>(null);
  const [webglOk, setWebglOk] = useState(true);

  zoneRef.current = CITIES[cityIdx].zone;

  /* digital readout, updated each minute boundary */
  useEffect(() => {
    const tick = () => {
      const { h, m } = zoneHM(zoneRef.current);
      setDisplay(
        (((h + 11) % 12) + 1) + ":" + String(m).padStart(2, "0") + " " + (h < 12 ? "AM" : "PM")
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [cityIdx]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl2", {
      alpha: true,
      antialias: false,
      preserveDrawingBuffer: true,
    });
    if (!gl) {
      setWebglOk(false);
      return;
    }

    const compile = (type: number, src: string) => {
      const sh = gl.createShader(type)!;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS))
        throw new Error(gl.getShaderInfoLog(sh) ?? "shader");
      return sh;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS))
      throw new Error(gl.getProgramInfoLog(prog) ?? "link");
    gl.useProgram(prog);

    const tri = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, tri);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    const U = (n: string) => gl.getUniformLocation(prog, n);

    /* spectral weights: CIE 1931 CMFs x D65 (verbatim from the piece) */
    const N = 20, L0 = 400, L1 = 696;
    const g = (x: number, mu: number, s1: number, s2: number) => {
      const t = (x - mu) / (x < mu ? s1 : s2);
      return Math.exp(-0.5 * t * t);
    };
    const lambdas: number[] = [];
    const w: number[][] = [];
    let wr = 0, wg = 0, wb = 0;
    for (let i = 0; i < N; i++) {
      const lam = L0 + (L1 - L0) * (i + 0.5) / N;
      const x = 1.056 * g(lam, 599.8, 37.9, 31.0) + 0.362 * g(lam, 442.0, 16.0, 26.7)
              - 0.065 * g(lam, 501.1, 20.4, 26.2);
      const y = 0.821 * g(lam, 568.8, 46.9, 40.5) + 0.286 * g(lam, 530.9, 16.3, 31.1);
      const z = 1.217 * g(lam, 437.0, 11.8, 36.0) + 0.681 * g(lam, 459.0, 26.0, 13.8);
      const lm = lam * 1e-9;
      const spd = 1 / (lm ** 5 * (Math.exp(1.4388e-2 / (lm * 6504)) - 1)) * 1e-45;
      const R = ( 3.2406 * x - 1.5372 * y - 0.4986 * z) * spd;
      const G = (-0.9689 * x + 1.8758 * y + 0.0415 * z) * spd;
      const B = ( 0.0557 * x - 0.2040 * y + 1.0570 * z) * spd;
      lambdas.push(lam);
      w.push([R, G, B]);
      wr += R; wg += G; wb += B;
    }
    const wFlat = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      wFlat[i * 3] = w[i][0] / wr;
      wFlat[i * 3 + 1] = w[i][1] / wg;
      wFlat[i * 3 + 2] = w[i][2] / wb;
    }
    gl.uniform3fv(U("u_wrgb[0]"), wFlat);
    gl.uniform1fv(U("u_lambda[0]"), new Float32Array(lambdas));

    /* film retardances — the piece's tuned defaults */
    gl.uniform4f(U("u_gamma"), 620, 440, 250, 350);
    gl.uniform1f(U("u_gdot"), 520);
    gl.uniform1f(U("u_hax"), 0);
    gl.uniform1f(U("u_grain"), 8.0 / 255);
    gl.uniform1f(U("u_exposure"), 1.18);

    const uAngles = U("u_angles");
    const uSeed = U("u_seed");

    /* time in the selected zone; h/m cached per second, seconds run free */
    let hm = zoneHM(zoneRef.current);
    let hmZone = zoneRef.current;
    let hmAt = Date.now();
    const angles = () => {
      const now = Date.now();
      if (zoneRef.current !== hmZone || now - hmAt > 1000) {
        hm = zoneHM(zoneRef.current);
        hmZone = zoneRef.current;
        hmAt = now;
      }
      const d = new Date();
      const s = d.getSeconds() + d.getMilliseconds() / 1000;
      const TAU = Math.PI * 2;
      return [
        TAU * (((hm.h % 12) + hm.m / 60 + s / 3600) / 12),
        TAU * ((hm.m + s / 60) / 60),
        TAU * (s / 60),
      ] as const;
    };

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = canvas.height = Math.round(size * dpr);
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform1f(U("u_pxScale"), Math.max(dpr, 1));

    const draw = () => {
      const [h, m, s] = angles();
      gl.uniform3f(uAngles, h, m, s);
      const seed = rm.matches ? 7 : Math.floor(performance.now() / 41.7) % 4096;
      gl.uniform1f(uSeed, seed);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    let tick: ReturnType<typeof setInterval> | undefined;
    const run = () => {
      cancelAnimationFrame(raf);
      if (tick) clearInterval(tick);
      if (document.hidden) return;
      if (rm.matches) {
        draw();
        tick = setInterval(draw, 1000);
      } else {
        const loop = () => { draw(); raf = requestAnimationFrame(loop); };
        raf = requestAnimationFrame(loop);
      }
    };
    rm.addEventListener?.("change", run);
    document.addEventListener("visibilitychange", run);
    run();

    return () => {
      cancelAnimationFrame(raf);
      if (tick) clearInterval(tick);
      rm.removeEventListener?.("change", run);
      document.removeEventListener("visibilitychange", run);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [size]);

  const city = CITIES[cityIdx];

  return (
    <div className="flex items-center gap-4">
      <a
        href="https://aurora-clock.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={
          "Aurora Clock — open the full piece. Current time in " +
          (city.label === "SF" ? "San Francisco" : city.label) +
          (display ? ": " + display : "")
        }
        className="group block shrink-0 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-coral)] focus-visible:ring-offset-4 focus-visible:ring-offset-background"
      >
        {webglOk ? (
          <canvas
            ref={canvasRef}
            style={{ width: size, height: size }}
            className="block transition-transform duration-300 ease-out group-hover:scale-[1.06] drop-shadow-[0_3px_10px_rgba(10,9,8,0.28)]"
          />
        ) : (
          <span className="block text-base text-foreground tabular-nums">{display ?? ""}</span>
        )}
      </a>
      <div className="flex flex-col items-start gap-1.5">
        <p className="text-sm text-foreground tabular-nums leading-none">
          {display ?? "—:—"}{" "}
          <span className="text-[color:var(--color-muted-text)]">
            {city.label === "SF" ? "San Francisco" : city.label}
          </span>
        </p>
        {/* Segmented control: one container, sliding selection, equal targets */}
        <div
          role="radiogroup"
          aria-label="City"
          className="relative grid grid-cols-4 rounded-full border border-black/10 dark:border-white/15 bg-black/[0.04] dark:bg-white/[0.06] p-0.5"
        >
          <span
            aria-hidden
            className="absolute top-0.5 bottom-0.5 left-0.5 w-[calc((100%-4px)/4)] rounded-full bg-background shadow-[0_1px_4px_rgba(10,9,8,0.18)] border border-black/[0.06] dark:border-white/10 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none"
            style={{ transform: "translateX(" + cityIdx * 100 + "%)" }}
          />
          {CITIES.map((c, i) => (
            <button
              key={c.label}
              type="button"
              role="radio"
              aria-checked={i === cityIdx}
              onClick={() => setCityIdx(i)}
              className={cn(
                "relative z-10 rounded-full px-2.5 py-1 text-xs leading-none transition-colors outline-none",
                "focus-visible:ring-2 focus-visible:ring-[var(--accent-coral)] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                i === cityIdx
                  ? "text-foreground"
                  : "text-[color:var(--color-muted-text)] hover:text-foreground"
              )}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
