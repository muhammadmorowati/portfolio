// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavbarProps = {
  lang: "en" | "fa";
};

const linkBase =
  "text-sm px-2 py-1 rounded-md transition-colors hover:text-blue-700 hover:bg-blue-50";
const linkActive = "text-blue-700 bg-blue-50 font-medium";

export default function Navbar({ lang }: NavbarProps) {
  const pathname = usePathname();
  const isFA = lang === "fa";

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="flex items-center justify-between gap-4">
      <div className="flex flex-col">
        <span className="font-semibold text-sm sm:text-base">
          {isFA ? "محمد مروتی" : "Muhammad Morowati"}
        </span>
      </div>

      <div className="flex items-center gap-4 text-xs sm:text-sm">
        <Link
          href={isFA ? "/fa" : "/"}
          className={`${linkBase} ${isActive(isFA ? "/fa" : "/") ? linkActive : ""}`}
        >
          {isFA ? "خانه" : "Home"}
        </Link>
        <Link
          href={isFA ? "/fa/about" : "/about"}
          className={`${linkBase} ${
            isActive(isFA ? "/fa/about" : "/about") ? linkActive : ""
          }`}
        >
          {isFA ? "درباره" : "About"}
        </Link>
        <Link
          href={isFA ? "/fa/contact" : "/contact"}
          className={`${linkBase} ${
            isActive(isFA ? "/fa/contact" : "/contact") ? linkActive : ""
          }`}
        >
          {isFA ? "تماس" : "Contact"}
        </Link>

        <Link
          href={isFA ? "/" : "/fa"}
          className="text-xs border border-slate-300 px-2 py-1 rounded-full hover:border-blue-400 hover:text-blue-700 transition-colors"
        >
          {isFA ? "EN" : "فا"}
        </Link>
      </div>
    </nav>
  );
}
