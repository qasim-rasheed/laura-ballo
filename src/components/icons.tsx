import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="40"
      height="40"
    >
      <g className="fill-primary group-hover:fill-primary-foreground transition-colors">
        <path d="M20,20 L40,20 L40,80 L20,80 Z" />
        <path d="M50,20 Q70,20 70,50 Q70,80 50,80 Q30,80 30,50 Q30,20 50,20 M50,30 Q40,30 40,50 Q40,70 50,70 Q60,70 60,50 Q60,30 50,30" />
      </g>
    </svg>
  );
}
