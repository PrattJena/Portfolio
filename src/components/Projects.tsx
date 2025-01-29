import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef, forwardRef } from 'react';
import { mergeRefs } from 'react-merge-refs';
import Image1 from '../assets/images/placeholder1.jpg';
import Image2 from '../assets/images/placeholder2.jpg';
import Image3 from '../assets/images/placeholder3.jpg';

const Projects = forwardRef((props, forwardedRef) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const images = [Image2, Image3];
  const mergedRefs = mergeRefs([containerRef, forwardedRef]);

  return (
    <>
      {/* Section Before Projects */}

      {/* Sticky Projects Section */}
      <motion.section
        ref={mergedRefs}
        className='relative flex h-[300vh] w-full flex-col items-center bg-transparent p-[5.5vw]'
        {...props}>
        <div className='sticky top-0 flex h-screen flex-col items-center justify-center'>
          {/* Sticky Text */}
          <div className='absolute top-[8vh] flex flex-col items-center text-center'>
            <span
              style={{ fontSize: 'clamp(0.5rem,1.5rem + 4vi,10.5rem)' }}
              className='font-[Aeonik] font-bold text-[#AFA8A0]'>
              PROJECTS
            </span>
            <p
              style={{ fontSize: 'clamp(0.9rem,0.35rem + 1vi,2.5rem)' }}
              className='w-[75%] font-[Aeonik] text-wrap text-[#736C64]'>
              Projects crafted with dedication to showcase creativity, learning, and meaningful
              impact
            </p>
          </div>

          {/* Sticky Image Box */}
          <div className='absolute top-[30vh]'>
            <div
              className='relative h-[300px] w-[300px] overflow-hidden'
              style={{
                backgroundImage: `url(${Image1})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}>
              {images.map((src, index) => {
                const start = index / images.length;
                const end = (index + 1) / images.length;
                const y = useTransform(scrollYProgress, [start, end], ['100%', '0%']);
                return (
                  <motion.img
                    key={index}
                    src={src}
                    className='absolute inset-0 h-full w-full object-contain'
                    style={{ y }}
                    alt={`Slide ${index + 2}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
});

export default Projects;
