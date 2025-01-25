import Navbar from "@components/Navbar";
import Hero from "@components/Hero";
import Footer from "@components/Footer";
import About from "@components/About.tsx";

export default function Home() {
    return (
        <div className="app">
            <Navbar />
            <Hero />
            <About />
            <Footer />
        </div>
    );
}
