import { useEffect } from 'react';
import './App.css';
import { LandingPageWrapper } from './components/LandingPageWrapper';
import Lenis from 'lenis';
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
    <div>
      <LandingPageWrapper />
    </div>
  );
};

export default App;
