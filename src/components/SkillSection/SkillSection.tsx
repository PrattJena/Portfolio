import { useRef } from 'react';
import SkillSectionTitle from './SkillSectionTitle';
import { SkillBadge } from './SkillBadge';
import { skills } from '../../constants';
import { useScroll, useTransform, motion } from 'motion/react';

export const SkillSection = () => {
  const parentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 0.3], [-200, 0]);

  return (
    <motion.div
      style={{ y }}
      ref={parentRef}
      className='bg-[#E1E9DB ] section-padding relative flex w-full flex-col'>
      {/* <SkillSectionTitle parentRef={parentRef} /> */}
      <h1 className='md:text-h1 inline-block items-baseline overflow-y-hidden font-[AeonikBold] text-[calc(var(--text-h1)-1vw)] leading-[1] font-black tracking-tighter text-wrap text-[#1A1B1C] md:mr-[1vw]'>
        DEVELOPMENT STACK
      </h1>
      <p className='text-p my-[var(--gap-sm)] font-[Aeonik] tracking-tight text-[#1A1B1C]'>
        I'm proficient in a range of modern technologies that empower me to build responsive
        applications and extract actionable insights. These are some of my main technologies:-
      </p>
      <div className='gap-xs grid grid-cols-1 md:grid-cols-3'>
        {skills.map((skill, index) => (
          <SkillBadge
            key={index}
            image={skill.image}
            technology={skill.technology}
            technologyType={skill.technologyType}
          />
        ))}
      </div>
    </motion.div>
  );
};
