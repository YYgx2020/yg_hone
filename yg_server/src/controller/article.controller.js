
const {create, getAll, getSingle, updateById, deteleById} = require('../service/article.service');
const {articleCreateError, articleGetError, articleUpdateError, articleDeteleError} = require('../constant/err.type');

class ArticleController {
  async create(ctx, next) {
    try {
      const {title, authorAvatar, articleAvatar, content, category, tag, abstract, createTime} = ctx.request.body;
      const res = await create({title, authorAvatar, articleAvatar, content, category, tag, abstract, createTime});
      ctx.body = {
        code: 200,
        message: '文章创建成功',
        res,
      }
    } catch (error) {
      ctx.app.emit('error', articleCreateError, ctx)
    }
  }

  async getAll(ctx, next) {
    try {
      const { offset, limit, } = ctx.query;
      const res = await getAll({ offset, limit, })
      ctx.body = {
        code: 200,
        message: '数据获取成功',
        res,
      }
    } catch (error) {
      console.log('文章获取错误：', error);
      ctx.app.emit('error', articleGetError, ctx)
    }
  }

  async getSingle(ctx, next) {
    try {
      const { id } = ctx.query;
      const res = await getSingle({ id })
      ctx.body = {
        code: 200,
        message: '数据获取成功',
        res,
      }
    } catch (error) {
      console.log('文章获取错误：', error);
      ctx.app.emit('error', articleGetError, ctx)
    }
  }

  async update(ctx, next) {
    try {
      const { id, title, content, category, tag, articleAvatar, abstract, updateTime } = ctx.request.body;
      const res = await updateById({id, title, content, category, tag, articleAvatar, abstract, updateTime});
      ctx.body = {
        code: 200,
        message: '文章更新成功!',
        result: '',
      }
    } catch (error) {
      // console.log('草稿文章更新错误：', error);
      ctx.app.emit('error', articleUpdateError, ctx);
    }
  }

  async deleteArticle(ctx, next) {
    try {
      let {id} = ctx.request.body;
      let res = await deteleById({id})
      console.log('数据删除结果：', res);
      ctx.body = {
        code: 200,
        message: '文章删除成功',
        result: '',
      }
    } catch (error) {
      console.log('文章删除错误：', error);
      ctx.app.emit('error', articleDeteleError, ctx);
    }
  }
}

module.exports = new ArticleController()