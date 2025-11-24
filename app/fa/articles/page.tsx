import ArticleCard from "@/components/ArticleCard";
import Navbar from "@/components/Navbar";

export default function ArticlesPageFA() {
  const articles = [
    {
      title: "استقلال API در مقیاس‌پذیری: شبیه‌سازی، تست قرارداد و مشاهده‌پذیری در محیط‌های بزرگ میکروسرویس",
      summary: "تام آکهرست استراتژی‌هایی را برای غلبه بر نقاط ضعف میکروسرویس مانند وابستگی به محیط و توسعه آهسته توضیح می‌دهد. او از استفاده از شبیه‌سازی واقع‌گرایانه API در مقیاس بزرگ، با پشتیبانی از تست قرارداد، مشاهده‌پذیری API و ادغام GenAI حمایت می‌کند. یاد بگیرید که مشاهدات، شبیه‌سازی‌ها و قراردادها را برای به حداکثر رساندن اطمینان و کاهش زحمت حفظ ماکت‌های واقع‌گرایانه و به‌روز، ترکیب کنید.",
      slug: "article-1",
    },
    {
      title: "عنوان مقاله ۲",
      summary: "خلاصه مقاله...",
      slug: "article-2",
    },
  ];

    return (
        <>
        <Navbar lang="fa" />
      <div className="space-y-6" dir="rtl">
          
      <h1 className="text-2xl font-bold">همه مقالات</h1>

      <div className="grid gap-4 sm:grid-cols-2">
        {articles.map((a) => (
          <ArticleCard key={a.slug} {...a} direction="rtl" />
        ))}
      </div>
            </div>
        </>
  );
}
