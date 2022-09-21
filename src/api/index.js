import http from '../http'

//请求示例

// get 
export const test = () => http.get('/m1/1427349-0-default/getinfo')

// post, code
export const test2 = (params, config = {}) => http.post('xx', params, config)