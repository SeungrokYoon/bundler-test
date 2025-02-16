import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginImport from "eslint-plugin-import";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginImport.configs.recommended,
  {
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
];
