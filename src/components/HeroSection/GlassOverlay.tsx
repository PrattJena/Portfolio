import React from 'react';

const GradientGlassOverlay = () => {
  return (
    <div className='relative h-screen w-screen overflow-hidden'>
      {/* Background gradient + noise */}
      <div
        className='absolute inset-0'
        style={{
          background: `
            radial-gradient(
              at 90% 0%,
              #FF7733 0%,
              #571C11 40%,
              #0e0e0e 70%,
              #000000 100%
            ),
            url(data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%20100%20100%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cfilter%20id%3D%27noiseFilter%27%3E%3CfeTurbulence%20type%3D%27fractalNoise%27%20baseFrequency%3D%274.61%27%20numOctaves%3D%273%27%20stitchTiles%3D%27stitch%27/%3E%3C/filter%3E%3Crect%20width%3D%27100%25%27%20height%3D%27100%25%27%20filter%3D%27url(%23noiseFilter)%27/%3E%3C/svg%3E)
          `,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />

      {/* Glass overlay */}
      <div
        className='pointer-events-none absolute inset-0'
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(14, 14, 14, 0.4) 0%,
              rgba(0, 0, 0, 0.1) 70%,
              rgba(14, 14, 14, 0.4) 110%
            )
          `,
          backgroundSize: '40px 100%',
          backdropFilter: 'blur(30%) saturate(105%) contrast(110%)',
          mixBlendMode: 'color-dodge',
        }}
      />
    </div>
  );
};

export default GradientGlassOverlay;

{
  /* <div
        style={{
          background: 'radial-gradient(circle 50vw at top left , #FF7733, #1A1B1C  ),  ',
        }}
        className='h-screen w-screen overflow-hidden'></div> */
}

{
  /* <div
        style={{
          background:
            "radial-gradient(circle 90vw at 50% 100%, black 0% 40%, blue 50% 53%, black 58%),url(\"data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4.61' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
        className='from 40% h-screen w-screen overflow-hidden'></div> */
}

{
  /* <div className='transparent absolute inset-0 backdrop-blur-md' /> */
}

{
  /* Glass overlay */
}
{
  /* <div className='absolute z-0 flex flex-row'>
        <div className='h-40 w-10 border border-zinc-50/10 bg-gradient-to-r from-zinc-200/20 to-zinc-400/20 backdrop-blur-[50px] backdrop-saturate-200'></div>
        <div className='h-40 w-10 border border-zinc-50/10 bg-gradient-to-r from-zinc-200/20 to-zinc-400/20 backdrop-blur-[50px] backdrop-saturate-200'></div>
        <div className='h-40 w-10 border border-zinc-50/10 bg-gradient-to-r from-zinc-200/20 to-zinc-400/20 backdrop-blur-[50px] backdrop-saturate-200'></div>
        <div className='h-40 w-10 border border-zinc-50/10 bg-gradient-to-r from-zinc-200/20 to-zinc-400/20 backdrop-blur-[50px] backdrop-saturate-200'></div>
        <div className='h-40 w-10 border border-zinc-50/10 bg-gradient-to-r from-zinc-200/20 to-zinc-400/20 backdrop-blur-[50px] backdrop-saturate-200'></div>
        <div className='h-40 w-10 border border-zinc-50/10 bg-gradient-to-r from-zinc-200/20 to-zinc-400/20 backdrop-blur-[50px] backdrop-saturate-200'></div>
        <div className='h-40 w-10 border border-zinc-50/10 bg-gradient-to-r from-zinc-200/20 to-zinc-400/20 backdrop-blur-[50px] backdrop-saturate-200'></div>
        <div className='h-40 w-10 border border-zinc-50/10 bg-gradient-to-r from-zinc-200/20 to-zinc-400/20 backdrop-blur-[50px] backdrop-saturate-200'></div>
      </div> */
}
