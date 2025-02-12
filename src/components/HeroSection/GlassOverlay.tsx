import React, { useEffect, useState } from 'react';

const GradientGlassOverlay = () => {
  const [glassCount, setGlassCount] = useState(0);
  const glassWidth = 48; // Width of each glass panel in pixels

  useEffect(() => {
    const calculateGlassPanels = () => {
      const width = window.innerWidth;
      const count = Math.ceil(width / glassWidth);
      setGlassCount(count);
    };

    calculateGlassPanels();
    window.addEventListener('resize', calculateGlassPanels);

    return () => {
      window.removeEventListener('resize', calculateGlassPanels);
    };
  }, []);

  return (
    <div className='relative h-screen w-screen overflow-hidden'>
      {/* Background gradient */}
      <div
        className='absolute inset-0'
        style={{
          filter: 'contrast(300%) brightness(950%) saturate(50%)',
          background:
            "linear-gradient(310deg, rgba(1,41,82,0.6), rgba(19,19,45,0.77)),radial-gradient(at 55% 23%, rgba(0,0,0,0.50), rgba(250,2,180,0.13)),url(\"data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4.61' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          mixBlendMode: 'soft-light',
        }}
      />

      {/* <div
        style={{
          background:
            "radial-gradient(circle 90vw at 50% 100%, black 0% 40%, blue 50% 53%, black 58%),url(\"data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4.61' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
        className='from 40% h-screen w-screen overflow-hidden'></div> */}

      {/* <div className='transparent absolute inset-0 backdrop-blur-md' /> */}

      {/* Glass overlay */}
      {/* <div
        className='pointer-events-none absolute inset-0'
        style={{
          backgroundImage: `
            linear-gradient(
              90deg, 
              rgba(14, 14, 15, 0.6) 10%, 
              rgba(4, 9, 20, 0) 70%, 
              rgba(14, 14, 15, 0.6) 110%
            )
          `,
          backgroundSize: '68px 100%',
          backdropFilter: 'blur(90px)',
          mixBlendMode: 'color-dodge',
        }}
      /> */}
    </div>
  );
};

export default GradientGlassOverlay;
