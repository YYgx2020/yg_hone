// 专门用来上传图片的路由
const Router = require('koa-router')

const {upload, deteleImg} = require('../controller/image.cotroller')

const router = new Router({prefix: '/api/image'})

router.post('/upload', upload)

router.post('/detele', deteleImg)

module.exports = router