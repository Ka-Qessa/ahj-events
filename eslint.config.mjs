import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: [
        "**/dist",
        "**/doc",
        "**/logs",
        "**/*.log",
        "**/npm-debug.log*",
        "**/yarn-debug.log*",
        "**/yarn-error.log*",
        "**/pids",
        "**/*.pid",
        "**/*.seed",
        "**/*.pid.lock",
        "**/lib-cov",
        "**/coverage",
        "**/.nyc_output",
        "**/.grunt",
        "**/bower_components",
        "**/.lock-wscript",
        "build/Release",
        "**/node_modules/",
        "**/jspm_packages/",
        "**/typings/",
        "**/.npm",
        "**/.eslintcache",
        "**/.node_repl_history",
        "**/*.tgz",
        "**/.yarn-integrity",
        "**/.env",
        "**/.env.test",
        "**/.cache",
        "**/.next",
        "**/.nuxt",
        ".vuepress/dist",
        "**/.serverless/",
        "**/.fusebox/",
        "**/.dynamodb/",
        "**/webpack.common.js",
        "**/webpack.dev.js",
        "**/webpack.prod.js",
    ],
}, ...compat.extends("airbnb-base"), {
    languageOptions: {
        globals: {
            ...globals.jest,
            ...globals.browser,
            Atomics: "readonly",
            SharedArrayBuffer: "readonly",
        },

        ecmaVersion: 2020,
        sourceType: "module",
    },

    rules: {
        "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
        "import/extensions": ["error", "ignorePackages"],
    },
}];