import { motion } from 'motion/react';
import ArcImage from '../../assets/images/duotone.jpg';
import { NavBar } from './NavBar';
import { HeroButtons } from './HeroButtons';
import { createPortal } from 'react-dom';

const text = "I'm Pratyush Jena foo and I'm a Software Developer based in United States.";

export const HeroText = () => {
  const portalContainer = document.getElementById('navbar-portal');

  return (
    <div className='flex h-[60%] flex-col justify-between lg:h-[55%]'>
      <NavBar />
      <div className='w-[93%] lg:w-[65%] 2xl:w-[60%]'>
        <p className='fade-in-paragraph text-[1.8vh] opacity-0 lg:text-[2.3vh] 2xl:text-[2.6vh]'>
          <span className='font-[Aeonik] text-[#c7c4c4] opacity-50'>Hi, </span>
          {/* Keep waving emoji with whileHover */}
          <motion.span
            style={{
              display: 'inline-block',
              padding: '0.2rem',
              cursor: 'pointer',
              transformOrigin: '70% 70%',
              position: 'relative',
              zIndex: 20,
            }}
            initial={{ scale: 1, rotate: 0 }}
            whileHover={{
              rotate: [0, 20, -20, 10, -10, 0],
              transition: { duration: 1, repeat: Infinity, ease: 'easeInOut' },
            }}>
            👋
          </motion.span>
        </p>

        <h1 className='font-[Aeonik] text-[2.3vh] leading-[1.8em] font-bold text-[#aeacac] lg:text-[3.2vh] 2xl:text-[3.8vh]'>
          {text.split(' ').map((w, i) =>
            w !== 'foo' ? (
              <span
                key={i}
                className='word inline-block overflow-hidden align-middle tracking-[-0.01em] lg:tracking-[-0.02em] xl:tracking-tight'>
                {`${w}\u00A0`}
              </span>
            ) : (
              <span
                key={i}
                className='word mx-2 inline-block overflow-hidden rounded-[2em] border-2 border-white bg-contain bg-center bg-no-repeat align-middle leading-none font-bold text-transparent lg:mx-3'
                style={{
                  backgroundImage: `url(${ArcImage})`,
                  padding: '0 0.18em',
                  backgroundSize: 'auto 100%',
                  fontSize: '1.7em',
                  lineHeight: 1,
                }}>
                foo
              </span>
            ),
          )}
        </h1>

        {/* Add Buttons here */}
        <HeroButtons />
      </div>
    </div>
  );
};
