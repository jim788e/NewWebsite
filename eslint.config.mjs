import eslintPluginAstro from 'eslint-plugin-astro';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tseslint from 'typescript-eslint';
import astroParser from 'astro-eslint-parser';

export default tseslint.config(
  // Global ignores
  {
    ignores: [
      "dist/**/*",
      ".astro/**/*",
      ".vercel/**/*",
      "node_modules/**/*",
      "tailwind.config.js"
    ]
  },
  
  // Astro configuration
  ...eslintPluginAstro.configs.recommended,
  
  // TS rules
  ...tseslint.configs.recommended,
  
  // JS/TS and Astro files general rules
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx,astro}"],
    plugins: {
      "jsx-a11y": jsxA11y
    },
    rules: {
      ...jsxA11y.flatConfigs.recommended.rules,
      "no-console": "warn",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "@typescript-eslint/no-explicit-any": "off",
      "jsx-a11y/no-redundant-roles": "warn",
      "jsx-a11y/alt-text": "error"
    }
  },
  
  // Override for Astro files to parse TypeScript correctly
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: [".astro"]
      }
    }
  }
);
