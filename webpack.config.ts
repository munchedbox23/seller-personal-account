import { BuildEnv, BuildPaths } from "./config/build/types/config";
import path from "path";
import webpack from "webpack";
import { buildWebpack } from "./config/build/buildWebpackConifg";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.ts"),
    output: path.resolve(__dirname, "build"),
    public: path.resolve(__dirname, "public"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const mode = env?.mode || "development";
  const port = env?.port || 3000;
  const isDev = mode === "development";

  const config: webpack.Configuration = buildWebpack({
    mode,
    paths,
    isDev,
    port,
    project: "frontend",
  });

  return config;
};
