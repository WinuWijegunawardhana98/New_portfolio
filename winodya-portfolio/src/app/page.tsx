import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import PageLayout from '@/components/Layout/PageLayout';
import ScrollProgress from '@/components/ScrollProgress';
import { AnimationProvider } from '@/context/AnimationContext';

export default function Home() {
  return (
    <AnimationProvider>
      <PageLayout>
        <main className="min-h-screen text-white" style={{ backgroundColor: '#000000' }}>
          <ScrollProgress />
          <Navigation />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <Contact />
          <Footer />
        </main>
      </PageLayout>
    </AnimationProvider>
  );
}
