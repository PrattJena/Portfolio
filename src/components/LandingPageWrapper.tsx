import { useRef } from 'react';

import LandingPageCard from './HeroSection/LandingPageCard';
import { useScroll } from 'motion/react';
import Projects from './ProjectSection/Projects';

export const LandingPageWrapper = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start start'],
  });
  return (
    <div className='bg-[#050505]'>
      <main className='relative'>
        <LandingPageCard scrollYProgress={scrollYProgress} />
        <Projects ref={sectionRef} scrollYProgress={scrollYProgress} />
      </main>
    </div>
  );
};
