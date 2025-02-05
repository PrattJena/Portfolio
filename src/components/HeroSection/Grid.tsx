import { motion, MotionValue, useAnimate } from 'motion/react';
import { useEffect, useState } from 'react';

type gridProps = {
  opacity: MotionValue<number>;
};

export const Grid = (props: gridProps) => {
  const [size, setSize] = useState({ columns: 0, rows: 0 });

  // Create a ref array to store animation controls for each cell
  const [scope, animate] = useAnimate();

  const generateGridCount = () => {
    const cellSize = 75;
    const columns = Math.floor(document.body.clientWidth / cellSize);
    const rows = Math.floor(document.body.clientHeight / cellSize);
    setSize({ columns, rows });
  };

  useEffect(() => {
    generateGridCount();
    window.addEventListener('resize', generateGridCount);
    return () => window.removeEventListener('resize', generateGridCount);
  }, []);

  // Handle the hover animation for each cell
  const handleHover = async (index: number) => {
    // Start the highlight animation
    animate(
      `div[data-cell="${index}"]`,
      { background: ['rgba(248, 96, 16, 0)', 'rgba(248, 96, 16, 0.3)', 'rgba(248, 96, 16, 0)'] },
      {
        duration: 1, // Total duration of the animation
        times: [0, 0.2, 1], // Timing of each keyframe (0-1 scale)
        ease: 'easeOut',
      },
    );
  };

  return (
    <motion.div
      ref={scope}
      className='grid h-screen w-full grid-cols-[repeat(auto-fit,_minmax(75px,_1fr))] grid-rows-[repeat(auto-fit,_minmax(75px,_1fr))]'>
      {[...Array(size.rows * size.columns)].map((_, i) => (
        <motion.div
          data-cell={i} // Add data attribute for targeting in animation
          style={{ opacity: props.opacity }}
          key={i}
          initial={{ background: 'rgba(248, 96, 16, 0)' }}
          onHoverStart={() => handleHover(i)}
          whileTap={{
            background: 'rgba(248, 96, 16, 0.5)',
            transition: { duration: 0.15 },
          }}
          transition={{ duration: 1.5 }}
          className='z-2 h-full w-full mix-blend-difference'
        />
      ))}
    </motion.div>
  );
};
