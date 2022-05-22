import { SVGProps } from "react";

const XdoXLogo = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_d_2_2)">
      <ellipse
        cx={256}
        cy={256}
        rx={210}
        ry={230}
        fill="url(#paint0_linear_4_4)"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_2_2"
        x={26}
        y={10}
        width={460}
        height={500}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius={4}
          operator="dilate"
          in="SourceAlpha"
          result="effect1_dropShadow_2_2"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={8} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.274748 0 0 0 0 0.0653125 0 0 0 0 0.870833 0 0 0 0.4 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2_2" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_2_2"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_4_4"
        x1={256}
        y1={26}
        x2={256}
        y2={486}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A855F7" />
        <stop offset={0.614583} stopColor="#5825E7" />
        <stop offset={1} stopColor="#2563EB" />
      </linearGradient>
    </defs>
  </svg>
);

export default XdoXLogo;
