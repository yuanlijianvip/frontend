const Timestamp = new Date().getTime();
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        // target: 'https://inews-v2.shannonai.com/'
        target: 'http://172.22.22.192:8080/'
      }
    }
  },    
  configureWebpack: {
    output: {
      filename: `js/[name].${Timestamp}.js`, // 每次构建打包时给文件名加上时间戳，确保每次版本更新的文件名不一样
      chunkFilename: `js/[name].${Timestamp}.js`
    }
  }
};
