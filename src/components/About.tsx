import { useTransform, motion, MotionValue } from 'motion/react';

type ScrollingProps = {
  scrollYProgress: MotionValue<number>;
};

const About = (props: ScrollingProps) => {
  const scale = useTransform(props.scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(props.scrollYProgress, [0, 1], ['-5deg', '0deg']);

  return (
    <>
      <motion.section
        style={{ scale, rotate }}
        className='relative h-screen flex-col items-center justify-center bg-[#C72626]'></motion.section>
    </>
  );
};

export default About;
