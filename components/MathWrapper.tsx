import React, { useEffect, useRef } from 'react';

// Declare types for window.MathJax
declare global {
  interface Window {
    MathJax: {
      typesetPromise: (elements?: HTMLElement[]) => Promise<void>;
    };
  }
}

interface MathWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const MathWrapper: React.FC<MathWrapperProps> = ({ children, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && window.MathJax) {
      // Clear any existing MathJax elements inside to prevent duplication issues before re-rendering
      // (React usually handles the DOM update, MathJax just decorates it)
      window.MathJax.typesetPromise([containerRef.current]).catch((err) => {
        console.warn('MathJax typesetting failed:', err);
      });
    }
  }, [children]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default MathWrapper;