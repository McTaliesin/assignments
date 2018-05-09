module.exports = ctx => ({
  plugins: [
    require('postcss-imoort')(),
    require('precss')(),
    require('autoprefixer')({
      "browses": "> 5%",
    })
  ]
})
