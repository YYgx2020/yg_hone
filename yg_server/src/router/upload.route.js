// 专门用来上传图片的路由
const Router = require('koa-router')

const {upload} = require('../controller/upload.cotroller')

const router = new Router({prefix: '/api/upload'})

router.post('/', upload)

module.exports = router