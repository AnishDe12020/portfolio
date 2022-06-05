import { SVGProps } from "react";

const StorliLogo = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_2_3)">
      <path fill="url(#paint0_radial_2_3)" d="M0 0H512V512H0z" />
      <g filter="url(#filter0_d_2_3)">
        <path
          d="M456 369.855V153.297L268.456 261.576v216.558L456 369.855z"
          fill="url(#paint1_linear_2_3)"
        />
        <path
          d="M57 369.855l187.544 108.279V261.576L57 153.297v216.558z"
          fill="url(#paint2_linear_2_3)"
        />
        <path
          d="M444.697 141.279L257.152 33 69.608 141.279l187.544 108.279 187.545-108.279z"
          fill="url(#paint3_linear_2_3)"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_d_2_3"
        x={17}
        y={1}
        width={479}
        height={525.134}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={8} />
        <feGaussianBlur stdDeviation={20} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2_3" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_2_3"
          result="shape"
        />
      </filter>
      <radialGradient
        id="paint0_radial_2_3"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(135 74.98 181.02) scale(362.039)"
      >
        <stop stopColor="#434343" />
        <stop offset={1} />
      </radialGradient>
      <linearGradient
        id="paint1_linear_2_3"
        x1={501.433}
        y1={307.225}
        x2={181.504}
        y2={350.565}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#093217" />
        <stop offset={1} stopColor="#036D34" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_2_3"
        x1={197.762}
        y1={193.36}
        x2={57}
        y2={444.567}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0282CA" />
        <stop offset={1} stopColor="#014064" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_2_3"
        x1={334.891}
        y1={76.3115}
        x2={163.811}
        y2={227.902}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8D1AFF" />
        <stop offset={1} stopColor="#5101A0" />
      </linearGradient>
      <clipPath id="clip0_2_3">
        <path fill="#fff" d="M0 0H512V512H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default StorliLogo;
