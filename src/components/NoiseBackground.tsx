type NoiseBackgroundProps = {
  className?: string;
};

export const NoiseBackground = (props: NoiseBackgroundProps) => (
  <svg
    className={`pointer-events-none absolute inset-0 h-full w-full opacity-80 mix-blend-hard-light ${props.className}`}
    xmlns='http://www.w3.org/2000/svg'>
    <filter id='noiseFilter'>
      <feTurbulence type='turbulence' baseFrequency='0.5' />
      <feColorMatrix type='saturate' values='0' />
    </filter>
    <rect width='100%' height='100%' filter='url(#noiseFilter)' />
  </svg>
);
