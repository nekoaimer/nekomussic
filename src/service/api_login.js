import request from './index'

// 手机密码登录
export const getLoginInfo = (phone, password) => request({url: '/login/cellphone', params: { phone, password}})
