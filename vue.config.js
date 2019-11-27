
module.exports = {
    runtimeCompiler: true,
    filenameHashing: false,
    chainWebpack: config => {
      config.optimization.delete("splitChunks");
    },
    productionSourceMap: false,
}
