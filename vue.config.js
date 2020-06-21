module.exports = {
    devServer : {
        proxy: {
          '/api': {
            'target': 'http://yikeyide.0733d.cn',
            'changeOrigin': true,
            // 'pathRewrite': { '^/api' : '/' },
          },
        }
    }
}