import { useRef } from 'react';

import LandingPageCard from './HeroSection/LandingPageCard';
import { useScroll } from 'motion/react';
import Projects from './ProjectSection/Projects';
import { About } from './AboutSection/About';

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
      <div className='bg-[#E1E9DB]'>
        <About />
        <div className='h-[100vh] bg-[#E1E9DB]'></div>
      </div>
    </main>
  );
};
