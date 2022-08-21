// 参考文档： https://www.jianshu.com/p/d7da178de59a

const User = require('../model/user.model')


class UserService {
  
  // 创建用户
  async createUser(username, email, password, user_avator, is_admin) {
    // 插入数据
    // User.create({
    //   // 表的字段
    //   user_name: user_name,
    //   password: password
    // })
    const formatDate = function(time) {
      const date = new Date(time);
    
      const year = date.getFullYear(),
        month = date.getMonth() + 1,//月份是从0开始的
        day = date.getDate(),
        hour = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds();
      const newTime = year + '-' +
            month + '-' +
            day + ' ' +
            hour + ':' +
            min + ':' +
            sec;
      return newTime;			
    }
    const register_time = formatDate(new Date().getTime())
    // await表达式: promise对象的值
    const res = await User.create({ username, email, password, register_time, user_avator, is_admin })
    // console.log(res)

    return res.dataValues
  }

  // 获取用户信息
  async getUserInfo({ id, email, username, password, is_admin }) {
    const whereOpt = {}

    id && Object.assign(whereOpt, { id })
    email && Object.assign(whereOpt, { email })
    username && Object.assign(whereOpt, { username })
    password && Object.assign(whereOpt, { password })
    is_admin && Object.assign(whereOpt, { is_admin })

    const res = await User.findOne({
      // 验证用户密码的时候需要拿到用户的密码
      attributes: ['id', 'email', 'password', 'username', 'register_time', 'is_admin', 'user_avator'],
      where: whereOpt,
    })
    return res ? res.dataValues : null
  }

  // 找回密码
  async updateById({ id, password }) {
    const whereOpt = { id }
    const newUser = {}

    password && Object.assign(newUser, { password })

    const res = await User.update(newUser, { where: whereOpt })
    // console.log(res)
    return res[0] > 0 ? true : false
  }
  // async resetPwd(ctx, next) {
  //   const { email, password } = ctx.body
  //   const user = await User.create({ email, });
  //   user.password = password
  //   let res = await user.save();
  //   console.log("重置结果：", res);
  // }
}

module.exports = new UserService()