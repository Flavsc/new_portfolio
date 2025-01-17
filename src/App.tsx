/* eslint-disable prettier/prettier */
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Vision from "./components/Vision";
import Footer from "./components/Footer";
import "./styles/main.scss";

function App() {
    return (
        <div className="app">
            <Navbar />
            <Hero />
            <About />
            {/* <Vision /> */}
            <Footer />
        </div>
    );
}

export default App;
