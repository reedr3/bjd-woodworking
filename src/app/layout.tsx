import type { Metadata } from "next";
import { Courier_Prime, Lora, Playfair_Display } from "next/font/google";
import "./globals.css";

const fontHobbitDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-hobbit-display-next",
  display: "swap",
});

const fontHobbitBody = Lora({
  subsets: ["latin"],
  variable: "--font-hobbit-body-next",
  display: "swap",
});

const fontHobbitUi = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-hobbit-ui-next",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BJD Woodworking",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${fontHobbitDisplay.variable} ${fontHobbitBody.variable} ${fontHobbitUi.variable}`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
