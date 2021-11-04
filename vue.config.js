module.exports = {
    css: {
      loaderOptions: {
        less: {
          // 自定义主题样式
          // modifyVars: {
          //   'primary-color': '#41B883',
          //   'link-color': '#41B883',
          //   'border-radius-base': '2px'
          // }
          // 解决问题主要需要打开这个
          javascriptEnabled: true
        }
      }
    },
    lintOnSave:false,
    runtimeCompiler:true

  }
  