import eslint from "@eslint/js";
import typeScriptPlugin from "@typescript-eslint/eslint-plugin";
import typeScriptParser from "@typescript-eslint/parser";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import sonarLintPlugin from "eslint-plugin-sonarjs";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import { dirname } from "path";
import tseslint from "typescript-eslint";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig([
    globalIgnores(["dist", "node_modules", "*.js"]),
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    prettierRecommended,
    sonarLintPlugin.configs.recommended,
    reactHooks.configs.flat.recommended,
    reactRefresh.configs.vite,
    {
        files: ["src/**/*.{ts,tsx}"],
        languageOptions: {
            parser: typeScriptParser,
            parserOptions: {
                project: "tsconfig.app.json",
                tsconfigRootDir: __dirname,
                ecmaVersion: 2020,
                sourceType: "module",
            },
            globals: globals.browser,
        },
        plugins: {
            "@typescript-eslint": typeScriptPlugin,
        },
        rules: {
            "prefer-template": "error",
            "prettier/prettier": [
                "error",
                { endOfLine: "auto", singleQuote: false },
            ],
            "prefer-destructuring": [
                "error",
                { array: true, object: true },
                {},
            ],
            "@typescript-eslint/linebreak-style": "off",
            "@typescript-eslint/interface-name-prefix": "off",
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "object-property-newline": [
                "error",
                { allowAllPropertiesOnSameLine: true },
            ],
            "no-multiple-empty-lines": ["error", { max: 1 }],
            "space-before-blocks": ["error", "always"],
            "padding-line-between-statements": [
                "error",
                { blankLine: "always", prev: "*", next: "return" },
                { blankLine: "always", prev: "*", next: "function" },
                {
                    blankLine: "always",
                    prev: ["const", "let", "var"],
                    next: "*",
                },
                {
                    blankLine: "any",
                    prev: ["const", "let", "var"],
                    next: ["const", "let", "var"],
                },
            ],
            "@typescript-eslint/naming-convention": [
                "error",
                {
                    selector: "variable",
                    format: ["camelCase", "PascalCase", "UPPER_CASE", "snake_case"],
                    leadingUnderscore: "forbid",
                    trailingUnderscore: "allow",
                },
                {
                    selector: "parameter",
                    format: ["camelCase", "snake_case"],
                },
                {
                    selector: "property",
                    format: ["camelCase", "UPPER_CASE", "snake_case"],
                    leadingUnderscore: "allow",
                    trailingUnderscore: "allow",
                    filter: {
                        regex: "^(Allow-a-Word|Authorization)$",
                        match: false,
                    },
                },
                {
                    selector: "memberLike",
                    modifiers: ["private"],
                    format: ["camelCase"],
                    leadingUnderscore: "allow",
                },
                {
                    selector: "property",
                    modifiers: ["private"],
                    format: ["camelCase"],
                    leadingUnderscore: "require",
                },
            ],
        },
    },
]);