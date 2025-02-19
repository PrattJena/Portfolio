import { motion } from 'framer-motion';
import { contents } from '../../constants';

type ProjectDescriptionProps = {
  activeProject: number;
};

const ProjectDescription = ({ activeProject }: ProjectDescriptionProps) => {
  return (
    <div className='mb-[1vw] hidden md:block md:w-[41%] lg:w-[43%] xl:w-[45%]'>
      <div className='sticky top-[3vw] hidden md:flex md:flex-col'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          key={activeProject}
          className='flex flex-col gap-4'>
          <h2
            style={{ lineHeight: 0.75 }}
            className='relative font-[Aeonik] text-[24vw] font-semibold text-[rgb(256,256,256,0.3)]'>
            <span className='relative -ml-[0.02em]'>0</span>
            <span className='relative'>{contents[activeProject].number}.</span>
          </h2>

          <div className='ml-[var(--gap-xs)] flex flex-col gap-4'>
            <p className='text-p mt-[var(--gap-sm)] mb-[var(--gap-xs)] font-[Aeonik] tracking-tight text-white'>
              {contents[activeProject].description}
            </p>
            <hr className='border-1 border-[rgb(256,256,256,0.8)]' />
            <div className='flex flex-row flex-wrap gap-[0.6vw]'>
              {contents[activeProject].techStack.map((tech, index) => (
                <span
                  key={index}
                  style={{ lineHeight: 1 }}
                  className='text-span rounded-[0.5vw] border-1 border-[rgb(256,256,256,0.8)] p-[0.5vw] text-[rgb(256,256,256,0.8)]'>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDescription;
