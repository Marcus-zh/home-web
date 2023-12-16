const withStyle9 = require("style9-webpack/next-appdir");

module.exports = withStyle9({
  parserOptions: {
    presets: [
      "@babel/react",
      "@babel/typescript",
      [
        "@babel/env",
        {
          modules: false,
        },
      ],
    ],
    plugins: ["typescript", "jsx"],
  },
  minifyProperties: process.env.NODE_ENV === "production",
  incrementalClassnames: false,
})({
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  transpilePackages: ["style9"],
});