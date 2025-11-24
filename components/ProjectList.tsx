// components/ProjectList.tsx

export type Project = {
  title: string;
  description: string;
  url: string;
  urlLabel: string;
  tags?: string[];
};

type ProjectListProps = {
  title: string;
  direction: "ltr" | "rtl";
  projects: Project[];
};

export default function ProjectList({
  title,
  direction,
  projects,
}: ProjectListProps) {
  const isRTL = direction === "rtl";

  return (
    <section
      id="projects"
      className={`mt-8 ${isRTL ? "text-right" : "text-left"}`}
    >
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">{title}</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col gap-3"
          >
            <div className="flex justify-between items-start gap-2">
              <h3 className="font-semibold text-sm sm:text-base">{p.title}</h3>
              {p.tags && p.tags.length > 0 && (
                <span className="text-[0.65rem] text-slate-400 uppercase tracking-wide">
                  {isRTL ? "پروژه" : "Project"}
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm text-slate-600">{p.description}</p>

            {p.tags && p.tags.length > 0 && (
              <div
                className={`flex flex-wrap gap-1.5 ${
                  isRTL ? "justify-end" : "justify-start"
                }`}
              >
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[0.65rem] rounded-full bg-slate-100 border border-slate-200 text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className={`mt-auto text-xs sm:text-sm text-blue-600 hover:text-blue-800 underline underline-offset-4 ${
                isRTL ? "self-start" : "self-start"
              }`}
            >
              {p.urlLabel}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
