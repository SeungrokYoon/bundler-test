import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginImport from "eslint-plugin-import";
import pluginReact from "eslint-plugin-react";
import globals from "globals";

import { includeIgnoreFile } from "@eslint/compat";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

/** @type {import('eslint').Linter.Config[]} */
export default [
  includeIgnoreFile(gitignorePath),
  {
    ignores: ["*.config.{js,mjs,cjs}"],
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  pluginImport.flatConfigs.recommended,
  {
    files: ["src/**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: globals.browser },
    rules: {
      "react/react-in-jsx-scope": "off",
      "import/order": [
        "error",
        {
          groups: [
            "type",
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "unknown",
          ],
          pathGroups: [
            {
              pattern: "react*",
              group: "external",
              position: "before",
            },
            {
              pattern: "@hooks/*",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@pages/*",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@components/*",
              group: "internal",
              position: "after",
            },
          ],

          pathGroupsExcludedImportTypes: ["@tanstack*"],
          alphabetize: {
            order: "asc",
          },
        },
      ],
    },
  },
  eslintConfigPrettier,
  // eslint.config.js (flat config) 에서는 config 순서에 따라 적용되는 순서가 변경된다.
  // rules 밑에 eslintConfigPrettier가 위치하는 경우, eslintConfigPrettier가 rules를 override할 수 있다.
];
