import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsCards from "@/components/ProjectsCards";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import BlogPreview from "@/components/BlogPreview";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main id="main-content" role="main" className="min-h-screen relative overflow-hidden bg-[#050505] text-white selection:bg-cyan-500/30">
            <HeroSection />

            <div id="projects" className="scroll-mt-4">
                <ProjectsCards />
            </div>

            <SkillsSection />
            <ExperienceSection />

            <BlogPreview />

            <ContactSection />
        </main>
    );
}
