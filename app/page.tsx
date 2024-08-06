import AboutSection from "./(sections)/AboutSection";
import ContactSection from "./(sections)/ContactSection";
import IntroSection from "./(sections)/IntroSection";
import ProjectsSection from "./(sections)/ProjectsSection";
import Footer from "@components/Footer";
import Header from "@components/Header";

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="flex flex-col items-center bg-[#f2f9ff]">
        <IntroSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
