import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import { Header } from "@/components/ecommerce/header";
import { Footer } from "@/components/ecommerce/footer";
import { IntelliChat } from "@/components/ecommerce/intelli-chat";
import { Newsletter } from "@/components/ecommerce/newsletter";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Intelli Project",
};

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  return (
    <html
      lang={locale}
      className={inter.variable}
    >
      <body className="scroll-smooth antialiased">
        <Header />

        <main className="pt-20 lg:pt-28">{children}</main>

        <Newsletter />
        <Footer />
        <IntelliChat />
      </body>
    </html>
  );
}
