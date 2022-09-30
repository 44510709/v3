import http from '../http'
//请求示例

// get 
export const geek = (params) => http.get('/activity/chery_num_winner/geek',{params})

// post
export const getOpenId = (params, config = {}) => http.post('/activity/chery_num_winner/customer', params, config)
export const zan = (params) => http.post('/activity/chery_num_winner/zan',params)