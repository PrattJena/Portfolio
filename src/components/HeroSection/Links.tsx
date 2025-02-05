import { motion } from 'motion/react';

const DURATION = 0.25;
const STAGGER = 0.025;

export const Links = ({ children, href }: { children: string; href: string }) => {
  return (
    <motion.a
      initial='initial'
      href={href}
      whileHover='hovered'
      style={{ cursor: 'pointer' }}
      className='relative block overflow-hidden font-[Aeonik] text-[1.4vh] font-medium whitespace-nowrap text-[rgb(256,256,256,0.4)] uppercase lg:text-[1.6vh]'>
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
                  color: '#FFFFFF',
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
                color: '#FFFFFF',
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

// variants={{ initial: { y: 0 }, hovered: { y: '-100%' } }}
