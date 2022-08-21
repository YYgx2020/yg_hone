import axios from '../utils/request'

/* 
  params 参数会拼接在请求链接的末尾，会暴露参数，这不利于数据的安全
  因此：
  get 请求的参数放在 params 中
  post 请求的参数放在 body 中
*/
/* 登录接口 */
export function login(data) {
  // console.log("发送过去的数据：", data);
  return axios({
    url: '/api/login',
    method: 'post',
    data,
  })
}

/* 注册接口 */
export function register(data) {
  return axios({
    url: '/api/register',
    method: 'post',
    data,
  })
}

/* 获取验证码接口 */
export function getVerifyCode(data) {
  return axios({
    url: '/api/register/code',
    method: 'get',
    params: data
  })
}

// 上传图片接口
export function uploadImg(data) {
  return axios({
    url: '/api/upload',
    method: 'post',
    data,
    headers: { 'Content-Type': 'multipart/form-data' },
  })
}

// 判断用户身份
export async function verifyUser() {
  return await axios({
    url: '/api/auth/verifyUser',
    method: 'post',
  })
}

// 忘记密码
export function changePassword(data) {
  return axios({
    url: '/api/changePassword',
    method: 'post',
    data,
  })
}

