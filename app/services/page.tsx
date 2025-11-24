import Navbar from "@/components/Navbar";


export default function ServicesEN() {
return (
<main className="flex flex-col gap-8">
<Navbar lang="en" />
<section>
<h1 className="text-3xl font-bold mb-4">Services</h1>
<ul className="list-disc pl-5 space-y-2 text-sm">
<li>Web development (Next.js + TypeScript)</li>
<li>UI/UX Design</li>
<li>Branding and visual systems</li>
<li>Responsive modern layouts</li>
</ul>
</section>
</main>
);
}