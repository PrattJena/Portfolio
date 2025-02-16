import { NoiseBackground } from '../NoiseBackground';
import { Content } from './Content';

export const Footer = () => {
  return (
    <div
      className='relative h-[90vh]'
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}>
      <div className='relative -top-[100vh] h-[calc(100vh+90vh)]'>
        <div className='sticky top-[calc(100vh-90vh)] flex h-[90vh] items-center justify-center bg-[#0E0E0f]'>
          {/* <NoiseBackground /> */}
          <div className='h-[85%] w-[85%]'>
            <NoiseBackground />
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
};
