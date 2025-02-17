import ResumeButton from '../CustomButtons/ResumeButton';
import ShinyButton from '../CustomButtons/ShinyButton';

export const Content = () => {
  return (
    <div className='h-full w-full'>
      <div className='flex h-[90%] w-full flex-col items-center justify-center'>
        <div className='text-h2 font-[Aeonik] font-bold tracking-tight text-[#F3F2F2]'>
          Let's Work Together
        </div>
        <div>
          {/* <ResumeButton /> */}
          <ShinyButton />
        </div>
      </div>
      <div className='flex h-[10%] w-full flex-col md:flex-row md:items-end md:justify-between'>
        <span className='text-p xl:text-span text-center font-[Aeonik] font-semibold tracking-tight text-[#F3F2F2] md:text-left'>
          © Pratyush Jena 2025
        </span>
        <span className='text-p lg:text-span text-center font-[Aeonik] font-semibold tracking-tight text-[#F3F2F2] md:text-right'>
          Made with ❤ in United States.
        </span>
      </div>
    </div>
  );
};
