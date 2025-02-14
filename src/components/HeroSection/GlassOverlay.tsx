import React from 'react';

const NoiseBackground = () => (
  <svg
    className='backdrop-blur-4xl absolute inset-0 h-full w-full mix-blend-color-dodge'
    xmlns='http://www.w3.org/2000/svg'>
    <filter id='noiseFilter'>
      <feTurbulence type='turbulence' baseFrequency='0.5' />
      <feColorMatrix type='saturate' values='0' />
    </filter>
    <rect width='100%' height='100%' filter='url(#noiseFilter)' opacity='0.4' />
  </svg>
);

const GradientGlassOverlay = () => {
  return (
    <div className='relative h-screen w-screen overflow-hidden'>
      {/* Background gradient */}
      <div
        className='absolute inset-0 bg-black'
        style={{
          background: `radial-gradient(
            circle at 90% 0%,
            #FF7733 0%,
            #B14A30 15%,
            #571C11 30%,
            #0E0E0f 60%,
            #000000 100%
          )`,
        }}
      />
      {/* Noise overlay */}

      {/* Glass overlay using repeating-linear-gradient */}
      <div
        className='pointer-events-none absolute inset-0'
        style={{
          background: `linear-gradient(
            90deg,
            rgba(9, 9, 10, 0.05) 0px,
            rgba(0, 0, 0, 0) 90%,
            rgba(9, 9, 10, 0.05) 100%
          )`,
          backgroundSize: '60px 100%',
          backdropFilter: 'blur(90px)',
          mixBlendMode: 'overlay',
        }}
      />
      <NoiseBackground />
    </div>
  );
};

export default GradientGlassOverlay;
