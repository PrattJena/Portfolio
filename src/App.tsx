import { useEffect } from 'react';
import './App.css';
import { PortfolioWrapper } from './components/PortfolioWrapper';
import Lenis from 'lenis';

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
    });
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <PortfolioWrapper />
    </>
  );
};

export default App;
