import { BuildOptions } from "./types/config";
import webpack from "webpack";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildDevServer } from "./buildDevServer";

export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const { paths, mode, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.output,
      clean: true,
      publicPath: "/",
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? "eval-cheap-module-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
