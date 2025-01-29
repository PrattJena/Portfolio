import landingImage from '../assets/images/IMG3.jpg';
import { motion, useTransform, MotionValue } from 'motion/react';
import Intro from './Intro';

const text = {
  name: 'Pratyush Jena',
  prof: 'Software Engineer',
};

type ScrollingProps = {
  scrollYProgress: MotionValue<number>;
};

type animateObject = {
  index: number;
  yVal: boolean;
};

const transititionDuration: number = 0.5;

const fadeInVariant = {
  initial: ({ index, yVal }: animateObject) => ({
    y: yVal ? '100%' : '-100%',
  }),
  animate: ({ index, yVal }: animateObject) => ({
    y: 0,
    transition: {
      // type: 'tween',
      ease: 'linear',
      duration: transititionDuration,
      delay: 0.02 * (index + 1),
    },
  }),
};

const LandingPageCard = (props: ScrollingProps) => {
  const scale = useTransform(props.scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(props.scrollYProgress, [0, 1], ['0deg', '5deg']);
  const opacity = useTransform(props.scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      <motion.section
        style={{ scale, rotate }}
        className='sticky top-0 h-screen bg-[#0b0b0a] p-[2vh]'>
        <Intro opacity={opacity} />
      </motion.section>
    </>
  );
};

export default LandingPageCard;
