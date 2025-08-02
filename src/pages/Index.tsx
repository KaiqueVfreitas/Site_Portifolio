import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from '@/components/HeroSection';
import { Contact } from "lucide-react";
import ContactSection from "@/components/ContactSection";

const Index = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <ContactSection />
            <Footer />
        </div>
    )
}

export default Index;