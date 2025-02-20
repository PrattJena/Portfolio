import { motion, useTransform, MotionValue } from 'motion/react';
import Intro from './Intro';
import { NoiseBackground } from '../NoiseBackground';

type ScrollingProps = {
  scrollYProgress: MotionValue<number>;
};

const LandingPageCard = (props: ScrollingProps) => {
  const opacity = useTransform(props.scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.section className='sticky top-0 h-svh'>
      <div className='fixed inset-0 -z-10 overflow-hidden'>
        <div
          className='absolute inset-0 bg-black'
          style={{
            background: `radial-gradient(
              circle at 90% 0%,
              #FE4522 0%,
              #FF7733 8%,
              #B14A30 20%,
              #571C11 35%,
              #0E0E0f 60%,
              #000000 100%
            )`,
          }}
        />
        <div
          className='pointer-events-none absolute inset-0'
          style={{
            backgroundImage: `linear-gradient(
              90deg,
              rgba(9, 9, 10, 0.07) 0px,
              rgba(0, 0, 0, 0) 90%,
              rgba(9, 9, 10, 0.07) 100%
            )`,
            backgroundSize: '100px, 100%',
            backdropFilter: 'blur(10px)',
            mixBlendMode: 'overlay',
          }}
        />
      </div>
      <NoiseBackground />
      <Intro opacity={opacity} />
    </motion.section>
  );
};

export default LandingPageCard;
