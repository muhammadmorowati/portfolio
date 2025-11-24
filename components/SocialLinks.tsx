// components/SocialLinks.tsx

type SocialLinksProps = {
  direction: "ltr" | "rtl";
  lang: "en" | "fa";
};

export default function SocialLinks({ direction, lang }: SocialLinksProps) {
  const isRTL = direction === "rtl";

  return (
    <section className={`${isRTL ? "text-right" : "text-left"} mt-8`}>
      <h2 className="text-lg font-semibold mb-3">
        {lang === "fa" ? "راه‌های ارتباطی" : "How to reach me"}
      </h2>
      <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
        <li>
          <span className="font-medium">
            {lang === "fa" ? "ایمیل" : "Email"}:
          </span>{" "}
          <a
            href="mailto:muhammadmorowati@gmail.com"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            muhammadmorowati@gmail.com
          </a>
        </li>
        <li>
          <span className="font-medium">LinkedIn:</span>{" "}
          <a
            href="https://www.linkedin.com/in/muhammad-morowati-246617324"
            className="text-blue-600 hover:text-blue-800 underline"
            target="_blank"
            rel="noreferrer"
          >
            /in/muhammad-morowati-246617324
          </a>
        </li>
        <li>
          <span className="font-medium">Telegram:</span>{" "}
          <a
            href="https://t.me/mhmorowati"
            className="text-blue-600 hover:text-blue-800 underline"
            target="_blank"
            rel="noreferrer"
          >
            @mhmorowati
          </a>
        </li>
        <li>
          <span className="font-medium">GitHub:</span>{" "}
          <a
            href="https://github.com/muhammadmorowati"
            className="text-blue-600 hover:text-blue-800 underline"
            target="_blank"
            rel="noreferrer"
          >
            github.com/muhammadmorowati
          </a>
        </li>
      </ul>
    </section>
  );
}
