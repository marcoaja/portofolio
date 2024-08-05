import type { Metadata } from "next";
import "./styles/globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Portofolio",
  description: "Yeshua Marco Portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-indigo-950 text-white ${poppins.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
