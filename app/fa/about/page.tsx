import Navbar from "@/components/Navbar";


export default function AboutFA() {
return (
<main className="flex flex-col gap-8" dir="rtl">
<Navbar lang="fa" />
<section className="space-y-4 text-right">
<h1 className="text-3xl font-bold">درباره من</h1>
<p className="text-sm leading-relaxed max-w-3xl">
من محمد مروتی هستم، توسعه‌دهنده‌ای که عاشق ساخت تجربه‌های دیجیتالی، وب‌اپلیکیشن‌ها
و پروژه‌های تعاملی بازی است. در زمینه فرانت‌اند، UI/UX و پروژه‌های خلاقانه فعالیت می‌کنم.
</p>
</section>
</main>
);
}