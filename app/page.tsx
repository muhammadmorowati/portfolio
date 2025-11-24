// app/page.tsx
import Navbar from "@/components/Navbar";
import ProjectList from "@/components/ProjectList";
import SocialLinks from "@/components/SocialLinks";

export default function PageEN() {
  return (
    <div className="space-y-10">
      <Navbar lang="en" />

      <section className="mt-6 text-left">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          Hi, I'm Muhammad Morowati
        </h1>
        <h2 className="text-sm sm:text-base text-blue-700 font-medium mb-4">
          Frontend Developer & Game Creator
        </h2>
        <p className="text-sm sm:text-base text-slate-700 max-w-2xl">
          I build modern web applications and interactive game experiences. I
          enjoy working with Next.js, TypeScript and UI/UX to create clean,
          responsive and enjoyable products.
        </p>
      </section>

      <ProjectList
        title="My Projects"
        direction="ltr"
        projects={[
          {
            title: "Red Light – Green Light (Squid Game)",
            description:
              "Recreation of the iconic Squid Game challenge. Published on itch.io.",
            url: "https://muhammadmorowati.itch.io/red-light-green-light",
            urlLabel: "Play the game",
            tags: ["Game", "3D", "Interactive"],
          },
          {
            title: "ArzDigital",
            description:
              "Modern, responsive crypto web app built with Next.js and APIs.",
            url: "https://arzdigital.vercel.app/",
            urlLabel: "Open website",
            tags: ["Next.js", "Crypto", "Responsive"],
          },
        ]}
      />

      <SocialLinks direction="ltr" lang="en" />
    </div>
  );
}
