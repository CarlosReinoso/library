import Typography from "./components/Typography";
import { h6, body1 } from "./components/Typography";
import { FontConfig, TypographyProps, TypographyVariant } from "./types";
import WebsiteBy from "./components/WebsiteBy";

const defaultFonts: FontConfig = {
  heading: "font-sans",
  body: "font-sans",
};

export { Typography, h6, body1, defaultFonts };
export { WebsiteBy };

export type { FontConfig, TypographyProps, TypographyVariant };

export default Typography;
