const { defineConfig } = require('@vue/cli-service')

const REPO_NAME = 'kyipyar-portfilio';
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },
 publicPath: process.env.NODE_ENV === 'production'
    // ? '/kyipyar-portfilio/' // This is your repo's name
    ? `/${REPO_NAME}/`
    : '/' // This is for local development

})
