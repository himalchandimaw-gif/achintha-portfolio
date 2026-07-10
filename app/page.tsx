import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SelectedWorks from "./components/SelectedWorks";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Footer from "./components/Footer";
import GsapEffects from "./components/GsapEffects";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <GsapEffects />

      <Navbar />
      <Hero />
      <SelectedWorks />
      <About />
      <Services />
      <Process />
      <Footer />
    </main>
  );
}