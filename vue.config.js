const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/assets/styles/_variable.scss";
          @import "~@/assets/styles/_mixins.scss";
          @import "~@/assets/styles/index.scss";
        `,
      },
    },
  },

  transpileDependencies: ["vuetify"],
});
