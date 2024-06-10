# Simple tailwind preset for Radix Themes

```bash
npm install radix-themes-tw postcss-import --dev
```

## Tokens and Classes
This preset overrides the default tailwind classes with the radix ones, except for the space tokens that starts with the rx suffix (for example you can use both `px-2` based on tailwind spacing and `px-rx-2` based on radix spacing).

For the complete list of tokens check the radix documentation: https://www.radix-ui.com/themes/docs/theme/token-reference

For the tailwind classes check the preset code: https://github.com/viktorbonino/radix-themes-tw/blob/main/src/index.ts


## Configure tailwind
1. Open the `tailwind.config.ts` configuration file.
2. Add this line to import dependency: `import { radixThemePreset } from 'radix-themes-tw';`.
3. Add `radixThemePreset` under `presets`.
4. Add `"postcss-import` under `plugins`.

The file should look like this:

```typescript
import type { Config } from 'tailwindcss';
import { radixThemePreset } from 'radix-themes-tw';

const config: Config = {
  // your existing configuration
  presets: [radixThemePreset]
  plugins: {
    // ...
    "postcss-import": {},
  }
}
```
Also your tailwind input css file should like this:
```css
@import "tailwindcss/base";
@import "@radix-ui/themes/styles.css";

@tailwind components;
@tailwind utilities;
```


