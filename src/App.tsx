import { useEffect } from 'react';
import './App.css';
import { LandingPageWrapper } from './components/LandingPageWrapper';
import Lenis from 'lenis';

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();

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
    </>
  );
};

export default App;
