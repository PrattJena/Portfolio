import { motion, useAnimate } from 'motion/react';
import { useState } from 'react';
import CustomCursor from '../CustomCursor';
import useMousePosition from '../../hooks/useMousePosition';

type ShinyButtonProps = {
  className?: string;
  style?: object;
};

const CheckIcon = ({ className = '' }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    className={`h-3.5 w-3.5 md:h-4.5 md:w-4.5 lg:h-5 lg:w-5 2xl:h-5.5 2xl:w-5.5 ${className} `}>
    <path
      fill='#F3F2F2'
      d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z'
    />
  </svg>
);

const ShinyButton = ({ className = '', style = {}, ...props }: ShinyButtonProps) => {
  const [scope, animate] = useAnimate();
  const [isCopied, setIsCopied] = useState(false);
  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const { x, y } = useMousePosition();

  const handleClick = async () => {
    if (isCopied) return;

    try {
      await navigator.clipboard.writeText('pratt@pratt.com');
    } catch (err) {
      console.error('Failed to copy text: ', err);
      return;
    }

    await animate(
      '.text-content',
      {
        y: '-100%',
        opacity: 0,
      },
      {
        duration: 0.2,
      },
    );

    setIsCopied(true);
    await animate(
      '.text-content',
      {
        y: '100%',
        opacity: 0,
      },
      {
        duration: 0, // immediate
      },
    );

    await Promise.all([
      animate(
        scope.current,
        {
          backgroundColor: '#FF7733',
        },
        {
          duration: 0.2,
        },
      ),
      animate(
        '.text-content',
        {
          y: '0%',
          opacity: 1,
        },
        {
          duration: 0.2,
        },
      ),
    ]);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    await animate(
      '.text-content',
      {
        y: '-100%',
        opacity: 0,
      },
      {
        duration: 0.2,
      },
    );

    setIsCopied(false);
    await animate(
      '.text-content',
      {
        y: '100%',
        opacity: 0,
      },
      {
        duration: 0,
      },
    );

    await Promise.all([
      animate(
        '.text-content',
        {
          y: '0%',
          opacity: 1,
        },
        {
          duration: 0.2,
        },
      ),
      animate(
        scope.current,
        {
          backgroundColor: 'transparent',
        },
        {
          duration: 0.2,
        },
      ),
    ]);
  };

  return (
    <>
      <motion.button
        ref={scope}
        initial={{ '--x': '100%' }}
        animate={{ '--x': '-100%' }}
        whileTap={{ scale: 0.95 }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          repeatDelay: 0.3,
          type: 'spring',
          stiffness: 15,
          damping: 10,
          mass: 1.5,
        }}
        onClick={handleClick}
        className={`group radial-gradient gap-xs relative flex cursor-pointer items-center rounded-full px-[var(--gap-sm)] py-[var(--gap-xs)] transition-all duration-300 ease-in-out hover:pr-[calc(var(--gap-sm)*1.5)] hover:pl-[calc(var(--gap-sm)*1.5)] ${className}`}
        style={{
          ...style,
        }}
        onMouseEnter={() => setIsCursorVisible(true)}
        onMouseLeave={() => setIsCursorVisible(false)}
        {...props}>
        <div className='relative w-full overflow-hidden'>
          <motion.span className='text-content linear-mask relative flex h-full w-full items-center justify-center font-[Aeonik] text-[calc(1.2vh+0.5vw)] font-semibold text-[#F3F2F2] 2xl:text-[calc(1.2vh+0.35vw)]'>
            {isCopied ? (
              <>
                <CheckIcon />
                <span>{`\u00A0 Copied!`}</span>
              </>
            ) : (
              'Contact Me'
            )}
          </motion.span>
        </div>
        <span className='linear-overlay absolute inset-0 block rounded-full p-px' />
      </motion.button>
      <CustomCursor x={x} y={y} isVisible={isCursorVisible}>
        <div className='flex flex-row items-center gap-[0.2em] rounded-[0.5em] bg-[#F3F2F1] px-[1em] py-[0.5em]'>
          <span className='text-span rounded-[0.5em] font-[Aeonik] text-[#1A1B1C]'>Copy Email</span>
        </div>
      </CustomCursor>
    </>
  );
};

export default ShinyButton;
