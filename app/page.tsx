import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import BenefitsSection from "@/components/sections/benefits";
import CoursesSection from "@/components/sections/courses";
import RequirementsSection from "@/components/sections/requirements";
import MedpartSection from "@/components/sections/medpart";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <BenefitsSection />
        <CoursesSection />
        <RequirementsSection />
        <MedpartSection />
      </main>
      <Footer />
    </div>
  );
}