import type { Metadata } from "next";
import "@/assets/font/bootstrap-font/bootstrap-icons.min.css";
import "@/assets/font/font-awsome/css-js/all.min.css";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer";
import PathNameLoad from "@/utils/pathNameLoad";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Digiv",
  description: "Digiv Creative Digital Agency next.js template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <PathNameLoad />
        <Header />
        {children}
        <Footer />
        <Script
          src="/assets/font/font-awsome/css-js/all.min.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
