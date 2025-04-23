# My UI Library

A collection of reusable React components styled with Tailwind CSS.

## Installation

```bash
pnpm add library
# or
npm install library
# or
yarn add library
```

## Usage

### Typography Component

```jsx
import { Typography } from 'library';

// Basic usage
<Typography variant="h1">Heading 1</Typography>
<Typography variant="body1">Body text</Typography>

// With custom fonts
const customFonts = {
  heading: "font-poppins",
  body: "font-raleway"
};

<Typography variant="h1" fonts={customFonts}>Custom Font Heading</Typography>
```

### Available Variants

- h1, h2, h3, h4, h5, h6
- body1, body2

### Style Constants

```jsx
import { h6, body1 } from 'library';

// Use style constants directly
<div className={h6}>Heading 6 style</div>
<p className={body1}>Body 1 style</p>
```

## Customization

The Typography component accepts the following props:

- `variant`: The typography variant (default: "h1")
- `children`: The content to display
- `className`: Additional CSS classes
- `fonts`: Custom font configuration (default: { heading: "font-sans", body: "font-sans" })

## License

MIT
