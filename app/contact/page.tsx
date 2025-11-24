import Navbar from "@/components/Navbar";


export default function ContactPageEN() {
return (
<main className="flex flex-col gap-8 w-full">
<Navbar lang="en" />


<section>
<h1 className="text-3xl font-bold mb-4">Contact Me</h1>
<p className="text-sm text-slate-700 mb-6 max-w-xl">
Feel free to contact me using any of the links below.
</p>


<ul className="space-y-3 text-sm">
<li>Email: <a className="text-blue-600 underline" href="mailto:muhammadmorowati@gmail.com">muhammadmorowati@gmail.com</a></li>
<li>LinkedIn: <a className="text-blue-600 underline" href="https://www.linkedin.com/in/muhammad-morowati-246617324">LinkedIn Profile</a></li>
<li>Telegram: <a className="text-blue-600 underline" href="https://t.me/mhmorowati">@mhmorowati</a></li>
<li>GitHub: <a className="text-blue-600 underline" href="https://github.com/muhammadmorowati">github.com/muhammadmorowati</a></li>
</ul>
</section>
</main>
);
}