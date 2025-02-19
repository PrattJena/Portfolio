import React, { ReactNode } from 'react';

interface CustomCursorProps {
  x: number;
  y: number;
  isVisible: boolean;
  children: ReactNode;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ x, y, isVisible, children }) => {
  return (
    <div
      style={{
        position: 'fixed',
        left: `${x + 15}px`,
        top: `${y + 15}px`,
        pointerEvents: 'none',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.15s ease',
        zIndex: 9999,
      }}>
      {children}
    </div>
  );
};

export default CustomCursor;
