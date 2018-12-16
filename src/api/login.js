import request from '@/utils/request'

export function login(userName, password) {
  return request({
    url: '/login',
    method: 'post',
    data: {
      userName,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/users/info',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}
