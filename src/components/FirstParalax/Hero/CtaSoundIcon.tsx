import { memo, SVGProps } from 'react';

const CtaSoundIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 52 42' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M27 14H25V28H27V14ZM21.5 17H23.5V25H21.5V17ZM18 19H20V23H18V19ZM28.5 18H30.5V24H28.5V18ZM34 20H32V22H34V20Z'
      fill='#FFF0DC'
    />
    <rect x={1} y={1} width={50} height={40} rx={20} stroke='#FFF0DC' strokeOpacity={0.1} strokeWidth={2} />
  </svg>
);

const Memo = memo(CtaSoundIcon);
export { Memo as CtaSoundIcon };
