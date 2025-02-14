import { motion, useTransform, MotionValue } from 'motion/react';
import Intro from './Intro';
// import { Grid } from './Grid';

type ScrollingProps = {
  scrollYProgress: MotionValue<number>;
};

const LandingPageCard = (props: ScrollingProps) => {
  const scale = useTransform(props.scrollYProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(props.scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.section style={{ scale }} className='sticky top-0 h-svh bg-[#0E0E0f]'>
      {/* <Grid opacity={opacity} /> */}
      <Intro opacity={opacity} />
    </motion.section>
  );
};

export default LandingPageCard;
