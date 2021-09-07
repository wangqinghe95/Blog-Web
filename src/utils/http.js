
import {request} from './request'

export function getData (data) {
  return request({
    url: '/api/user/login',
    method: 'post',
    data: data
  })
}
