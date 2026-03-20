import api from '@/api/index'

// 用户端 - 获取所有单页（简化列表）
export function particleAllApi() {
  return api.get('/api/client/particle/particles/all-simple')
}

// 用户端 - 按 URL 标识获取单页详情
export function particleByUrlApi(theurl: string) {
  return api.get(`/api/client/particle/particles/by-url/${theurl}`)
}

// 用户端 - 按 ID 获取单页详情
export function particleByIdApi(particleId: number) {
  return api.get(`/api/client/particle/particles/${particleId}`)
}
