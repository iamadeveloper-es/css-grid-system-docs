module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `
                        @import "@/scss/gridsystems.min.scss";
                        @import "@/scss/main.scss";
                        `
        }
      }
    }
  };