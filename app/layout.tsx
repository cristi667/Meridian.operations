import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meridian Operations | Infrastructure Engineers",
  description: "Architecting Business Infrastructure at Scale.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.gtranslateSettings = {"default_language":"en","detect_browser_language":true,"wrapper_selector":".gtranslate_wrapper"}`
          }}
        />
        <script
          src="https://cdn.gtranslate.net/widgets/latest/float.js"
          defer
        />
      </head>
      <body className="bg-[#0a0a0a] text-white antialiased min-h-screen">
        <div className="gtranslate_wrapper"></div>
        {children}
      </body>
    </html>
  );
}
