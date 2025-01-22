import "../styles/components/Hero.scss";
import FloatingElements from "./3D/FloatingElements";
import { ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => {
    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });
    };

    return (
        <section className="hero">
            <FloatingElements />
            <div className="hero-content">
                <h1 className="hero-title">
                    studios
                    <span className="hero-year">166</span>
                </h1>
                <button className="btn">
                    projects <ArrowRight size={20} />
                </button>
            </div>
            <button onClick={scrollToContent} className="scroll-indicator">
                <ChevronDown size={32} />
            </button>
        </section>
    );
};

export default Hero;
