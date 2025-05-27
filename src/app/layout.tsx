import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Providers } from "@/providers";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Computers Crud",
  description:
    "Create, update, delete, and list computers through a form, using best coding practices, optimizing with Next.js features, and MockAPI to simulate a real API.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
