"use client";
import { motion } from "framer-motion";


type HeroProps = {
direction: "ltr" | "rtl";
title: string;
role: string;
subtitle: string;
cta: string;
};


export default function Hero({ direction, title, role, subtitle, cta }: HeroProps) {
const isRTL = direction === "rtl";


return (
<section className={isRTL ? "text-right" : "text-left"}>
<motion.div
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}
className="p-8 rounded-3xl border border-slate-200 bg-white shadow-sm"
>
<h1 className="text-3xl font-bold mb-2">{title}</h1>
<h2 className="text-lg text-blue-600 font-medium mb-4">{role}</h2>
<p className="text-sm leading-relaxed max-w-2xl mb-6">{subtitle}</p>
<a href="#projects" className="inline-block px-4 py-2 rounded-full bg-blue-600 text-white text-sm shadow">
{cta}
</a>
</motion.div>
</section>
);
}