import { motion } from 'motion/react';
import { RefObject } from 'react';

const DURATION = 0.4;
const STAGGER = 0.03;

type ProjectSectionTitleProps = {
  containerRef: RefObject<HTMLElement>;
};

const ProjectSectionTitle = (props: ProjectSectionTitleProps) => {
  return (
    <div className='flex flex-col items-start md:flex-row'>
      <motion.h1
        initial='initial'
        whileInView='inView'
        viewport={{
          once: true,
          amount: 'all',
          root: props.containerRef,
          margin: '0px 0px -10% 0px',
        }}
        className='text-h1 inline-block items-baseline overflow-hidden font-[AeonikBold] leading-[0.9] font-black tracking-tighter text-wrap text-[#111010]'>
        <div>
          {'SELECTED '.split('').map((l, i) => (
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
          root: props.containerRef,
          margin: '0px 0px -10% 0px',
        }}
        className='text-h1 relative inline-flex items-baseline overflow-hidden pr-[10px] font-[AeonikBold] leading-[0.9] font-black tracking-tighter text-wrap text-[#111010]'>
        <div className='flex items-baseline whitespace-nowrap'>
          {'PROJECTS/'.split('').map((l, i) => (
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
          <motion.span
            key='number'
            className='ml-1 inline-flex'
            variants={{
              initial: { opacity: 0 },
              inView: { opacity: 1 },
            }}
            transition={{
              duration: DURATION,
              ease: 'easeInOut',
              delay: STAGGER * 'PROJECTS/'.length + 0.015,
            }}>
            <sup className='text-h4 font-[Aeonik] font-black text-[#111010]'>(4)</sup>
          </motion.span>
        </div>
      </motion.h1>
    </div>
  );
};

export default ProjectSectionTitle;
