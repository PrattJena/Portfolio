import { motion } from 'motion/react';
import { RefObject } from 'react';

const DURATION = 0.4;
const STAGGER = 0.03;

type AboutSectionTitleProps = {
  parentRef: RefObject<HTMLElement>;
};

const AboutSectionTitle = (props: AboutSectionTitleProps) => {
  return (
    <div className='flex w-full flex-col md:w-[52%] lg:w-[50%] xl:w-[44%]'>
      <motion.h1
        initial='initial'
        whileInView='inView'
        viewport={{
          once: true,
          amount: 'all',
          root: props.parentRef,
          margin: '0px 0px -10% 0px',
        }}
        className='text-h1 inline-block items-baseline overflow-y-hidden font-[AeonikBold] leading-[1] font-black tracking-tighter text-wrap text-[#F3F2F2] md:mr-[1vw]'>
        <div>
          {'DEVELOPER,'.split('').map((l, i) => (
            <motion.span
              key={`selected-${i}`}
              className='inline-flex overflow-y-clip'
              variants={{
                initial: { y: '100%' },
                inView: { y: 0 },
              }}
              transition={{
                duration: DURATION,
                ease: 'easeInOut',
                delay: STAGGER * i,
              }}>
              {l !== ' ' ? l : '\u00A0'}
            </motion.span>
          ))}
        </div>
      </motion.h1>

      <motion.h1
        initial='initial'
        whileInView='inView'
        viewport={{
          once: true,
          amount: 'all',
          root: props.parentRef,
          margin: '0px 0px -10% 0px',
        }}
        className='text-h1 relative inline-flex items-baseline overflow-y-hidden pr-[10px] font-[AeonikBold] leading-[1] font-black tracking-tighter text-wrap text-[#F3F2F2]'>
        <div className='flex items-baseline whitespace-nowrap md:mr-[1vw]'>
          {'ANALYST'.split('').map((l, i) => (
            <motion.span
              key={`projects-${i}`}
              className='inline-flex overflow-y-clip'
              variants={{
                initial: { y: '100%' },
                inView: { y: 0 },
              }}
              transition={{
                duration: DURATION,
                ease: 'easeInOut',
                delay: STAGGER * i,
              }}>
              {l !== ' ' ? l : '\u00A0'}
            </motion.span>
          ))}
        </div>
      </motion.h1>
    </div>
  );
};

export default AboutSectionTitle;
