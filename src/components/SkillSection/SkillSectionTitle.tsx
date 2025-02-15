import { motion } from 'motion/react';
import { RefObject } from 'react';

const DURATION = 0.4;
const STAGGER = 0.03;

type SkillSectionTitleProps = {
  parentRef: RefObject<HTMLElement>;
};

const SkillSectionTitle = (props: SkillSectionTitleProps) => {
  return (
    <div className='flex w-full flex-col md:flex-row'>
      <motion.h1
        initial='initial'
        whileInView='inView'
        viewport={{
          once: true,
          amount: 'all',
          root: props.parentRef,
          margin: '0px 0px -10% 0px',
        }}
        className='md:text-h1 inline-block items-baseline overflow-y-hidden font-[AeonikBold] text-[calc(var(--text-h1)-1vw)] leading-[1] font-black tracking-tighter text-wrap text-[#1A1B1C] md:mr-[1vw]'>
        <div>
          {'DEVELOPMENT'.split('').map((l, i) => (
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
        className='md:text-h1 relative inline-flex items-baseline overflow-y-hidden pr-[10px] font-[AeonikBold] text-[calc(var(--text-h1)-1vw)] leading-[1] font-black tracking-tighter text-wrap text-[#1A1B1C]'>
        <div className='flex items-baseline whitespace-nowrap md:mr-[1vw]'>
          {'STACK/'.split('').map((l, i) => (
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

export default SkillSectionTitle;
