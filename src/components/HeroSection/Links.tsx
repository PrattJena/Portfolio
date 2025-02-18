import { motion } from 'motion/react';

const DURATION = 0.25;
const STAGGER = 0.015;

export const Links = ({ children, href }: { children: string; href: string }) => {
  return (
    <motion.a
      initial='initial'
      href={href}
      whileHover='hovered'
      whileTap={{ color: '#571C11' }}
      style={{ cursor: 'pointer', lineHeight: 0.9 }}
      className='xl:text-span relative block overflow-hidden font-[Aeonik] text-[calc(var(--text-span)+0.25vh+0.1vw)] font-semibold whitespace-nowrap text-[#F3F2F2]'>
      <div>
        {children.split('').map((l, i) => {
          return (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: '-100%',
                  color: '#F3F2F2',
                },
              }}
              transition={{
                duration: DURATION,
                ease: 'easeInOut',
                delay: STAGGER * i,
              }}
              className='inline-block'
              key={i}>
              {l}
            </motion.span>
          );
        })}
      </div>
      <div className='absolute inset-0'>
        {' '}
        {children.split('').map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: '100%',
              },
              hovered: {
                y: 0,
                color: '#571C11',
              },
            }}
            transition={{
              duration: DURATION,
              ease: 'easeInOut',
              delay: STAGGER * i,
            }}
            className='inline-block'
            key={i}>
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
