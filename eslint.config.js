import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  {
    ignores: ["dist/**", "node_modules/**", "bin/**", "build/**"]
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: { 
      globals: { 
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      ...tseslint.configs.strict.rules,
      "block-spacing": "error",
      "brace-style": "error",
      "comma-dangle": ["error", "only-multiline"],
      "comma-spacing": "error",
      "func-call-spacing": ["error", "never"],
      "indent": ["error", 2],
      "key-spacing": "error", 
      "keyword-spacing": "error",
      "no-extra-parens": ["error", "all", { ignoreJSX: "multi-line" }],
      "no-extra-semi": "error",
      "no-use-before-define": ["error", {
        "functions": true,
        "classes": true,
        "variables": true,
      }],
      "object-curly-spacing": ["error", "always"],
      "quotes": ["error", "double"],
      "semi": "error",
      "space-before-blocks": "error",
      "space-before-function-paren": ["error", "never"],
      "space-infix-ops": "error",
    },
  },
];
