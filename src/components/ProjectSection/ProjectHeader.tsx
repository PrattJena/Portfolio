import { motion, useScroll } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import github from '../../assets/images/github.svg';
import linkedin from '../../assets/images/linkedin.svg';

type ProjectHeaderProps = {
  projectSectionRef: React.RefObject<HTMLElement>;
};

const ProjectHeader = ({ projectSectionRef }: ProjectHeaderProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (projectSectionRef.current) {
        const rect = projectSectionRef.current.getBoundingClientRect();
        const threshold = window.innerHeight * -0.15; // -10% of viewport height
        const isAboveProject = rect.top > threshold;
        setIsVisible(!isAboveProject);
      }
    };

    // Also handle window resize to update the threshold
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [projectSectionRef]);

  const circleVariants = {
    hidden: {
      scale: 0,
      height: '0%',
    },
    visible: {
      scale: 1,
      height: '100%',
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1], // Custom cubic bezier for a springy effect
      },
    },
  };

  return (
    <motion.header
      className='fixed top-0 right-0 left-0 z-50'
      initial='hidden'
      animate={isVisible ? 'visible' : 'hidden'}>
      <div className='flex items-center justify-end px-[calc(2vw+2vh)] pt-3'>
        <div className='flex gap-3'>
          <motion.div
            variants={circleVariants}
            initial='hidden'
            animate={isVisible ? 'visible' : 'hidden'}
            className='cursor-pointer rounded-full bg-[#B14A30] transition-opacity hover:opacity-80'>
            <img
              src={github}
              alt='github'
              className='mx-[calc(var(--gap-sm)+0.7rem)] my-[var(--gap-xs)] size-[2.7vh]'
            />
          </motion.div>
          <motion.div
            variants={circleVariants}
            initial='hidden'
            animate={isVisible ? 'visible' : 'hidden'}
            className='cursor-pointer rounded-full bg-[#B14A30] transition-opacity hover:opacity-80'>
            <img
              src={linkedin}
              alt='linkedin'
              className='mx-[calc(var(--gap-sm)+0.7rem)] my-[var(--gap-xs)] size-[2.7vh]'
            />
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default ProjectHeader;
