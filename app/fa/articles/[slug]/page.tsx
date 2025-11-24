import Navbar from "@/components/Navbar";
import { articlesFA } from "@/data/articles-fa";
import { notFound } from "next/navigation";

type ArticleProps = {
  params: Promise<{ slug: string }>;
};

export default async function ArticleFA({ params }: ArticleProps) {
  const { slug } = await params;

  const article = articlesFA.find((a) => a.slug === slug);
  if (!article) return notFound();

  return (
    <>
      <Navbar lang="fa" />

      <article
        dir="rtl"
        className="max-w-3xl mx-auto py-10 px-4 space-y-6 prose prose-slate"
      >
        <h1 className="text-3xl font-bold">{article.title}</h1>

        <div
          className="prose prose-slate leading-8"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>
    </>
  );
}
