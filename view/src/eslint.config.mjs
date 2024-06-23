import pluginJs from "@eslint/js";
import tseslintConfig from "@typescript-eslint/eslint-plugin/dist/configs/recommended";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import globals from "globals";

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslintConfig.configs,
  pluginReactConfig,
  eslintConfigPrettier, // Prettierと競合するESLintルールを無効化
  {
    rules: {},
  },
];
