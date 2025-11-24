import Navbar from "@/components/Navbar";


export default function ServicesFA() {
return (
<main className="flex flex-col gap-8" dir="rtl">
<Navbar lang="fa" />
<section>
<h1 className="text-3xl font-bold mb-4 text-right">خدمات</h1>
<ul className="list-disc pr-5 space-y-2 text-sm text-right">
<li>توسعه وب (Next.js + TypeScript)</li>
<li>طراحی رابط کاربری</li>
<li>برندسازی و هویت بصری</li>
<li>طراحی واکنش‌گرا و مدرن</li>
</ul>
</section>
</main>
);
}