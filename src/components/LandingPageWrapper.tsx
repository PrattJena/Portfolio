import { useRef } from 'react';
import Projects from './Projects';
import LandingPageCard from './LandingPageCard';
import LandingPage from './LandingPage';
import { useScroll } from 'motion/react';

export const LandingPageWrapper = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start start'],
  });
  return (
    <div className='bg-[#0b0b0a]'>
      <main className='relative h-[400vh]'>
        <LandingPageCard scrollYProgress={scrollYProgress} />
        {/* <LandingPage scrollYProgress={scrollYProgress} /> */}
        <Projects ref={sectionRef} />
      </main>
      <div className='h-screen bg-orange-600' />
    </div>
  );
};
