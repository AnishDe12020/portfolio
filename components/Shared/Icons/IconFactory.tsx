import { SVGProps } from "react";

import { NextJSLogo, TypescriptLogo, XdoXLogo } from ".";

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
  }
};

export default IconFactory;
