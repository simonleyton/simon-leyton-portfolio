import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { MiamiBackground } from "@/components/MiamiBackground";
import { AboutModalProvider } from "@/components/AboutModal";

const helveticaNow = localFont({
  src: [
    {
      path: "../fonts/HelveticaNowText-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/HelveticaNowText-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Simon Leyton • Product Designer at Zillow, Meta, Hulu",
  description: "Simon Leyton • Product Designer at Zillow, Meta, Hulu",
  openGraph: {
    title: "Simon Leyton",
    description: "Simon Leyton • Product Designer at Zillow, Meta, Hulu",
    images: ["/seo/social-preview-1.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${helveticaNow.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        {/* Dark mode favicon support */}
        <link rel="icon" href="/favicon-dark.svg" type="image/svg+xml" media="(prefers-color-scheme: dark)" />
        <link rel="apple-touch-icon" href="/apple-touch-icon-dark.png" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#2f86c9" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0d1838" media="(prefers-color-scheme: dark)" />
        {/* Theme init + dynamic favicon swap */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(!t)t=matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';if(t==='dark')document.documentElement.classList.add('dark');document.documentElement.setAttribute('data-theme',t)}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        {/* Skip link — first focusable element, jumps past the nav to content */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-foreground focus:px-5 focus:py-2.5 focus:text-[14px] focus:text-background focus:outline-none focus:ring-2 focus:ring-[var(--accent-coral)] focus:ring-offset-2 focus:ring-offset-background"
        >
          Skip to content
        </a>
        <ThemeProvider>
          <AboutModalProvider>
            <MiamiBackground />
            {children}
          </AboutModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
