import { motion, useScroll } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import linkedin from '../../assets/images/linkedin.svg';
import github from '../../assets/images/github.svg';

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

  const buttonVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1], // Custom cubic bezier for a springy effect
      },
    },
  };

  return (
    <motion.header
      style={{ zIndex: isVisible ? 40 : 1 }}
      className='fixed top-0 right-0 left-0'
      initial='hidden'
      animate={isVisible ? 'visible' : 'hidden'}>
      <div className='flex items-center justify-end px-[calc(2vw+2vh)] py-4'>
        <div className='flex gap-3'>
          <motion.div
            variants={buttonVariants}
            initial='hidden'
            animate={isVisible ? 'visible' : 'hidden'}
            className='inline-flex cursor-pointer items-center justify-center rounded-full bg-stone-400 px-[3vh] py-[1vh] transition-opacity hover:opacity-80'>
            <img src={linkedin} alt='LinkedIn' className='h-[3vh] w-[3vh]' />
          </motion.div>
          <motion.div
            variants={buttonVariants}
            initial='hidden'
            animate={isVisible ? 'visible' : 'hidden'}
            className='inline-flex cursor-pointer items-center justify-center rounded-full bg-stone-400 px-[3vh] py-[1vh] transition-opacity hover:opacity-80'>
            <img src={github} alt='LinkedIn' className='h-[3vh] w-[3vh]' />
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default ProjectHeader;
