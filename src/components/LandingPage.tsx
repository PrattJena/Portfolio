import landingImage from '../assets/images/IMG3.jpg';
const LandingPage = () => {
  return (
    <div className='noise flex h-screen flex-col items-center justify-center bg-[#0f0f0f]'>
      <div className='mb-2 ml-2 w-full max-w-[70%] text-left md:max-w-[65%] lg:max-w-[60%]'>
        <h1 className='font-[Nohemi] text-xl font-semibold text-[#e7c664] sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl'>
          Pratyush Jena
        </h1>
      </div>

      <div className='h-[50vh] w-full max-w-[70%] overflow-hidden rounded-lg md:h-[55vh] md:max-w-[65%] lg:h-[50vh] lg:max-w-[60%]'>
        <img className='h-full w-full object-cover' src={landingImage} alt='landing-image' />
      </div>

      <div className='mt-2 mr-2 w-full max-w-[70%] text-right md:max-w-[65%] lg:max-w-[60%]'>
        <p className='font-[Nohemi] text-base text-[#e7c664] sm:text-sm lg:text-lg xl:text-xl 2xl:text-2xl'>
          Software Developer
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
