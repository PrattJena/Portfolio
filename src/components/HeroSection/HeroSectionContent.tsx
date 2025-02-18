import { motion } from 'motion/react';
import { NavBar } from './NavBar';
import ResumeButton from '../CustomButtons/ResumeButton';
import ShinyButton from '../CustomButtons/ShinyButton';
import { HeroSectionTitle } from './HeroSectionTitle';

const text1 = 'I am Pratyush Jena';
const text2 = 'A Software Developer based in United States.';

export const HeroSectionContent = () => {
  return (
    <div className='flex h-[80%] flex-col justify-between lg:h-[70%]'>
      <NavBar />
      <div className='flex w-[100%] flex-col'>
        <HeroSectionTitle />
        <div className='gap-xs relative inset-0 mt-3.5 flex flex-row lg:mt-6'>
          <ResumeButton className='hero-button opacity-0' />
          <ShinyButton className='hero-button opacity-0' />
        </div>
      </div>
    </div>
  );
};
