import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@gravity-ui/uikit/styles/fonts.css";
import "@gravity-ui/uikit/styles/styles.css";
import clsx from "clsx";
import NavBar from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "g-root g-root_theme_light")}>
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
