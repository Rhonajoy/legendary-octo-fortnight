
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";

export default [
 
  {
    ignores: [
      "**/*.d.ts", 
      "node_modules/",
      "dist/",
      "build/",
      ".next/",
      "out/",
      "eslint.config.js",
      "jest.setup.cjs"
    ],
  },
  

  js.configs.recommended,
  ...tseslint.configs.recommended,
  

  {
    files: ["**/*.{ts,tsx,js,jsx}",],
    plugins: {
      react,
    },
    
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tseslint.parser,
      parserOptions: {
        
        project: "./tsconfig.eslint.json",
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
    
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  {
    files: ["jest.config.cjs"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "no-undef": "off",
      "@typescript-eslint/no-unused-expressions": "off",
    },
  },
];