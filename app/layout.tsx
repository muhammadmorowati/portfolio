// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Vazirmatn } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Muhammad Morowati – Portfolio",
  description: "Bilingual portfolio of Muhammad Morowati (EN/FA)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${vazirmatn.className} bg-slate-50 text-slate-900 min-h-screen`}
      >
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              {/* Navbar داخل هر صفحه رندر می‌شود */}
            </div>
          </header>
          <main className="flex-1">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              {children}
            </div>
          </main>
          <footer className="border-t border-slate-200 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-slate-500 flex justify-between flex-wrap gap-2">
              <span>© {new Date().getFullYear()} Muhammad Morowati</span>
              <span>Built with Next.js & TypeScript</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
