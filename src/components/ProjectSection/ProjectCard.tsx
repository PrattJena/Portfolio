import React from 'react';
import { motion } from 'framer-motion';
import { contents } from '../../constants';

interface ProjectCardProps {
  projectRefs: React.RefObject<HTMLDivElement>[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectRefs }) => {
  return (
    <div className='flex w-full flex-col lg:w-[50%] xl:w-[44%]'>
      {contents.map((item, index) => (
        <motion.div
          ref={projectRefs[index]}
          key={item.number}
          className='mb-[8vw] w-full last:mb-0'>
          <img src={item.image} alt='Project' className='w-full rounded-[1.5vh] object-cover' />

          <h3 className='text-h3 font-[Aeonik] font-semibold tracking-[-0.0175] text-white'>
            {item.title}
          </h3>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectCard;
