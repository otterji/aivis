/* eslint-disable import/no-anonymous-default-export */
import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import tseslint from "typescript-eslint";

export default [
  {
    languageOptions: { globals: globals.browser },
  },
  {
    rules: {
      indent: ["error", 2],
      "no-unused-vars": "warn",
      'import/no-anonymous-default-export': 'off'
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
];