import landingImage from '../assets/images/IMG3.jpg';
import { motion, useTransform, MotionValue } from 'motion/react';

type ScrollingProps = {
  scrollYProgress: MotionValue<number>;
};

const fadeInVariant = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const LandingPage = (props: ScrollingProps) => {
  const scale = useTransform(props.scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(props.scrollYProgress, [0, 1], ['0deg', '5deg']);
  const opacity = useTransform(props.scrollYProgress, [0.3, 1], [1, 0]);

  return (
    <>
      <motion.section
        style={{ scale, rotate }}
        className='sticky top-0 h-screen bg-[#131311] pt-[8vh]'>
        <motion.div
          style={{ opacity }}
          className='flex h-[100%] flex-col items-center justify-center'>
          <div className='mb-1 ml-1 w-full max-w-[70%] text-left md:max-w-[65%] lg:mb-2 lg:max-w-[60%]'>
            <motion.h1
              variants={fadeInVariant}
              initial='initial'
              animate='animate'
              className='font-[Nohemi] text-2xl font-semibold tracking-wide text-[#e7c664] sm:text-3xl lg:text-4xl xl:text-5xl'>
              Pratyush Jena
            </motion.h1>
          </div>

          <div className='z-20 h-[50vh] w-full max-w-[70%] overflow-hidden rounded-lg md:h-[55vh] md:max-w-[65%] lg:h-[50vh] lg:max-w-[60%]'>
            <img className='h-full w-full object-cover' src={landingImage} alt='landing-image' />
          </div>

          <div className='mt-1 mr-1 w-full max-w-[70%] text-right sm:mt-2 md:max-w-[65%] lg:max-w-[60%]'>
            <p className='font-[Geist] text-lg font-semibold text-[#e7c664] sm:text-xl lg:text-2xl xl:text-3xl'>
              Software Developer
            </p>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default LandingPage;
