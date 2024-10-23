import type { Metadata } from "next";
import "./globals.css";
import packageJson from "../../package.json";
import { inter, lusitana } from "./fonts/fonts";

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
      <body className={`bg-background ${inter.className} antialiased}`}>
        {children}
        <p
          className={`${lusitana.className} antialiased`}
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
