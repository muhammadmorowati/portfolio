// app/contact/page.tsx
import Navbar from "@/components/Navbar";
import SocialLinks from "@/components/SocialLinks";

export default function ContactPageEN() {
  return (
    <div className="space-y-8">
      <Navbar lang="en" />

      <section className="mt-6 text-left space-y-4 max-w-xl">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="text-sm sm:text-base text-slate-700">
          The best way to reach me is email or Telegram. I’m open to frontend
          roles, collaboration on web, and interesting
          opportunities.
        </p>
      </section>

      <SocialLinks direction="ltr" lang="en" />
    </div>
  );
}
