import { NoiseBackground } from '../NoiseBackground';

const GlassOverlay = () => {
  return (
    <div className='relative h-screen w-screen'>
      {/* Background Container */}
      <div className='fixed inset-0 -z-10 overflow-hidden'>
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
        {/* Glass overlay using repeating-linear-gradient */}
        <div
          className='pointer-events-none absolute inset-0 bg-[length:60px_100%] lg:bg-[length:70px_100%] 2xl:bg-[length:100px_100%]'
          style={{
            backgroundImage: `linear-gradient(
              90deg,
              rgba(9, 9, 10, 0.05) 0px,
              rgba(0, 0, 0, 0) 90%,
              rgba(9, 9, 10, 0.05) 100%
            )`,
            backdropFilter: 'blur(90px)',
            mixBlendMode: 'overlay',
          }}
        />
      </div>
      <NoiseBackground />
      {/* Content Container */}
    </div>
  );
};

export default GlassOverlay;
