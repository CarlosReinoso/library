export interface FontConfig {
  heading: string;
  body: string;
}

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body1"
  | "body2";

export interface TypographyProps {
  variant?: TypographyVariant;
  children: React.ReactNode;
  className?: string;
  fonts?: FontConfig;
}
