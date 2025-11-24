import Link from "next/link";

type ArticleCardProps = {
  title: string;
  summary: string;
  slug: string;
  direction: "ltr" | "rtl";
};

export default function ArticleCard({ title, summary, slug, direction }: ArticleCardProps) {
  const isRTL = direction === "rtl";

  return (
    <Link
      href={isRTL ? `/fa/articles/${slug}` : `/articles/${slug}`}
      className={`block p-5 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow ${isRTL ? "text-right" : "text-left"}`}
    >
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="text-sm text-slate-600 mt-1">{summary}</p>

      <span className="text-xs text-blue-600 underline mt-2 inline-block">
        {isRTL ? "مطالعه مقاله" : "Read article"}
      </span>
    </Link>
  );
}
