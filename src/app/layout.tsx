/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Jataí",
  description:
    "Construindo organizações públicas para o mundo digital e sustentável.",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-[100vh] flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-E2E5R7TPJW" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());

          gtag('config', 'G-E2E5R7TPJW');
        `}
        </Script>
      </body>
    </html>
  );
}
