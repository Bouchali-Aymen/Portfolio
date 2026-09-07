import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),
  title: "Aymen Bouchali – Full-Stack Engineer",
  description:
    "Full-stack engineer specializing in modern web platforms, applied machine learning, and cybersecurity.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Aymen Bouchali – Full-Stack Engineer",
    description:
      "Experience, projects, and skills across web engineering, AI, networks, and security.",
    url: "https://your-domain.com",
    siteName: "Aymen Bouchali",
    images: [{ url: "/me.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aymen Bouchali – Full-Stack Engineer",
    description:
      "Experience, projects, and skills across web engineering, AI, networks, and security.",
    images: ["/me.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme) {
                    document.documentElement.setAttribute('data-theme', theme);
                  } else {
                    var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                    document.documentElement.setAttribute('data-theme', systemTheme);
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${display.variable} ${body.variable} font-body bg-theme-bg-primary text-theme-text-primary antialiased transition-colors duration-300`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
