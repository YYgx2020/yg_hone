const path = require('path')

class UploadController {
  async upload(ctx, next) {
    // console.log(ctx.request.files);
    const { file } = ctx.request.files
    const basename = path.basename(file.path)
    console.log('basename: ', basename);
    ctx.body = {
      code: 200,
      url: `${ctx.origin}/img/${basename}`
    }
  }
}

module.exports = new UploadController()