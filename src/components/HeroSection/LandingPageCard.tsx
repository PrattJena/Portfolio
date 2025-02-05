import landingImage from '../assets/images/IMG3.jpg';
import { motion, useTransform, MotionValue, animate } from 'motion/react';
import Intro from './Intro';
// import Tile from './Tile';
import { useEffect, useState } from 'react';
import { Grid } from './Grid';

type ScrollingProps = {
  scrollYProgress: MotionValue;
};

const LandingPageCard = (props: ScrollingProps) => {
  const scale = useTransform(props.scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(props.scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.section style={{ scale }} className='noise sticky top-0 h-screen bg-[#0b0b0a]'>
      <Grid opacity={opacity} />
      <Intro opacity={opacity} />
    </motion.section>
  );
};

export default LandingPageCard;
