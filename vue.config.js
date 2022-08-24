const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/assets/styles/_variable.scss";
          @import "~@/assets/styles/_mixins.scss";
        `,
      },
    },
  },

  transpileDependencies: ["vuetify"],
});
