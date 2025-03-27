import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vinayak Constructions",
  description: "Vinayak Construction Company is a reputed firm specializing in residential, commercial,PEB, Warehouse and infrastructure development projects across India. With a strong presence in multiple regions, the company offers a range of services, including: Construction & Project Management – End-to-end solutions for residential, commercial, and industrial projects.Renovation & Interior Design – Enhancing existing structures with modern aesthetics.Infrastructure Development – Roads, bridges, and public works projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
      <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
