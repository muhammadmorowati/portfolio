// app/about/page.tsx
import Navbar from "@/components/Navbar";
import SocialLinks from "@/components/SocialLinks";

export default function AboutEN() {
  return (
    <div className="space-y-8">
      <Navbar lang="en" />

      <section className="mt-6 text-left space-y-4">
        <h1 className="text-3xl font-bold">About me</h1>
        <p className="text-sm sm:text-base text-slate-700 max-w-2xl">
          I'm Muhammad Morowati, a frontend developer and game creator. I enjoy
          turning ideas into interactive products and clean interfaces. My main
          tools are React, Next.js and TypeScript.
        </p>
        <p className="text-sm sm:text-base text-slate-700 max-w-2xl">
          I like to focus on readable code, simple architecture and good UX.
          Outside of coding, I enjoy exploring game design and learning new
          technologies.
        </p>
      </section>

      <SocialLinks direction="ltr" lang="en" />
    </div>
  );
}
