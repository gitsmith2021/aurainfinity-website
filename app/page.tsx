import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Ecosystem } from "@/components/Ecosystem";
import { Philosophy } from "@/components/Philosophy";
import { Mission } from "@/components/Mission";
import { Technology } from "@/components/Technology";
import { Timeline } from "@/components/Timeline";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  slogan: siteConfig.tagline,
  description: siteConfig.description,
  url: siteConfig.url,
  email: siteConfig.email,
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Ecosystem />
        <Philosophy />
        <Mission />
        <Technology />
        <Timeline />
      </main>
      <Footer />
    </>
  );
}
