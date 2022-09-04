const Article = require('../model/article.model')

class ArticleService {
  async create({title, authorAvatar, articleAvatar, content, category, tag, abstract, createTime}) {
    const updateTime = createTime
    const res = await Article.create({title, authorAvatar, articleAvatar, content, category, tag, abstract, createTime, updateTime})
    return res.dataValues
  }

  async getAll({offset, limit, }) {
    const res = await Article.findAll({
      offset: parseInt(offset),
      limit: parseInt(limit),
    })
    return res? res.reverse() : null;
  }

  async getSingle({id}) {
    const res = await Article.findOne({
      where: {
        id,
      }
    })
    return res? res : null;
  }

  async updateById({id, title, content, category, tag, articleAvatar, abstract, updateTime}) {
    const where = {id}
    const updateData = {title, content, category, tag, articleAvatar, abstract, updateTime}
    const res = await Article.update(updateData, {where})
    return res;
  }

  async deteleById() {
    const where = {id}
    const res = await Article.destroy({where})
    return res[0] > 0 ? true : false;
  } 
}

module.exports = new ArticleService()