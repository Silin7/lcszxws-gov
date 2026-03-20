import api from '@/api/index'

// 用户端 - 获取所有板块位置
export function secPositionsApi() {
  return api.get('/api/client/sysbase/sec-positions')
}

// 用户端 - 获取某板块下最新 1 条内容
export function secContentApi(positionId: number) {
  return api.get(`/api/client/sysbase/sec-content/${positionId}`)
}

// 用户端 - 获取某板块下 N 条内容
export function secContentListApi(positionId: number, limit?: number) {
  return api.get(`/api/client/sysbase/sec-content-list/${positionId}`, {
    params: { limit }
  })
}

// 用户端 - 获取某板块下的 Banner 列表
export function bannerListApi(positionId: number) {
  return api.get(`/api/client/sysbase/banner-list/${positionId}`)
}

// 用户端 - 获取合作单位列表
export function vipPartnersApi() {
  return api.get('/api/client/sysbase/vip-partners')
}

// 用户端 - 获取系统配置信息
export function sysInfosApi() {
  return api.get('/api/client/sysbase/sysinfos')
}

// 用户端 - 获取页面 SEO 配置
export function pseoApi(pageId: number) {
  return api.get(`/api/client/sysbase/pseo/${pageId}`)
}
