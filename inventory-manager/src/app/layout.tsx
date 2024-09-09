import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import packageJson from "../../package.json";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Mökki-inventaario",
  description:
    "Inventaario käyttöliittymä mökin ruokatarvikkeiden päivittämiseen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-[#ac8968] ${geistSans.variable} ${geistMono.variable}`}
      >
        {children}
        <p
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            textAlign: "center",
          }}
        >
          {packageJson.version}
        </p>
      </body>
    </html>
  );
}
