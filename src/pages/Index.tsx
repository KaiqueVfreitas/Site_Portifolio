import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import HeroSection from '@/sections/HeroSection';
import EducationSection from "@/sections/EducationSection";
import ContactSection from "@/sections/ContactSection";
import ServicesSection from "@/sections/ServicesSection";

const Index = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <HeroSection />
            <ServicesSection />
            <ContactSection />
            <EducationSection />
            <Footer />
        </div>
    )
}

export default Index;