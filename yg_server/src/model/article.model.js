const {DataTypes} = require('sequelize')

const seq = require('../db/seq')

const Article = seq.define('yg_article', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '文章标题，不可为空'
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '溢狗',
    commit: '文章作者，由于网站只有溢狗一人可以写文章，所以默认作者都为溢狗',
  },
  authorAvatar: {
    type: DataTypes.STRING,
    allowNull: false,
    commit: '作者头像',
  },
  articleAvatar: {
    type: DataTypes.STRING,
    allowNull: false,
    commit: "草稿封面",
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
    commit: '文章内容',
  },
  createTime: {
    type: DataTypes.STRING,
    allowNull: false,
    commit: '文章创建时间',
  },
  updateTime: {
    type: DataTypes.STRING,
    allowNull: false,
    commit: '文章更新时间',
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
    commit: '文章分类',
  },
  tag: {
    type: DataTypes.JSON,
    allowNull: false,
    comment: '文章标签'
  },
  abstract: {
    type: DataTypes.TEXT,
    allowNull: false,
    comment: '文章摘要'
  },
  read: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    comment: '文章阅读量'
  },
  like: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    comment: '文章点赞数'
  }
}, {
  timestamps: false
})

Article.sync()

module.exports = Article;