import { motion, MotionValue } from 'motion/react';
import ArcImage from '../assets/images/duotone-modified.png';
import ProfileImage from '../assets/images/IMG3.jpg';

type introProps = {
  opacity: MotionValue<number>;
};

const Intro = (props: introProps) => {
  return (
    <motion.div style={{ opacity: props.opacity }} className='h-[100%] p-[2vw]'>
      <div className='flex h-[60%] w-[95%] max-w-md items-end'>
        <h1 className='font-[Aeonik] text-[2.5vh] font-bold text-[#aeacac]'>
          I'm Pratyush Jena
          <span
            className='mx-2 inline-block bg-contain bg-center bg-no-repeat align-middle leading-none font-bold text-transparent'
            style={{
              backgroundImage: `url(${ArcImage})`,
              padding: '0 0.4em', // Horizontal padding
              backgroundSize: 'auto 100%', // Match text height
              fontSize: '1.5em', // Inherit parent font-size
              lineHeight: 1, // Tight text layout
            }}>
            foo
          </span>
          and I'm a <span>Software Developer</span> based in United States.
        </h1>
      </div>
      <div className='flex h-[40%] flex-row'>
        <div className='flex items-end font-[Aeonik] text-sm whitespace-nowrap text-[#c7c4c4] opacity-50'>
          Scroll Down
        </div>
        <div className='flex w-[100%] items-end justify-end'>
          <img src={ProfileImage} className='h-[82%] rounded-lg' />
        </div>
      </div>
    </motion.div>
  );
};

export default Intro;
