import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";


export default function PageEN() {
return (
<main className="flex flex-col gap-12 w-full">
<Navbar lang="en" />
<Hero
direction="ltr"
title="Hi, I'm Muhammad Morowati"
role="Frontend Developer & Game Creator"
subtitle="I build modern web apps and creative interactive experiences using Next.js, TypeScript and game engines."
cta="View my work"
/>
<Projects
direction="ltr"
sectionTitle="My Projects"
projects={[
{
title: "Red Light – Green Light (Squid Game)",
description: "A recreation of the iconic Squid Game challenge, published on itch.io.",
url: "https://muhammadmorowati.itch.io/red-light-green-light",
urlLabel: "Play game",
tags: ["Game", "3D", "Engine"],
},
{
title: "ArzDigital",
description: "A responsive modern crypto platform built in Next.js.",
url: "https://arzdigital.vercel.app/",
urlLabel: "Open website",
tags: ["Next.js", "Crypto", "API"],
},
]}
/>


<Contact direction="ltr" lang="en" />
</main>
);
}