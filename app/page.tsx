import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SelectedWorks from "./components/SelectedWorks";
import About from "./components/About";
import LogoMarquee from "./components/LogoMarquee";
import Services from "./components/Services";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import GsapEffects from "./components/GsapEffects";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />
      <SelectedWorks />
      <About />
      <LogoMarquee />
      <Services />
      <Process />
      <Pricing />
      <Footer />

      <GsapEffects />
    </main>
  );
}