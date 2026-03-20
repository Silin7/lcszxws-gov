import api from '@/api/index'

// 用户端 - 获取文章分类列表
export function articleCatesApi() {
  return api.get('/api/client/articles/cates')
}

// 用户端 - 获取文章列表（分页 + 筛选）
export function articleListApi(params?: {
  title?: string
  cate_id?: number
  page?: number
  page_size?: number
}) {
  return api.get('/api/client/articles', { params })
}

// 用户端 - 按分类获取文章列表
export function articleByCateApi(cateId: number, params?: {
  page?: number
  page_size?: number
}) {
  return api.get(`/api/client/articles/cate/${cateId}`, { params })
}

// 用户端 - 获取推荐文章（首页用）
export function recommendedArticlesApi() {
  return api.get('/api/client/articles/recommended')
}

// 用户端 - 获取文章详情
export function articleDetailApi(articleId: number) {
  return api.get(`/api/client/articles/${articleId}`)
}
