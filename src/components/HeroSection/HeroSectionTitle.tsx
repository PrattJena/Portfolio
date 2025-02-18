export const HeroSectionTitle = () => {
  return (
    <div className='flex flex-col'>
      <span
        style={{ lineHeight: 0.9 }}
        className='font-[Aeonik] text-[calc(var(--text-p)+0.28vh+0.06vw)] font-semibold text-[#F3F2F2] opacity-50'>
        Hi 👋, I am
      </span>
      <h1
        style={{ lineHeight: '1.3em' }}
        className='text-main font-[Aeonik] font-black text-[#F3F2F2]'>
        Pratyush<span>&nbsp;</span> <span className='font-[MaziusDisplayExtraItalic]'>Jena</span>
      </h1>
      <span
        style={{ lineHeight: 1.2 }}
        className='font-[Aeonik] text-[calc(var(--text-p)+0.28vh+0.06vw)] font-semibold text-[#F3F2F2] opacity-50'>
        a software developer based in United States.
      </span>
    </div>
  );
};
