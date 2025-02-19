import { motion, MotionValue, useAnimate } from 'motion/react';
import { HeroSectionContent } from './HeroSectionContent';
import { useEffect } from 'react';
import { stagger } from 'motion';

type introProps = {
  opacity: MotionValue<number>;
};

const disableScroll = () => {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollPosition}px`;
  document.body.style.width = '100%';
};

const enableScroll = () => {
  const scrollPosition = parseInt(document.body.style.top || '0', 10) * -1;
  document.body.style.overflow = '';
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, scrollPosition);
};

const Intro = (props: introProps) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const sequence = async () => {
      disableScroll();

      await animate([['.fade-in-para-one', { opacity: [0, 1] }, { at: 0, duration: 0.5 }]]);

      await animate([
        ['.animate-letter', { opacity: [0, 1] }, { delay: stagger(0.1), duration: 0.15 }],
      ]);

      await animate([['.fade-in-para-two', { opacity: [0, 1] }, { at: 0, duration: 0.5 }]]);

      await animate([
        ['.hero-button', { opacity: [0, 1] }, { delay: stagger(0.25), duration: 0.35 }],
      ]);

      await animate([
        ['.scroll-text', { opacity: [0, 1], y: [10, 0] }, { duration: 0.3, ease: 'easeOut' }],
        ['.navbar', { opacity: [0, 1], y: [-10, 0] }, { duration: 0.3, ease: 'easeOut' }],
        ['.logo-entry', { rotate: [-180, 0] }, { delay: 0.25, duration: 0.4, ease: 'easeOut' }],
      ]);

      enableScroll();
    };

    sequence();

    return () => {
      enableScroll();
    };
  }, [animate]);

  return (
    <motion.div
      ref={scope} // Attach scope to parent container
      style={{ opacity: props.opacity }}
      className='absolute inset-0 h-[100%] p-[calc(2vw+2vh)] lg:px-[calc(4vw+3vh)] lg:py-[calc(1vw+3vh)] 2xl:px-[calc(6vw+4vh)]'>
      <HeroSectionContent />
      {/* <div className='flex h-[40%] flex-row overflow-hidden lg:h-[45%]'>
        <div className='scroll-text inset-0 flex items-end font-[Aeonik] text-[1.5vh] whitespace-nowrap text-[rgb(256,256,256,0.4)] opacity-0'>
          Scroll Down
        </div>
      </div> */}
    </motion.div>
  );
};

export default Intro;
