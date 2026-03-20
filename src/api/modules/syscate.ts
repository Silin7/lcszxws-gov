import api from '@/api/index'

// 用户端 - 获取前 20 个友情链接
export function flinkTop20Api() {
  return api.get('/api/client/syscate/flink/top20')
}
