import { SVGProps } from "react";

const NotigerLogo = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M244.379 48.435L121.911 50.04l.754 2.614L2.476 469.189h122.479l58.949-204.299 58.511 202.779-.525 1.766h122.479L487 48.435H364.369l-59.555 209.449L245.37 51.87l.269-.933h-.538l-.722-2.502z"
      fill="url(#paint0_linear_6_6)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_6_6"
        x1={421.5}
        y1={48}
        x2={69.0953}
        y2={468.661}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1A3B8D" />
        <stop offset={1} stopColor="#206E86" />
      </linearGradient>
    </defs>
  </svg>
);

export default NotigerLogo;
