import { SVGProps } from "react";

const ReactLogo = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-11.5 -10.23174 23 20.46348"
    {...props}
  >
    <circle r={2.05} fill="#61dafb" />
    <g stroke="#61dafb" fill="none">
      <ellipse rx={11} ry={4.2} />
      <ellipse rx={11} ry={4.2} transform="rotate(60)" />
      <ellipse rx={11} ry={4.2} transform="rotate(120)" />
    </g>
  </svg>
);

export default ReactLogo;
