import React, { useState, useRef, forwardRef } from 'react';
import useMousePosition from '../../hooks/useMousePosition';
import { motion, useScroll, useTransform, useMotionValueEvent, MotionValue } from 'motion/react';
import { mergeRefs } from 'react-merge-refs';
import ProjectDescription from './ProjectDescription';
import ProjectCard from './ProjectCard';
import ProjectSectionTitle from './ProjectSectionTitle';
import ProjectHeader from './ProjectHeader';
import { NoiseBackground } from '../NoiseBackground';
import CustomCursor from '../CustomCursor';
import ExternalLink from '../../assets/images/externalLink.svg';

type ScrollingProps = {
  scrollYProgress: MotionValue<number>;
};

const Projects = forwardRef((props: ScrollingProps, forwardedRef) => {
  const containerRef = useRef(null);
  const mergedRefs = mergeRefs([containerRef, forwardedRef]);
  const scale = useTransform(props.scrollYProgress, [0.5, 1], [0.95, 1]);
  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const { x, y } = useMousePosition();

  const projectRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const [activeProject, setActiveProject] = React.useState(0);

  projectRefs.forEach((ref, index) => {
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['start 0.275', 'end 0.275'],
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
            <ProjectCard projectRefs={projectRefs} setIsCursorVisible={setIsCursorVisible} />
          </div>
        </div>
      </motion.section>
      <CustomCursor x={x} y={y} isVisible={isCursorVisible}>
        <div className='flex flex-row items-center gap-[0.2em] rounded-[0.5em] bg-[#FF7733] px-[1em] py-[0.5em]'>
          <img src={ExternalLink} className='h-[1em] w-[1em]' />
          <span className='text-span rounded-[0.5em] font-[Aeonik] text-[#F3F2F1]'>View</span>
        </div>
      </CustomCursor>
    </>
  );
});

export default Projects;
