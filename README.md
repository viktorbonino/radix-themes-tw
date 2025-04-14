# Simple [Tailwind](https://tailwindcss.com/) preset for [Radix Themes](https://www.radix-ui.com/themes/docs/overview/getting-started)

## Compatibility

| Tailwind CSS Version | Preset Version                                                        |
| -------------------- |-----------------------------------------------------------------------|
| v4                   | v1 (current)                                                          |
| v3                   | ([v0.2.3](https://www.npmjs.com/package/radix-themes-tw/v/0.2.3))\*   |

## Installation

```bash
npm install radix-themes-tw --dev
```

## Tokens and Classes

This preset overrides the default tailwind classes with the radix ones, except for the space tokens that starts with the rx suffix (for example you can use both `px-2` based on tailwind spacing and `px-rx-2` based on radix spacing).

For the complete list of tokens check the radix documentation: https://www.radix-ui.com/themes/docs/theme/overview

For the tailwind classes check the preset theme: https://github.com/viktorbonino/radix-themes-tw/blob/main/src/index.css

## Usage

your tailwind input css file should like this:

```css
@import "radix-themes-tw";
```

That's it!

Now you can use tailwind with radix-themes's style applied:

```tsx
export default function Page() {
  // `bg-tomato-1` will be `background-color: var(--tomato-1)`
  // `text-accent-contrast` will be `color: var(--accent-contrast);`
  return <div className="bg-tomato-1 text-accent-contrast">Hello</div>;
}
```
