import React from 'react';
import { motion } from 'motion/react';

const DotExpandButton = () => {
  return (
    <button className='group gap-xs flex items-center rounded-full bg-[#F3F2F2] py-[var(--gap-xs)] pr-[var(--gap-sm)] pl-[var(--gap-sm)] transition-all duration-300 ease-in-out hover:bg-[#1A1B1C] hover:pr-[calc(var(--gap-sm)*1.1)] hover:pl-[calc(var(--gap-sm)*1.1)] hover:text-[#F3F2F2] active:bg-[#FF7733]'>
      <span className='group-active:bg- overflow-x-hidden rounded-full bg-[#1A1B1C] p-[0.5vh] text-[calc(1vh+0.5vw)] transition-colors duration-300 group-hover:bg-[#F3F2F2] group-active:bg-[#F3F2F2] 2xl:text-[calc(1vh+0.3vw)]'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          stroke='currentColor'
          fill='none'
          strokeWidth='3'
          viewBox='0 0 24 24'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-black group-active:translate-x-0 group-active:-rotate-45 group-active:text-lg group-active:text-black'
          height='1em'
          width='1em'>
          <line x1='5' y1='12' x2='19' y2='12' stroke='currentColor' />
          <polyline points='12 5 19 12 12 19' stroke='currentColor' />
        </svg>
      </span>
      <span className='font-[Aeonik] text-[calc(1vh+0.5vw)] font-semibold 2xl:text-[calc(1vh+0.3vw)]'>
        Resume
      </span>
    </button>
  );
};

export default DotExpandButton;
