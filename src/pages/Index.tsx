import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from '@/components/HeroSection';
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import ServicesSection from "@/components/ServicesSection";

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