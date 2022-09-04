const Router = require('koa-router')

const router = new Router({ prefix: '/api/message' })

const { createMessage, getMessage, updateMessage, deteleMessage } = require('../controller/message.controller')

// 留言消息不需要进行太多判断，直接存入数据库即可
router.post('/send', createMessage);

router.get('/get', getMessage);

router.post('/update', updateMessage);

router.post('/detele', deteleMessage);

module.exports = router