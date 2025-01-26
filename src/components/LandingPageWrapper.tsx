import { useRef } from 'react';
import About from './About';
import LandingPage from './LandingPage';
import { useScroll } from 'motion/react';

export const LandingPageWrapper = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  return (
    <>
      <main className='relative h-[200vh]'>
        <LandingPage scrollYProgress={scrollYProgress} />
        <About scrollYProgress={scrollYProgress} />
      </main>
    </>
  );
};
