# Simple tailwind preset for Radix Themes

```bash
npm install radix-themes-tw --dev
```

## Configure tailwind
1. Open the `tailwind.config.ts` configuration file.
2. Add this line to import dependency: `import { radixThemePreset } from 'radix-themes-tw';`.
3. Add `radixThemePreset` under `presets`.

The file should look like this:

```typescript
import type { Config } from 'tailwindcss';
import { radixThemePreset } from 'radix-themes-tw';

const config: Config = {
  // your existing configuration
  presets: [radixThemePreset]
}
```
