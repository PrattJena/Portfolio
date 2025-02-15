import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SkillBadge } from './SkillBadge';
import type { Skill } from '../../constants';

type SkillRowProps = {
  row: Skill[];
  rowIndex: number;
  isDesktop: boolean;
};

export const SkillRow = ({ row, rowIndex, isDesktop }: SkillRowProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className={isDesktop ? 'gap-xs grid grid-cols-3' : ''}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{
        duration: 0.5,
        delay: rowIndex * (isDesktop ? 0.2 : 0.1),
      }}>
      {row.map((skill, skillIndex) => (
        <SkillBadge
          key={skillIndex}
          image={skill.image}
          technology={skill.technology}
          technologyType={skill.technologyType}
        />
      ))}
    </motion.div>
  );
};
