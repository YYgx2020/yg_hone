const Router = require('koa-router')

const router = new Router({prefix: '/api/article'})

// const {verifyDraft} = require('../middleware/draft.middleware')
const {create, getAll, getSingle, update, deleteArticle } = require('../controller/article.controller')


router.post('/create', create);

router.get('/getAll', getAll);

router.get('/getSingle', getSingle);

router.post('/update', update)

router.post('/delete', deleteArticle)

module.exports = router