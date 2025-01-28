import { useRef } from 'react';
import About from './About';
import LandingPageCard from './LandingPageCard';
import LandingPage from './LandingPage';
import { useScroll } from 'motion/react';

export const LandingPageWrapper = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  return (
    <div className='bg-[#0b0b0a]'>
      <main ref={sectionRef} className='relative h-[200vh]'>
        <LandingPageCard scrollYProgress={scrollYProgress} />
        {/* <LandingPage scrollYProgress={scrollYProgress} /> */}
        <About scrollYProgress={scrollYProgress} />
      </main>
    </div>
  );
};
