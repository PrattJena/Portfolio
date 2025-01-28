import landingImage from '../assets/images/IMG3.jpg';
import { motion, useTransform, MotionValue } from 'motion/react';

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

const LandingPage = (props: ScrollingProps) => {
  const scale = useTransform(props.scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(props.scrollYProgress, [0, 1], ['0deg', '5deg']);
  const opacity = useTransform(props.scrollYProgress, [0.3, 0.8], [1, 0]);

  return (
    <>
      <motion.section
        style={{ scale, rotate }}
        className='sticky top-0 h-screen bg-[#131311] pt-[10vh]'>
        <motion.div
          style={{ opacity }}
          className='flex h-[100%] flex-col items-center justify-center'>
          <div className='relative mb-0.5 ml-1 block w-[70%] overflow-hidden text-left whitespace-nowrap md:w-[60%] lg:w-[55%] xl:w-[55%]'>
            <div>
              {'Pratyush Jena'.split('').map((l, i) => {
                const displayChar = l === ' ' ? '\u00A0' : l;
                return (
                  <motion.span
                    key={i}
                    variants={fadeInVariant}
                    initial='initial'
                    animate='animate'
                    custom={{ index: i, yVal: true }}
                    className='inline-block font-[Nohemi] text-[6vw] font-semibold tracking-wide text-[#d8d6a1] sm:text-[5vw] lg:text-[4vw] xl:text-[2.75vw]'>
                    {displayChar}
                  </motion.span>
                );
              })}
            </div>
          </div>

          <motion.div
            className='z-20 h-[50vh] w-[70%] overflow-hidden rounded-lg md:h-[50%] md:w-[60%] md:rounded-xl lg:h-[55%] lg:w-[55%] xl:h-[50%] xl:w-[55%] 2xl:rounded-2xl'
            initial='hidden'
            animate='visible'
            variants={{
              hidden: {
                clipPath: 'inset(50% 0 50% 0)', // Starts as thin line in center
                opacity: 0,
              },
              visible: {
                clipPath: 'inset(0% 0 0% 0)', // Expands to full height
                opacity: 1,
                transition: {
                  duration: transititionDuration,
                  ease: 'easeInOut',
                  delay: 0.2, // Add delay if needed
                },
              },
            }}>
            <motion.img
              className='h-full w-full object-cover'
              src={landingImage}
              alt='landing-image'
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{
                duration: transititionDuration,
                ease: 'easeOut',
              }}
            />
          </motion.div>

          <div className='relative mt-1 mr-1 block w-[70%] overflow-hidden text-right whitespace-nowrap md:w-[60%] lg:mb-2 lg:w-[55%] xl:w-[55%]'>
            {text.prof.split('').map((l, i) => {
              const displayChar = l === ' ' ? '\u00A0' : l;
              return (
                <motion.span
                  key={i}
                  variants={fadeInVariant}
                  initial='initial'
                  animate='animate'
                  custom={{ index: i, yVal: false }}
                  className='inline-block font-[Nohemi] text-[4.5vw] font-semibold tracking-wide text-[#d8d6a1] sm:text-[3.35vw] lg:text-[2.75vw] xl:text-[1.75vw]'>
                  {displayChar}
                </motion.span>
              );
            })}
          </div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default LandingPage;
