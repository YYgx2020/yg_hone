const Message = require('../model/message.model')



class MessageService {
  async createMessage(avatar, nickName, email, content, origin) {
    const sendTime = new Date().getTime()  // 使用时间戳
    const res = await Message.create({avatar, nickName, email, content, sendTime, origin})
    return res.dataValues
  }

  // 获取留言消息
  async getMessageList({offset, limit, isSelected}) {
    const whereOpt = {}
    Object.assign(whereOpt, { isSelected })
    const res = await Message.findAll({
      offset: parseInt(offset),
      limit: parseInt(limit),
      where: whereOpt,
    })
    return res? res.reverse() : null;
  }

  // 更新留言消息
  async updateById({id, isSelected, like}) {
    const where = {id}
    const updateData = {isSelected, like}
    const res = await Message.update(updateData, { where })
    return res
  }

  async deteleById({id}) {
    const where = {id}
    const res = await Message.destroy({where})
    return res[0] > 0 ? true : false
  }
}

module.exports = new MessageService()