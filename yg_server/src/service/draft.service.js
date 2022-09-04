
const Draft = require('../model/draft.model')

class DraftService {
  async create({title, authorAvatar, articleAvatar, content, category, tag, abstract, createTime}) {
    
    const updateTime = createTime;
    const res = await Draft.create({title, authorAvatar, articleAvatar, content, category, tag, abstract, createTime, updateTime})
    return res.dataValues
  }

  async get({offset, limit, }) {
    const res = await Draft.findAll({
      offset: parseInt(offset),
      limit: parseInt(limit),
    })
    return res? res.reverse() : null;
  }

  async updateByCreateTime({title, content, category, tag, articleAvatar, abstract, createTime, updateTime}) {
    const where = {createTime}
    const updateData = {title, content, category, tag, articleAvatar, abstract, updateTime}
    const res = await Draft.update(updateData, {where})
    return res
  }

  async deteleById(id) {
    
    const where = {id,}
    // console.log("where: ", where);
    const res = await Draft.destroy({where})
    return res[0] > 0 ? true : false;
  } 

  async getOne({createTime}) {
    const where = {createTime}

    const res = await Draft.findOne({
      attributes: ['id', 'title', 'content', 'category', 'tag', 'abstract', 'articleAvatar'],
      where,
    })

    return res ? res.dataValues : null;
  }
}

module.exports = new DraftService()