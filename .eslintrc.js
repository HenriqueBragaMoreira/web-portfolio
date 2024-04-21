module.exports = {
  extends: ["next", "prettier", "next/core-web-vitals"],
  plugins: ["react", "react-hooks", "prettier"],
  rules: {
    semi: ["error", "always"],
    "no-unused-vars": [
      "error",
      {
        args: "after-used",
        caughtErrors: "none",
        ignoreRestSiblings: true,
        vars: "all"
      }
    ],
    "prefer-const": "error",
    "react-hooks/exhaustive-deps": "error"
  }
};
