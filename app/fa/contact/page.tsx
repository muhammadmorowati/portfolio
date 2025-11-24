// app/fa/contact/page.tsx
import Navbar from "@/components/Navbar";
import SocialLinks from "@/components/SocialLinks";

export default function ContactPageFA() {
  return (
    <div className="space-y-8" dir="rtl">
      <Navbar lang="fa" />

      <section className="mt-6 text-right space-y-4 max-w-xl ml-auto">
        <h1 className="text-3xl font-bold">ارتباط با من</h1>
        <p className="text-sm sm:text-base text-slate-700">
          بهترین راه برای ارتباط با من ایمیل یا تلگرام است. برای همکاری روی
          پروژه‌های فرانت‌اند، وب و بازی یا فرصت‌های جذاب می‌تونید پیام بدید.
        </p>
      </section>

      <SocialLinks direction="rtl" lang="fa" />
    </div>
  );
}
