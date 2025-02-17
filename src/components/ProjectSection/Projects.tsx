import React, { useRef, forwardRef } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, MotionValue } from 'framer-motion';
import { mergeRefs } from 'react-merge-refs';
import ProjectDescription from './ProjectDescription';
import ProjectCard from './ProjectCard';
import ProjectSectionTitle from './ProjectSectionTitle';
import ProjectHeader from './ProjectHeader';
import { NoiseBackground } from '../NoiseBackground';

type ScrollingProps = {
  scrollYProgress: MotionValue<number>;
};

const Projects = forwardRef((props: ScrollingProps, forwardedRef) => {
  const containerRef = useRef(null);
  const mergedRefs = mergeRefs([containerRef, forwardedRef]);
  const scale = useTransform(props.scrollYProgress, [0.5, 1], [0.95, 1]);

  // Create refs for each project section
  const projectRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  // Track which project is currently in view
  const [activeProject, setActiveProject] = React.useState(0);

  // Setup scroll detection for each project
  projectRefs.forEach((ref, index) => {
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['start 0.3', 'end 0.3'],
    });
    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
      if (latest > 0 && latest < 1) {
        setActiveProject(index);
      }
    });
  });

  return (
    <>
      <ProjectHeader projectSectionRef={containerRef} />
      <motion.section
        style={{
          scale,
          boxShadow: '0 -20px 40px -20px rgba(0, 0, 0, 0.5)',
          position: 'relative',
          zIndex: 10,
        }}
        ref={mergedRefs}
        className='section-padding flex w-full flex-col rounded-t-[3vw] bg-[#0e0e0e]'>
        <NoiseBackground className='rounded-t-[3vw]' />
        <div className='relative'>
          <ProjectSectionTitle containerRef={containerRef} />
          <div className='relative mt-[var(--gap-md)] flex h-full flex-row justify-between md:mt-[var(--gap-lg)] 2xl:mt-[var(--gap-2xl)]'>
            <ProjectDescription activeProject={activeProject} />
            <ProjectCard projectRefs={projectRefs} />
          </div>
        </div>
      </motion.section>
    </>
  );
});

export default Projects;
