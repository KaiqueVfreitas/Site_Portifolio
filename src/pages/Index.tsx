import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { InfoProvider } from "@/providers/InfoProvider";
const Index = () => {
    return (
        <div>
            <InfoProvider>  
            <NavBar />
            <Footer />
            </InfoProvider>
        </div>
    )
}

export default Index;