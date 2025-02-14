import { useInView, motion } from 'motion/react';
import { useRef } from 'react';
import hrc from '../../assets/images/highradius.svg';
import rit from '../../assets/images/RIT.svg';
import { WorkExperienceBadge } from './WorkExperienceBadge';
export const AboutMe = () => {
  const localRef1 = useRef<HTMLParagraphElement>(null);
  const isInView1 = useInView(localRef1, { amount: 'all', once: true });

  const localRef2 = useRef<HTMLParagraphElement>(null);
  const isInView2 = useInView(localRef2, { amount: 'all', once: true });

  const localRef3 = useRef<HTMLParagraphElement>(null);
  const isInView3 = useInView(localRef3, { amount: 'all', once: true });

  const workExRef = useRef<HTMLParagraphElement>(null);
  const isInView4 = useInView(workExRef, { amount: 'all', once: true });

  return (
    <div className='flex flex-col'>
      <motion.p
        ref={localRef1}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className='text-p font-[Aeonik] text-[rgb(256,256,256,0.5)]'>
        I am a passionate software developer with a{' '}
        <span className='font-semibold text-[#B14A30]'>Master's degree in Computer Science</span>{' '}
        from Rochester Institute of Technology. and I’ve always been drawn to two things:{' '}
        <span className='font-semibold text-[#B14A30]'>Building things from scratch</span> and{' '}
        <span className='font-semibold text-[#B14A30]'>Finding stories hidden in data</span>,
        Whether it’s crafting a sleek web app or turning messy datasets into actionable insights, I
        love how these fields let me solve real-world puzzles.
      </motion.p>
      <br />
      <motion.p
        ref={localRef2}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className='text-p font-[Aeonik] text-[rgb(256,256,256,0.5)]'>
        For me, <span className='font-semibold text-[#B14A30]'>Full-Stack Development</span> feels
        like assembling a giant LEGO set—every frontend and backend piece must fit perfectly for a
        great user experience. In{' '}
        <span className='font-semibold text-[#B14A30]'>Data Analysis</span>, I love spotting
        patterns others might miss. At the end of the day, I just want to build stuff that matters.
      </motion.p>
      <br />
      <motion.p
        ref={localRef3}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className='text-p font-[Aeonik] text-[rgb(256,256,256,0.5)]'>
        I've put these skills to work across different roles, creating scalable solutions and
        turning data into meaningful insights. Here's a look at my journey so far:
      </motion.p>
      <motion.div
        ref={workExRef}
        initial={{ opacity: 0 }}
        animate={workExRef ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}>
        <WorkExperienceBadge
          image={rit}
          title='Teaching Assistant'
          company='RIT'
          time='(09/2023 - 12/2023)'
        />
        <WorkExperienceBadge
          image={hrc}
          title='Software Engineer Intern'
          company='Highradius'
          time='(2021-2022)'
        />
      </motion.div>
    </div>
  );
};
