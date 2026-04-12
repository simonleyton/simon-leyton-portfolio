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
  title: "Simon Leyton",
  description: "Designing what comes next.",
  openGraph: {
    title: "Simon Leyton",
    description: "Designing what comes next.",
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
        <meta name="theme-color" content="#F5A574" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1E3A5F" media="(prefers-color-scheme: dark)" />
        {/* Theme init + dynamic favicon swap */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(!t)t=matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';if(t==='dark')document.documentElement.classList.add('dark');document.documentElement.setAttribute('data-theme',t)}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
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
