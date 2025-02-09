export const GlassOverlay = () => (
  <div className='grid-auto-columns-[minmax(50px,1fr)] pointer-events-none fixed inset-0 grid grid-flow-col'>
    {Array.from({ length: 50 }).map((_, i) => (
      <div
        key={i}
        className='h-full w-full bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_10%,rgba(4,9,20,0)_70%,rgba(255,255,255,0.1)_110%)] backdrop-blur-[50px]'
      />
    ))}
  </div>
);
