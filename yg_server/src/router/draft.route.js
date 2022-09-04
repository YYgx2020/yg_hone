const Router = require('koa-router')

const router = new Router({prefix: '/api/draft'})

const {verifyDraft} = require('../middleware/draft.middleware')
const {create, get, update, deleteDraft } = require('../controller/draft.controller')


router.post('/create', verifyDraft, create);
// router.post('/create', create);

router.get('/get', get)

router.get('/getone', verifyDraft)

router.post('/update', update)

router.post('/delete', deleteDraft)

module.exports = router