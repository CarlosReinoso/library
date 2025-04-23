import Typography from "./components/Typography";
import { h6, body1 } from "./components/Typography";
import { FontConfig, TypographyProps, TypographyVariant } from "./types";

const defaultFonts: FontConfig = {
  heading: "font-sans",
  body: "font-sans",
};

export { Typography, h6, body1, defaultFonts };

export type { FontConfig, TypographyProps, TypographyVariant };

export default Typography;
