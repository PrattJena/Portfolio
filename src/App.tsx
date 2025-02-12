import { useEffect } from 'react';
import './App.css';
import { LandingPageWrapper } from './components/LandingPageWrapper';
import Lenis from 'lenis';
import GlassOverlay from './components/HeroSection/GlassOverlay';
// import GridAnimation from './components/Tile';

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
    });

    // Track the RAF ID to cancel later
    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf); // Store the ID
    }

    rafId = requestAnimationFrame(raf); // Initialize

    return () => {
      lenis.destroy(); // Remove scroll listeners
      cancelAnimationFrame(rafId); // Stop the loop
    };
  }, []);

  return (
    <>
      <LandingPageWrapper />
      <div className='h-screen w-screen bg-purple-400'>next div</div>
      <GlassOverlay />
    </>
  );
};

export default App;
