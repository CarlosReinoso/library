import React from "react";
import clsx from "clsx";
import { TypographyProps, TypographyVariant } from "../types";

export const h6 = "text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-4";
export const body1 = "text-base sm:text-lg";

const Typography: React.FC<TypographyProps> = ({
  variant = "h1",
  children,
  className = "",
  fonts = {
    heading: "font-sans",
    body: "font-sans",
  },
}) => {
  const variants: Record<TypographyVariant, string> = {
    h1: `${fonts.heading} text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2`,
    h2: `${fonts.heading} text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4`,
    h3: `${fonts.heading} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4`,
    h4: `${fonts.heading} text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-4`,
    h5: `${fonts.heading} text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-4`,
    h6: `${fonts.heading} ${h6}`,
    body1: `${fonts.body} ${body1}`,
    body2: `${fonts.body} text-sm sm:text-base mb-4`,
  };

  const Component = variant.startsWith("body") ? "p" : variant;

  return React.createElement(
    Component,
    { className: clsx(variants[variant], className) },
    children
  );
};

export default Typography;
