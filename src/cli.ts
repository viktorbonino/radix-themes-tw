import { generateTheme, generateThemeWithImports } from "./generate";

const type = process.argv[2] || "theme";

if (type === "theme") {
  console.log(generateTheme({ showComments: true }));
} else if (type === "theme-with-imports") {
  console.log(generateThemeWithImports());
} else {
  console.error("Invalid type. Use 'theme' or 'theme-with-imports'");
  process.exit(1);
}
