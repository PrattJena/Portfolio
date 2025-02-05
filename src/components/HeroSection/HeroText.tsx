import { useEffect } from 'react';
import { useAnimate, motion } from 'motion/react';
import ArcImage from '../../assets/images/duotone.jpg';
import { stagger } from 'motion';
import { NavBar } from './NavBar';

const text = "I'm Pratyush Jena foo and I'm a Software Developer based in United States.";

export const HeroText = () => {
  return (
    <div className='flex h-[60%] flex-col justify-between lg:h-[55%]'>
      <NavBar />
      <div className='w-[93%] lg:w-[55%]'>
        <p className='fade-in-paragraph text-[1.8vh] opacity-0 lg:text-[2vh]'>
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

        <h1 className='font-[Aeonik] text-[2.3vh] leading-[1.75em] font-semibold text-[#aeacac] lg:text-[2.75vh]'>
          {text.split(' ').map((w, i) =>
            w !== 'foo' ? (
              <span key={i} className='word inline-block overflow-hidden align-middle'>
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
      </div>
    </div>
  );
};
