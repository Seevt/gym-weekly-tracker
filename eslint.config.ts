import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
// import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import pluginRouter from "@tanstack/eslint-plugin-router";
export default defineConfig([
  // ✅ Base configs
  eslintConfigPrettier,
  reactHooks.configs["recommended-latest"],
  reactRefresh.configs.vite,
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  ...pluginRouter.configs["flat/recommended"],
  // ✅ Main JS/TS/React files
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js, react: pluginReact },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },

    rules: {
      // ✅ JSX runtime rules (React 17+ new transform)
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "@typescript-eslint/only-throw-error": [
        "error",
        {
          allow: [
            {
              from: "package",
              package: "@tanstack/router-core",
              name: "Redirect",
            },
          ],
        },
      ],
    },
  },

  {
    files: ["**/*.md"],
    plugins: { markdown },
    language: "markdown/commonmark",
    extends: ["markdown/recommended"],
  },
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    extends: ["css/recommended"],
  },

  // { files: ["**/*.json"], plugins: { json }, language: "json/json", extends: ["json/recommended"] },
  // { files: ["**/*.jsonc"], plugins: { json }, language: "json/jsonc", extends: ["json/recommended"] },
  // { files: ["**/*.json5"], plugins: { json }, language: "json/json5", extends: ["json/recommended"] },
]);
