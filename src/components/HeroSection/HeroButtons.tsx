import { motion } from 'motion/react';

export const HeroButtons = () => {
  return (
    <div className='relative inset-0 mt-3.5 flex flex-row lg:mt-6'>
      <motion.button
        initial='initial'
        whileHover='hovered'
        whileTap='tapped'
        variants={{
          initial: {
            scale: 1,
          },
          hovered: {
            scale: 1.05,
            transition: {
              type: 'spring',
              stiffness: 300,
              damping: 10,
            },
          },
          tapped: {
            scale: 0.95,
          },
        }}
        style={{ cursor: 'pointer' }}
        className='hero-button z-40 flex rounded-[2em] border-1 border-[#8a8a8a] bg-[#0b0b0a] px-[4vw] py-[1vh] opacity-0 lg:px-[2vw]'>
        <span className='font-[Aeonik] text-[1.5vh] font-semibold text-[#bdbbbb]'>Resume</span>
      </motion.button>
      <motion.button
        initial='initial'
        whileHover='hovered'
        whileTap='tapped'
        style={{ cursor: 'pointer' }}
        className='hero-button z-40 ml-[4vw] flex rounded-[2em] bg-white px-[4vw] py-[1vh] opacity-0 lg:ml-[1.5vw] lg:px-[2vw]'
        variants={{
          initial: {
            scale: 1,
          },
          hovered: {
            scale: 1.05,
            transition: {
              type: 'spring',
              stiffness: 300,
              damping: 10,
            },
          },
          tapped: {
            scale: 0.95,
          },
        }}>
        <motion.span className='flex flex-row items-center font-[Aeonik] text-[1.5vh] font-semibold'>
          Contact Me{' '}
          <motion.svg
            variants={{
              initial: {
                scale: 1,
                rotate: '0deg',
              },
              hovered: {
                scale: 1.15,
                rotate: '-30deg',
              },
            }}
            transition={{
              ease: 'easeInOut',
            }}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className='ml-1 size-[2vh]'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'
            />
          </motion.svg>
        </motion.span>
      </motion.button>
    </div>
  );
};
