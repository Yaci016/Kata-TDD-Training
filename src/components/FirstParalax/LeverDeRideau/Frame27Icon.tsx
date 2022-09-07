import { memo, SVGProps } from 'react';

const Frame27Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect width={60} height={60} rx={30} fill='#D3579F' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M26.1328 27.6484V37H23.2312V27.6484H26.1328ZM33.5194 27.416C36.4574 27.416 37 29.3529 37 31.8707V37H34.1006V32.4523C34.1006 31.3679 34.0806 29.9729 32.5928 29.9729C31.0832 29.9729 30.8515 31.1542 30.8515 32.3739V37H27.9526V27.6484H30.7353V28.9262H30.7742C31.1616 28.1911 32.108 27.416 33.5194 27.416ZM24.6827 23C25.6102 23 26.364 23.7551 26.364 24.6846C26.364 25.615 25.6102 26.3701 24.6827 26.3701C23.7527 26.3701 23 25.615 23 24.6846C23 23.7551 23.7527 23 24.6827 23Z'
      fill='#FFF0DC'
    />
  </svg>
);

const Memo = memo(Frame27Icon);
export { Memo as Frame27Icon };
