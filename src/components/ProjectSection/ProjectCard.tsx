import React from 'react';
import { motion } from 'framer-motion';
import { contents } from '../../constants';

interface ProjectCardProps {
  projectRefs: React.RefObject<HTMLDivElement>[];
  setIsCursorVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectRefs, setIsCursorVisible }) => {
  return (
    <div className='flex w-full flex-col md:w-[52%] lg:w-[50%] xl:w-[44%]'>
      {contents.map((item, index) => (
        <motion.div
          ref={projectRefs[index]}
          key={item.number}
          className='mb-[8vw] w-full last:mb-0'>
          <img
            src={item.image}
            alt='Project'
            className='w-full cursor-pointer rounded-[1.5vh] object-cover'
            onMouseEnter={() => setIsCursorVisible(true)}
            onMouseLeave={() => setIsCursorVisible(false)}
          />

          <h3 className='text-h3 font-[Aeonik] font-semibold tracking-[-0.0175] text-white'>
            {item.title}
          </h3>

          <div className='mt-[var(--gap-xs)] flex flex-col md:hidden'>
            <p className='text-p font-[Aeonik] text-[rgb(256,256,256,0.5)]'>{item.description}</p>
            <div className='mt-[var(--gap-xs)] flex flex-row gap-[0.6vw]'>
              {item.techStack.map((tech, index) => (
                <span
                  key={index}
                  style={{ lineHeight: 1 }}
                  className='text-span border-1 border-[rgb(256,256,256,0.8)] p-[0.9vw] text-[rgb(256,256,256,0.8)]'>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectCard;
