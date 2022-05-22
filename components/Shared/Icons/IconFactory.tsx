import { SVGProps } from "react";
import { X } from "react-feather";

import {
  NextJSLogo,
  TypescriptLogo,
  XdoXLogo,
  ReactLogo,
  FigmaLogo,
  GoLogo,
  TailwindCSSLogo,
} from ".";
import NotigerLogo from "./Notiger";

interface IconFactoryProps extends SVGProps<SVGSVGElement> {
  name: string;
}

const IconFactory = ({
  name,
  ...otherProps
}: IconFactoryProps): JSX.Element => {
  switch (name) {
    case "nextjs":
      return <NextJSLogo {...otherProps} />;
    case "typescript":
      return <TypescriptLogo {...otherProps} />;
    case "xdox":
      return <XdoXLogo {...otherProps} />;
    case "figma":
      return <FigmaLogo {...otherProps} />;
    case "tailwindcss":
      return <TailwindCSSLogo {...otherProps} />;
    case "go":
      return <GoLogo {...otherProps} />;
    case "react":
      return <ReactLogo {...otherProps} />;
    case "notiger":
      return <NotigerLogo {...otherProps} />;
    default:
      return <X />;
  }
};

export default IconFactory;
