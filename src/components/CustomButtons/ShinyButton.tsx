import { motion } from 'motion/react';

const ShinyButton = ({ className = '', style = {}, ...motionProps }) => {
  return (
    <motion.button
      initial={{ '--x': '100%' }}
      animate={{ '--x': '-100%' }}
      whileTap={{ background: '#FF7733' }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0.3,
        type: 'spring',
        stiffness: 15,
        damping: 10,
        mass: 1.5,
      }}
      className={`group radial-gradient gap-xs relative flex items-center rounded-full px-[var(--gap-sm)] py-[var(--gap-xs)] transition-all duration-300 ease-in-out hover:pr-[calc(var(--gap-sm)*1.5)] hover:pl-[calc(var(--gap-sm)*1.5)] ${className}`}
      style={{
        ...style,
      }}
      {...motionProps}>
      <span className='linear-mask relative block h-full w-full font-[Aeonik] text-[calc(1.2vh+0.5vw)] font-semibold text-[#F3F2F2] 2xl:text-[calc(1.2vh+0.35vw)]'>
        Contact Me
      </span>
      <span className='linear-overlay absolute inset-0 block rounded-full p-px' />
    </motion.button>
  );
};

export default ShinyButton;
