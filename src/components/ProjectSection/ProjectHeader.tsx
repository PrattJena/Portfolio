import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import github from '../../assets/images/github.svg';
import linkedin from '../../assets/images/linkedin.svg';

type ProjectHeaderProps = {
  projectSectionRef: React.RefObject<HTMLElement>;
};

const ProjectHeader = ({ projectSectionRef }: ProjectHeaderProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!projectSectionRef.current) return;

      const { top } = projectSectionRef.current.getBoundingClientRect();
      setIsVisible(top < window.innerHeight * -0.15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          className='fixed top-0 right-0 left-0 z-50'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          <div className='flex items-center justify-end px-[calc(2vw+2vh)] pt-3'>
            <div className='flex gap-3'>
              {/* GitHub Button */}
              <motion.a
                href='YOUR_GITHUB_URL'
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className='cursor-pointer rounded-full bg-[#B14A30] transition-opacity hover:opacity-80'>
                <img
                  src={github}
                  alt='github'
                  className='mx-[calc(var(--gap-sm)+0.7rem)] my-[var(--gap-xs)] size-[2.7vh]'
                />
              </motion.a>

              {/* LinkedIn Button */}
              <motion.a
                href='YOUR_LINKEDIN_URL'
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className='cursor-pointer rounded-full bg-[#B14A30] transition-opacity hover:opacity-80'>
                <img
                  src={linkedin}
                  alt='linkedin'
                  className='mx-[calc(var(--gap-sm)+0.7rem)] my-[var(--gap-xs)] size-[2.7vh]'
                />
              </motion.a>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default ProjectHeader;
