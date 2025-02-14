import { useInView, motion } from 'motion/react';
import { useRef } from 'react';
import hrc from '../../assets/images/highradius.svg';
export const AboutMe = () => {
  const localRef = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(localRef, { amount: 'all', once: true });

  return (
    <div className='flex flex-col'>
      <motion.p
        ref={localRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className='text-p font-[Aeonik] text-[rgb(256,256,256,0.5)]'>
        I am a passionate software developer with a{' '}
        <span className='font-semibold text-[#B14A30]'>Master's degree in Computer Science</span>{' '}
        from Rochester Institute of Technology. My expertise lies in{' '}
        <span className='font-semibold text-[#B14A30]'>Full-Stack Development</span> and{' '}
        <span className='font-semibold text-[#B14A30]'>Data Analysis</span>, where I enjoy creating
        innovative solutions that bridge technology and real-world applications.
        {/* <div className='h-[20vh]'></div> */}
      </motion.p>
      <div>
        <div className='border- flex w-full flex-row items-center gap-2.5 rounded-[1vh] bg-[#F3F2F2] p-2.5'>
          <div className='rounded-[1vh] bg-[#1A1B1C]'>
            <img src={hrc} className='m-3 size-8' />
          </div>
          <div className='flex flex-col'>
            <div className='text-p2 font-[Aeonik] font-semibold tracking-[-0.02em] text-[#1A1B1C]'>
              Software Engineer Intern
            </div>
            <div className='text-p font-[Aeonik] text-[#1A1B1C]'>Highradius</div>
          </div>
        </div>
        <div className='flex h-[10vh] w-full flex-row items-center'>
          <div className='rounded-[1vh] bg-[#F3F3F2]'>
            <img src={hrc} className='m-[0.8vh] w-[4vh]' />
          </div>
          <div>jbjb</div>
        </div>
      </div>
    </div>
  );
};
