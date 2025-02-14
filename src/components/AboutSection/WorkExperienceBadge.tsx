type WorkExProps = {
  image: string;
  title: string;
  company: string;
  time: string;
};

export const WorkExperienceBadge = (props: WorkExProps) => {
  return (
    <>
      <div className='gap-xs my-[var(--gap-xs)] flex w-full flex-row items-center rounded-[1vh] bg-[#F3F2F2] p-[var(--gap-xs)] 2xl:p-[var(--gap-sm)]'>
        <div className='h-full rounded-[1vh] bg-[#1A1B1C]'>
          <img src={props.image} className='size-icon m-3 2xl:m-6' />
        </div>
        <div className='flex flex-col'>
          <div
            style={{ lineHeight: 1.35 }}
            className='text-p2 font-[Aeonik] font-semibold tracking-[-0.025em] text-[#1A1B1C]'>
            {props.title}
          </div>
          <div style={{ lineHeight: 1.35 }} className='text-p font-[Aeonik] text-[#1A1B1C]'>
            {props.company} <span className='font-semibold text-[#FF7733]'>{props.time}</span>
          </div>
        </div>
      </div>
    </>
  );
};
