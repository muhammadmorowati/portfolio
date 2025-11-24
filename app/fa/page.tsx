import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";


export default function PageFA() {
return (
<main className="flex flex-col gap-12 w-full" dir="rtl">
<Navbar lang="fa" />
<Hero
direction="rtl"
title="سلام، من محمد مروتی هستم"
role="توسعه‌دهنده فرانت‌اند و سازنده بازی"
subtitle="من وب‌اپلیکیشن‌های مدرن و پروژه‌های تعاملی خلاقانه می‌سازم و با Next.js و موتورهای بازی کار می‌کنم."
cta="دیدن پروژه‌ها"
/>


<Projects
direction="rtl"
sectionTitle="پروژه‌های من"
projects={[
{
title: "Red Light – Green Light (بازی Squid Game)",
description: "بازسازی مرحله معروف Squid Game و منتشر شده در itch.io.",
url: "https://muhammadmorowati.itch.io/red-light-green-light",
urlLabel: "اجرای بازی",
tags: ["بازی", "3D", "Engine"],
},
{
title: "ارزدیجیتال (ArzDigital)",
description: "وب‌سایتی مدرن و واکنش‌گرا در حوزه کریپتو توسعه‌یافته با Next.js.",
url: "https://arzdigital.vercel.app/",
urlLabel: "مشاهده سایت",
tags: ["Next.js", "Crypto"],
},
]}
/>


<Contact direction="rtl" lang="fa" />
</main>
);
}