import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import EngineeringLab from '../components/EngineeringLab';
import FutureVision from '../components/FutureVision';
import Blog from '../components/Blog';
import Timeline from '../components/Timeline';
import PersonalTouch from '../components/PersonalTouch';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <EngineeringLab />
        <FutureVision />
        <Blog />
        <Timeline />
        <PersonalTouch />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
