import { memo, SVGProps } from 'react';

const Frame26Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect width={60} height={60} rx={30} fill='#D3579F' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M31.0436 37V30.614H33.1074L33.4164 28.1252H31.0436V26.5362C31.0436 25.8156 31.2362 25.3246 32.2311 25.3246L33.5 25.324V23.0981C33.2805 23.0678 32.5273 23 31.651 23C29.8216 23 28.5691 24.1598 28.5691 26.2898V28.1252H26.5V30.614H28.5691V37H31.0436Z'
      fill='#FFF0DC'
    />
  </svg>
);

const Memo = memo(Frame26Icon);
export { Memo as Frame26Icon };
