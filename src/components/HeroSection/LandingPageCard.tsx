import { motion, useTransform, MotionValue } from 'motion/react';
import Intro from './Intro';
// import { Grid } from './Grid';
import { NoiseBackground } from '../NoiseBackground';

type ScrollingProps = {
  scrollYProgress: MotionValue<number>;
};

const LandingPageCard = (props: ScrollingProps) => {
  const opacity = useTransform(props.scrollYProgress, [0, 0.5], [1, 0]);

  return (
    // <motion.section style={{ scale }} className='sticky top-0 h-svh bg-[#0E0E0f]'>
    //   {/* <Grid opacity={opacity} /> */}
    //   <Intro opacity={opacity} />
    // </motion.section>

    <motion.section className='sticky top-0 h-svh w-screen'>
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
        {/* Glass color-dodge using repeating-linear-gradient */}
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
      {/* Content Container */}
    </motion.section>
  );
};

export default LandingPageCard;
