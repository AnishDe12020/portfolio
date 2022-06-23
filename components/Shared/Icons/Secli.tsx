import { SVGProps } from "react";

const SecliLogo = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    width={512}
    height={512}
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_2_2)">
      <path fill="#000" d="M0 0H512V512H0z" />
      <g filter="url(#filter0_dddd_2_2)">
        <rect x={55} y={168} width={401} height={141} rx={32} fill="#000" />
      </g>
      <path
        d="M130 220.875l-.75 15.25 13-5.5 2.875 8.5-13.5 3.875 9.5 11.875-7.25 5.25-8.375-12.875-8.375 12.875-7.25-5.25 9.5-11.875-13.5-3.875 2.875-8.5 13 5.5-.75-15.25h9zM256 220.875l-.75 15.25 13-5.5 2.875 8.5-13.5 3.875 9.5 11.875-7.25 5.25-8.375-12.875-8.375 12.875-7.25-5.25 9.5-11.875-13.5-3.875 2.875-8.5 13 5.5-.75-15.25h9zM382 220.875l-.75 15.25 13-5.5 2.875 8.5-13.5 3.875 9.5 11.875-7.25 5.25-8.375-12.875-8.375 12.875-7.25-5.25 9.5-11.875-13.5-3.875 2.875-8.5 13 5.5-.75-15.25h9z"
        fill="#fff"
      />
    </g>
    <defs>
      <filter
        id="filter0_dddd_2_2"
        x={-5}
        y={98}
        width={521}
        height={271}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={20} />
        <feGaussianBlur stdDeviation={20} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.852833 0 0 0 0 0 0 0 0 0 0.991667 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2_2" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={-30} />
        <feGaussianBlur stdDeviation={20} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.852833 0 0 0 0 0 0 0 0 0 0.991667 0 0 0 0.25 0" />
        <feBlend in2="effect1_dropShadow_2_2" result="effect2_dropShadow_2_2" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={20} />
        <feGaussianBlur stdDeviation={20} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.852833 0 0 0 0 0 0 0 0 0 0.991667 0 0 0 0.25 0" />
        <feBlend in2="effect2_dropShadow_2_2" result="effect3_dropShadow_2_2" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={-20} />
        <feGaussianBlur stdDeviation={20} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.852833 0 0 0 0 0 0 0 0 0 0.991667 0 0 0 0.25 0" />
        <feBlend in2="effect3_dropShadow_2_2" result="effect4_dropShadow_2_2" />
        <feBlend
          in="SourceGraphic"
          in2="effect4_dropShadow_2_2"
          result="shape"
        />
      </filter>
      <clipPath id="clip0_2_2">
        <path fill="#fff" d="M0 0H512V512H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SecliLogo;
