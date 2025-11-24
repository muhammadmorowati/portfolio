// app/fa/page.tsx
import Navbar from "@/components/Navbar";
import ProjectList from "@/components/ProjectList";
import SocialLinks from "@/components/SocialLinks";

export default function PageFA() {
  return (
    <div className="space-y-10" dir="rtl">
      <Navbar lang="fa" />

      <section className="mt-6 text-right">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          سلام، من محمد مروتی هستم
        </h1>
        <h2 className="text-sm sm:text-base text-blue-700 font-medium mb-4">
          توسعه‌دهنده فرانت‌اند و سازنده بازی
        </h2>
        <p className="text-sm sm:text-base text-slate-700 max-w-2xl ml-auto">
          من وب‌اپلیکیشن‌های مدرن و تجربه‌های تعاملی می‌سازم. با Next.js،
          TypeScript و طراحی رابط کاربری کار می‌کنم تا محصولات تمیز، واکنش‌گرا و
          لذت‌بخش بسازم.
        </p>
      </section>

      <ProjectList
        title="پروژه‌های من"
        direction="rtl"
        projects={[
          {
            title: "Red Light – Green Light (بازی Squid Game)",
            description:
              "بازسازی مرحله معروف Squid Game و منتشر شده در itch.io.",
            url: "https://muhammadmorowati.itch.io/red-light-green-light",
            urlLabel: "اجرای بازی",
            tags: ["بازی", "3D", "تعاملی"],
          },
          {
            title: "ارزدیجیتال (ArzDigital)",
            description:
              "یک وب‌سایت مدرن و واکنش‌گرا در حوزه کریپتو، توسعه‌یافته با Next.js.",
            url: "https://arzdigital.vercel.app/",
            urlLabel: "مشاهده سایت",
            tags: ["Next.js", "کریپتو", "Responsive"],
          },
        ]}
      />

      <SocialLinks direction="rtl" lang="fa" />
    </div>
  );
}
