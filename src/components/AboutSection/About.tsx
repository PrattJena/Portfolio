import { NoiseBackground } from '../NoiseBackground';
import { useRef } from 'react';
import AboutSectionTitle from './AboutSectionTitle';
import IconDown from '../../assets/images/iconDown.svg';
import ProfileImage1 from '../../assets/images/IMG3.jpg';
import ProfileImage2 from '../../assets/images/placeholder1.jpg';
import { AboutMe } from './AboutMe';
import { motion, useInView, useScroll, useTransform } from 'motion/react';

export const About = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(imageRef, { amount: 0.4, once: true });

  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ['end end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <motion.div
      style={{ scale }}
      ref={parentRef}
      className='section-padding relative flex w-screen flex-col rounded-b-[3vw] bg-[#0e0e0e]'>
      <NoiseBackground />

      <div className='flex flex-row justify-between'>
        <div className='hidden w-[30%] md:block'>
          <img src={IconDown} className='w-[20%]' />
        </div>
        <AboutSectionTitle parentRef={parentRef} />
      </div>

      <div className='relative mt-[var(--gap-sm)] flex h-full flex-col md:mt-[var(--gap-md)] md:flex-row md:justify-between xl:mt-[var(--gap-2xl)] 2xl:mt-[var(--gap-3xl)]'>
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className='md:w-[41%] lg:w-[43%] xl:w-[45%]'>
          <img src={ProfileImage2} className='w-full rounded-[1em] md:hidden' />
          <img
            src={ProfileImage1}
            className='hidden w-full rounded-[1vw] md:block lg:w-[90%] 2xl:w-[80%]'
          />
        </motion.div>
        <div className='mt-[var(--gap-sm)] w-full md:mt-0 md:w-[52%] lg:w-[50%] xl:w-[44%]'>
          <AboutMe />
        </div>
      </div>
    </motion.div>
  );
};
