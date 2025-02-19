import { motion } from 'motion/react';

export const HeroSectionTitle = () => {
  return (
    <div className='flex flex-col'>
      <p className='fade-in-para-one opacity-0'>
        <span className='font-[Aeonik] text-[calc(var(--text-p)+0.28vh+0.06vw)] font-semibold text-[rgba(243,242,242,0.5)]'>
          {`Hi\u00A0`}
        </span>
        <motion.span
          style={{
            display: 'inline-block',
            cursor: 'pointer',
            transformOrigin: '70% 70%',
            position: 'relative',
            zIndex: 20,
          }}
          className='text-[calc(var(--text-p)+0.28vh+0.06vw)]'
          initial={{ scale: 1, rotate: 0 }}
          whileHover={{
            rotate: [0, 20, -20, 10, -10, 0],
            transition: { duration: 1, repeat: Infinity, ease: 'easeInOut' },
          }}>
          👋
        </motion.span>
        <span className='font-[Aeonik] text-[calc(var(--text-p)+0.28vh+0.06vw)] font-semibold text-[rgba(243,242,242,0.5)]'>
          {`,\u00A0I am`}
        </span>
      </p>

      <h1
        className='text-main font-[Aeonik] font-black tracking-[-0.01em] text-[#F3F2F2]'
        style={{ lineHeight: '1.3em' }}>
        {'Pratyush'.split('').map((letter, i) => (
          <span key={i} className='animate-letter inline-block opacity-0'>
            {letter}
          </span>
        ))}
        <span className='animate-letter inline-block'>{`\u00A0\u00A0`}</span>
        {'Jena'.split('').map((letter, i) => (
          <span
            key={i}
            className='animate-letter inline-block font-[MaziusDisplayExtraItalic] tracking-[-0.035em] opacity-0'>
            {letter}
          </span>
        ))}
      </h1>
      <p
        style={{ lineHeight: 1.2 }}
        className='fade-in-para-two font-[Aeonik] text-[calc(var(--text-p)+0.28vh+0.06vw)] font-semibold text-[rgba(243,242,242,0.5)] opacity-0'>
        a software developer based in United States.
      </p>
    </div>
  );
};
