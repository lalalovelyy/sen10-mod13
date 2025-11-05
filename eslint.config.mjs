import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

import js from "@eslint/js";
import globals from "globals";

export default [
    js.configs.recommended,
    {
        files: ["**/*.js"],
        languageOptions: {
            globals: {
                ...globals.browser,
            },
        },
        rules: {
            "no-unused-vars": "error",
            "no-undef": "error",
        },
    },
    {
        files: ["**/*.test.js"],
        languageOptions: {
            globals: {
                ...globals.jest,
                ...globals.browser,
            },
        },
    },
];
