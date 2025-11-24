import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Vazirmatn } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });
const vazirmatn = Vazirmatn({ subsets: ["arabic"], weight: ["400","500","600","700"] });


export const metadata: Metadata = {
title: "Muhammad Morowati – Portfolio",
description: "Bilingual portfolio of Muhammad Morowati",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body className={`${inter.className} ${vazirmatn.className} bg-white text-slate-900 min-h-screen`}>
<div className="min-h-screen flex flex-col max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-6">
{children}
</div>
</body>
</html>
);
}