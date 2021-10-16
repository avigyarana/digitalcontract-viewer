module.exports = {
  plugins: [
    "@babel/plugin-proposal-export-namespace-from",
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "##": "./src",
        },
      },
    ],
  ],
  presets: [["@babel/preset-env", { targets: { node: "current" } }]],
};
