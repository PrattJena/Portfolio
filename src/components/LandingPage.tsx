import landingImage from "../assets/IMG3.jpg"

const LandingPage = () => {
    return (
      <div className="h-screen bg-[#131212] flex justify-center items-center">
        <div className="w-full max-w-[70%] h-[50vh] md:max-w-[65%] md:h-[55vh] lg:max-w-[60%] lg:h-[50vh] ">
          <img
            className="w-full h-full object-cover rounded-lg lg:rounded-xl xl:rounded-2xl"
            src={landingImage}
            alt="landing-image"
          />
        </div>
      </div>
    );
  };

export default LandingPage