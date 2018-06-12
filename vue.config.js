module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? './'
    : '/'
  ,
  css: {
    loaderOptions: {
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `@import "@/assets/scss/custom.scss";`
      }
    }
  }
}