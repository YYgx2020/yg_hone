module.exports = {
  accountAlreadyRegistered: {
    code: '10001',
    message: '账号已注册',
    result: '',
  },
  usernameAlreadyExited: {
    code: '10002',
    message: '当前用户名已经被使用，请更换一个',
    result: '',
  },
  getEmailError: {
    code: '10003',
    message: '获取用户邮箱错误',
    result: '',
  },
  getUsernameError: {
    code: '10004',
    message: '获取用户名错误',
    result: '',
  },
  sendEmailError: {
    code: '10005',
    message: '邮件发送错误',
    result: ''
  },
  saveCodeError: {
    code: '10006',
    message: '验证码保存错误',
    result: '',
  },
  codeAlreadyExpired: {
    code: '10007',
    message: '验证码已过期',
    result: ''
  },
  userRegisterError: {
    code: '10008',
    message: '用户注册错误',
    result: ''
  },
  codeCompareError: {
    code: '10009',
    message: '验证码错误',
    result: ''
  },
  tokenExpiredError: {
    code: '10010',
    message: 'token已过期',
    result: ''
  },
  jsonWebTokenError: {
    code: '10011',
    message: '无效token',
    result: ''
  },
  accountNotExited: {
    code: '10012',
    message: '账号不存在',
    result: '',
  },
  codeGetFrequently: {
    code: '10013',
    message: '验证码获取频繁，请稍后再试',
    result: ''
  },
  loginError: {
    code: '10014',
    message: '登录出错',
    result: ''
  },
  getUserInfoError: {
    code: '10015',
    message: '用户信息获取出错',
    result: ''
  },
  resetError: {
    code: '10016',
    message: '密码重置出错',
    result: ''
  },
  invalidPassword: {
    code: '10016',
    message: '密码错误',
    result: '',
  }
}