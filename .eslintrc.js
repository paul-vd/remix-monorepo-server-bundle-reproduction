module.exports = {
  extends: ["@remix-run/eslint-config", "@remix-run/eslint-config/node"],
  plugins: ["security"],
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        argsIgnorePattern: "^_",
        ignoreRestSiblings: false,
      },
    ],
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-debugger": "warn",
  },
  overrides: [
    {
      files: ["skeleton/server.js"],
      rules: {
        "no-console": "off",
      },
    },
    {
      files: ["packages/compat/codemods/**"],
      rules: {
        "no-console": "off",
      },
    },
  ],
  settings: {
    react: {
      version: "18",
    },
  },
};
