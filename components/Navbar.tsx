"use client";
import Link from "next/link";
import { motion } from "framer-motion";


type Props = { lang: "en" | "fa" };


export default function Navbar({ lang }: Props) {
const isFA = lang === "fa";
return (
<motion.nav
initial={{ opacity: 0, y: -10 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.4 }}
className="flex justify-between items-center py-4 border-b border-slate-200"
>
<Link href={isFA ? "/fa" : "/"} className="font-semibold text-lg">
{isFA ? "خانه" : "Home"}
</Link>


<div className="flex gap-4 text-sm">
<Link href={isFA ? "/fa/about" : "/about"}>{isFA ? "درباره" : "About"}</Link>
<Link href={isFA ? "/fa/contact" : "/contact"}>{isFA ? "تماس" : "Contact"}</Link>
<Link href={isFA ? "/fa" : "/#projects"}>{isFA ? "پروژه‌ها" : "Projects"}</Link>
</div>


<Link href={isFA ? "/" : "/fa"} className="px-3 py-1 rounded-full border border-slate-300">
{isFA ? "EN" : "فا"}
</Link>
</motion.nav>
);
}