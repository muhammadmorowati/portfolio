import Navbar from "@/components/Navbar";


export default function ContactPageFA() {
return (
<main className="flex flex-col gap-8 w-full" dir="rtl">
<Navbar lang="fa" />


<section className="text-right">
<h1 className="text-3xl font-bold mb-4">ارتباط با من</h1>
<p className="text-sm text-slate-700 mb-6 max-w-xl">
از طریق لینک‌های زیر می‌تونید با من در تماس باشید.
</p>


<ul className="space-y-3 text-sm">
<li>ایمیل: <a className="text-blue-600 underline" href="mailto:muhammadmorowati@gmail.com">muhammadmorowati@gmail.com</a></li>
<li>لینکدین: <a className="text-blue-600 underline" href="https://www.linkedin.com/in/muhammad-morowati-246617324">پروفایل لینکدین</a></li>
<li>تلگرام: <a className="text-blue-600 underline" href="https://t.me/mhmorowati">@mhmorowati</a></li>
<li>گیت‌هاب: <a className="text-blue-600 underline" href="https://github.com/muhammadmorowati">github.com/muhammadmorowati</a></li>
</ul>
</section>
</main>
);
}