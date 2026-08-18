import AboutHero from "./components/AboutHero.jsx";
import WhoWeAre from "./components/WhoWeAre.jsx";
import WhyChoose from "./components/WhyChoose.jsx";
import OurClients from "./components/OurClients.jsx";
import Reveal from "../../components/shared/Reveal.jsx";

function About() {
  return (
    <div className="min-h-screen bg-white font-sans text-stone-800 space-y-12">
      <Reveal>
      <AboutHero />
      </Reveal>

      <Reveal>
      <WhoWeAre />
      </Reveal>

      <Reveal>
      <WhyChoose />
      </Reveal>
      
      <Reveal>
      <OurClients />
      </Reveal>
    </div>
  );
}

export default About;
