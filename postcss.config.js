// postcss.config.js。 px转rem适配
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue({ file }) {
        //设计稿比例
        // vant toast 样式是375的比例
        return file.indexOf('vant') !== -1 ? 37.5 : 75;
      },
      propList: ['*'],
    },
  },
};