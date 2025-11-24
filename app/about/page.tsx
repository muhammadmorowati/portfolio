import Navbar from "@/components/Navbar";


export default function AboutEN() {
return (
<main className="flex flex-col gap-8">
<Navbar lang="en" />
<section className="space-y-4">
<h1 className="text-3xl font-bold">About Me</h1>
<p className="text-sm leading-relaxed max-w-3xl">
I'm Muhammad Morowati — a developer who enjoys creating digital experiences, web apps,
and interactive game projects. I specialize in frontend engineering, UI/UX design,
and creative game work.
</p>
</section>
</main>
);
}