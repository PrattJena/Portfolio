import { useRef } from 'react';

import LandingPageCard from './HeroSection/LandingPageCard';
import { useScroll } from 'motion/react';
import Projects from './ProjectSection/Projects';
import { About } from './AboutSection/About';
import { NoiseBackground } from './NoiseBackground';
import { SkillSection } from './SkillSection/SkillSection';

export const PortfolioWrapper = () => {
  const projectsRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: projectsRef,
    offset: ['start end', 'start start'],
  });
  return (
    <main>
      <div className='relative bg-[#0e0e0e]'>
        <LandingPageCard scrollYProgress={scrollYProgress} />
        <Projects ref={projectsRef} scrollYProgress={scrollYProgress} />
      </div>
      <div className='relative bg-[#E1E9DB]'>
        <NoiseBackground />
        <About />
        <SkillSection />
      </div>
    </main>
  );
};
