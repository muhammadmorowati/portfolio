"use client";

import { motion } from "framer-motion";

type ContactProps = {
  direction: "ltr" | "rtl";
  lang: "en" | "fa";
};

const EMAIL = "muhammadmorowati@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/muhammad-morowati-246617324";
const TELEGRAM = "https://t.me/mhmorowati";
const GITHUB = "https://github.com/muhammadmorowati";

export default function Contact({ direction, lang }: ContactProps) {
  const isRTL = direction === "rtl";
  const isFA = lang === "fa";

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className={`mt-10 border-t border-slate-200 pt-6 ${
        isRTL ? "text-right" : "text-left"
      }`}
    >
      <h2 className="text-2xl font-bold mb-3">
        {isFA ? "ارتباط با من" : "Contact Me"}
      </h2>

      <p className="text-sm text-slate-600 mb-4 max-w-xl">
        {isFA
          ? "برای همکاری، سوال یا هر نوع ارتباط کاری می‌توانید از راه‌های زیر با من در تماس باشید."
          : "For collaborations, questions, or any work inquiry, feel free to reach out via the links below."}
      </p>

      <ul className="space-y-2 text-sm">
        <li>
          <span className="font-medium">
            {isFA ? "ایمیل:" : "Email:"}{" "}
          </span>
          <a
            href={`mailto:${EMAIL}`}
            className="text-blue-600 underline underline-offset-2"
          >
            {EMAIL}
          </a>
        </li>

        <li>
          <span className="font-medium">
            {isFA ? "لینکدین:" : "LinkedIn:"}{" "}
          </span>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline underline-offset-2"
          >
            {LINKEDIN}
          </a>
        </li>

        <li>
          <span className="font-medium">
            {isFA ? "تلگرام:" : "Telegram:"}{" "}
          </span>
          <a
            href={TELEGRAM}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline underline-offset-2"
          >
            {TELEGRAM}
          </a>
        </li>

        <li>
          <span className="font-medium">GitHub: </span>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline underline-offset-2"
          >
            {GITHUB}
          </a>
        </li>
      </ul>
    </motion.section>
  );
}
