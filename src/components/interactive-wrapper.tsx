'use client';

import { useRef, useEffect, type ReactNode, type MouseEvent } from 'react';

export function InteractiveWrapper({ children }: { children: ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      if (!wrapperRef.current) return;

      const { clientX, clientY } = e;
      const { offsetWidth, offsetHeight } = wrapperRef.current;
      const xPos = (clientX / offsetWidth - 0.5) * -20;
      const yPos = (clientY / offsetHeight - 0.5) * -10;

      wrapperRef.current.style.setProperty('--x', `${xPos}px`);
      wrapperRef.current.style.setProperty('--y', `${yPos}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="h-full w-full transition-transform duration-700 ease-out"
      style={{
        transform: 'translate(var(--x, 0), var(--y, 0))',
      }}
    >
      {children}
    </div>
  );
}
