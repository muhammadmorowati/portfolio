"use client";
import { motion } from "framer-motion";


const containerVariants = {
hidden: { opacity: 0, y: 16 },
visible: {
opacity: 1,
y: 0,
transition: {
duration: 0.5,
ease: ["easeOut"],
staggerChildren: 0.08,
},
},
};


const cardVariants = {
hidden: { opacity: 0, y: 12 },
visible: {
opacity: 1,
y: 0,
transition: { duration: 0.4, ease: ["easeOut"] },
},
};


type Project = { title: string; description: string; url: string; urlLabel: string; tags?: string[] };
type ProjectsProps = { direction: "ltr" | "rtl"; sectionTitle: string; projects: Project[] };


export default function Projects({ direction, sectionTitle, projects }: ProjectsProps) {
const isRTL = direction === "rtl";


return (
<section id="projects" className={isRTL ? "text-right" : "text-left"}>
<motion.div
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.2 }}
variants={containerVariants}
className="space-y-6"
>
<motion.h3 variants={cardVariants} className="text-2xl font-bold">
{sectionTitle}
</motion.h3>


<motion.div variants={cardVariants} className="grid gap-6 sm:grid-cols-2">
{projects.map((project) => (
<motion.article
key={project.title}
variants={cardVariants}
className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition"
>
<h4 className="font-semibold text-lg mb-2">{project.title}</h4>
<p className="text-sm text-slate-600 mb-3">{project.description}</p>


{project.tags && (
<div className={`flex flex-wrap gap-2 mb-3 ${isRTL ? "justify-end" : "justify-start"}`}>
{project.tags.map((tag) => (
<span
key={tag}
className="px-2 py-1 rounded-full bg-slate-100 border text-xs"
>
{tag}
</span>
))}
</div>
)}


<a
href={project.url}
target="_blank"
className="text-blue-600 text-sm underline"
>
{project.urlLabel}
</a>
</motion.article>
))}
</motion.div>
</motion.div>
</section>
);
}