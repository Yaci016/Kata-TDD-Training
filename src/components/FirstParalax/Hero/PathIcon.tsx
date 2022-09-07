import { memo, SVGProps } from 'react';

const PathIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 627 845' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M2.5 2C76.4999 224.5 572 264 619.5 477.5C668.439 697.469 317 833.5 159.5 842.5'
      stroke='#FFF0DC'
      strokeWidth={4}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeDasharray='1 10'
    />
  </svg>
);

const Memo = memo(PathIcon);
export { Memo as PathIcon };
