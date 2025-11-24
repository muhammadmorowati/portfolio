// app/fa/about/page.tsx
import Navbar from "@/components/Navbar";
import SocialLinks from "@/components/SocialLinks";

export default function AboutFA() {
  return (
    <div className="space-y-8" dir="rtl">
      <Navbar lang="fa" />

      <section className="mt-6 text-right space-y-4">
        <h1 className="text-3xl font-bold">درباره من</h1>
        <p className="text-sm sm:text-base text-slate-700 max-w-2xl ml-auto">
          من محمد مروتی هستم؛ توسعه‌دهنده فرانت‌اند و سازنده بازی. از اینکه
          ایده‌ها را به تجربه‌های تعاملی و رابط‌های کاربری تمیز تبدیل کنم لذت
          می‌برم. ابزار اصلی من React، Next.js و TypeScript است.
        </p>
        <p className="text-sm sm:text-base text-slate-700 max-w-2xl ml-auto">
          روی کد قابل‌خواندن، معماری ساده و تجربه کاربری خوب تمرکز می‌کنم. خارج
          از کدنویسی، به طراحی بازی و یادگیری تکنولوژی‌های جدید علاقه دارم.
        </p>
      </section>

      <SocialLinks direction="rtl" lang="fa" />
    </div>
  );
}
