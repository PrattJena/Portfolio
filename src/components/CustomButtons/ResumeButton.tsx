import { useState } from 'react';
import CustomCursor from '../CustomCursor';
import useMousePosition from '../../hooks/useMousePosition';

const ResumeButton = ({ className = '' }) => {
  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const { x, y } = useMousePosition();

  const onClickUrl = (url: string) => () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <>
      <button
        onClick={onClickUrl(
          'https://drive.google.com/file/d/1dzjOp687Ctr5dvl8da4gBqOXAWuOj7Uy/view?usp=sharing',
        )}
        onMouseEnter={() => setIsCursorVisible(true)}
        onMouseLeave={() => setIsCursorVisible(false)}
        className={`group gap-xs flex origin-center cursor-pointer items-center rounded-full bg-[#F3F2F2] px-[var(--gap-sm)] py-[var(--gap-xs)] transition-all duration-300 ease-in-out hover:bg-[#1A1B1C] hover:px-[calc(var(--gap-sm)*1.1)] hover:text-[#F3F2F2] active:bg-[#FF7733] ${className}`}>
        <span className='overflow-x-hidden rounded-full bg-[#1A1B1C] p-[0.5vh] text-[calc(1.2vh+0.5vw)] transition-colors duration-300 group-hover:bg-[#F3F2F2] group-active:bg-[#F3F2F2] 2xl:text-[calc(1.2vh+0.35vw)]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            stroke='currentColor'
            fill='none'
            strokeWidth='3'
            viewBox='0 0 24 24'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-[1.2vh] group-hover:text-black group-active:rotate-[-45deg] group-active:text-black'
            height='1em'
            width='1em'>
            <line x1='5' y1='12' x2='19' y2='12' stroke='currentColor' />
            <polyline points='12 5 19 12 12 19' stroke='currentColor' />
          </svg>
        </span>
        <span className='font-[Aeonik] text-[calc(1.2vh+0.5vw)] font-semibold 2xl:text-[calc(1.2vh+0.35vw)]'>
          Resume
        </span>
      </button>
      <CustomCursor x={x} y={y} isVisible={isCursorVisible}>
        <div className='flex flex-row items-center gap-[0.2em] rounded-[0.5em] bg-[#F3F2F1] px-[1em] py-[0.5em]'>
          <span className='text-span rounded-[0.5em] font-[Aeonik] text-[#1A1B1C]'>
            View Resume
          </span>
        </div>
      </CustomCursor>
    </>
  );
};

export default ResumeButton;
