type WorkExProps = {
  image: string;
  technology: string;
  technologyType: string;
};

export const SkillBadge = (props: WorkExProps) => {
  return (
    <>
      <div className='gap-xs flex w-full flex-row items-center rounded-[1.2vh] bg-[#1A1B1C] p-[var(--gap-xs)]'>
        <div className='h-full rounded-[1.2vh] bg-[#F3F2F2]'>
          <img src={props.image} className='size-icon m-3 2xl:m-6' />
        </div>
        <div className='flex flex-col'>
          <div
            style={{ lineHeight: 1.35 }}
            className='text-p2 font-[Aeonik] font-semibold tracking-[-0.02em] text-[#F3F2F2]'>
            {props.technology}
          </div>
          <div
            style={{ lineHeight: 1.35 }}
            className='text-p font-[Aeonik] tracking-tight text-[#F3F2F2]'>
            {props.technologyType}
          </div>
        </div>
      </div>
    </>
  );
};
