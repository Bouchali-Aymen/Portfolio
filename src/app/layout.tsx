import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
const roboto = Roboto_Condensed({
  subsets:['latin'],
  variable:'--font-roboto',
  weight:'400'
})
export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'),
  title: 'Aymen Bouchali – Full Stack Developer',
  description: 'Full-stack developer building modern web apps with Next.js, Node, and more.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Aymen Bouchali – Full Stack Developer',
    description: 'Portfolio, personal and professional projects, experience, and contact.',
    url: 'https://your-domain.com',
    siteName: 'Aymen Bouchali',
    images: [{ url: '/next.svg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aymen Bouchali – Full Stack Developer',
    description: 'Portfolio, personal and professional projects, experience, and contact.',
    images: ['/next.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

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
      <body className={`${roboto.variable} font-roboto bg-theme-bg-primary text-theme-text-primary transition-colors duration-300`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
