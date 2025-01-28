import React from 'react';
import { motion } from 'framer-motion';

const GridAnimation: React.FC = () => {
  const columns = 20; // Number of columns
  const rows = 19; // Number of rows

  // Animation variants for vertical and horizontal lines
  const verticalLineVariants = {
    hidden: { opacity: 0, scaleY: 0, originY: 1 },
    visible: { opacity: 1, scaleY: 1, originY: 1 },
  };

  const horizontalLineVariants = {
    hidden: { opacity: 0, scaleX: 0, originX: 0 },
    visible: { opacity: 1, scaleX: 1, originX: 0 },
  };

  return (
    <div className='flex h-screen w-full items-center justify-center bg-black'>
      <div
        className='relative grid'
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          width: '100%',
          height: '100%',
        }}>
        {/* Vertical Lines (skip the first line) */}
        {Array.from({ length: columns - 1 }).map((_, colIndex) => (
          <motion.div
            key={`vertical-${colIndex}`}
            className='absolute top-0 bottom-0 w-px bg-white'
            style={{
              left: `${((colIndex + 1) / columns) * 100}%`, // Skip the first column
            }}
            variants={verticalLineVariants}
            initial='hidden'
            animate='visible'
            transition={{
              delay: colIndex * 0.2,
              duration: 0.5,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Horizontal Lines (skip the first line) */}
        {Array.from({ length: rows - 1 }).map((_, rowIndex) => (
          <motion.div
            key={`horizontal-${rowIndex}`}
            className='absolute right-0 left-0 h-px bg-white'
            style={{
              top: `${((rowIndex + 1) / rows) * 100}%`, // Skip the first row
            }}
            variants={horizontalLineVariants}
            initial='hidden'
            animate='visible'
            transition={{
              delay: (columns - 1 + rowIndex) * 0.2, // Adjust delay to match vertical lines
              duration: 0.5,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default GridAnimation;
