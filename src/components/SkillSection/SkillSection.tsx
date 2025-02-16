import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { skills } from '../../constants';
import { SkillRow } from './SkillRow';
import { NoiseBackground } from '../NoiseBackground';

function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  return Array.from({ length: Math.ceil(array.length / chunkSize) }, (_, i) =>
    array.slice(i * chunkSize, (i + 1) * chunkSize),
  );
}

export const SkillSection = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 0.3], [-200, 0]);

  const isDesktop = useMediaQuery('(min-width: 768px)');
  const skillRows = isDesktop ? chunkArray(skills, 3) : skills.map((skill) => [skill]);

  return (
    <motion.div
      style={{ y }}
      ref={parentRef}
      className='section-padding relative flex w-full flex-col bg-[#e9e8db]'>
      <NoiseBackground />
      <h1 className='md:text-h1 inline-block items-baseline overflow-y-hidden font-[AeonikBold] text-[calc(var(--text-h1)-1vw)] leading-[1] font-black tracking-tighter text-wrap text-[#1A1B1C] md:mr-[1vw]'>
        DEVELOPMENT STACK
      </h1>
      <p className='text-p my-[var(--gap-sm)] font-[Aeonik] tracking-tight text-[#1A1B1C]'>
        I'm proficient in a range of modern technologies that empower me to build responsive
        applications and extract actionable insights. These are some of my main technologies:-
      </p>

      <div className='gap-xs flex flex-col'>
        {skillRows.map((row, rowIndex) => (
          <SkillRow key={rowIndex} row={row} rowIndex={rowIndex} isDesktop={isDesktop} />
        ))}
      </div>
    </motion.div>
  );
};
