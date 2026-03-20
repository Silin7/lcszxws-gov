# 聊城市政协文史馆 - 后端API对接文档

## 基本信息

- **Base URL**: `http://{服务器IP}:8888`
- **Swagger文档**: `http://{服务器IP}:8888/docs`
- **数据格式**: JSON
- **编码**: UTF-8

## 通用响应格式

```json
// 成功（单条/操作类）
{"code": 200, "msg": "OK", "data": {...}}

// 成功（分页列表）
{"code": 200, "msg": null, "data": [...], "total": 100, "page": 1, "page_size": 10}

// 失败
{"code": 400, "msg": "错误描述", "data": null}
```

---

# 一、用户端接口（无需登录）

前端网站直接调用，无需传token。

## 1. 文章相关 `/api/client/articles`

### 1.1 获取文章分类列表

```
GET /api/client/articles/cates
```

返回所有启用的文章分类（对应网站栏目：文史动态、通知公告、地方撷英、人物春秋、文史典籍、书画作品、县区集锦）。

**响应示例**:
```json
[
  {"id": 1, "name": "文史动态", "sort": 1, "status": 1, "created_at": "2026-03-19T19:15:09"},
  {"id": 2, "name": "通知公告", "sort": 2, "status": 1, "created_at": "2026-03-19T19:15:09"}
]
```

### 1.2 获取文章列表（分页+筛选）

```
GET /api/client/articles?title=&cate_id=&page=1&page_size=10
```

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| title | string | 否 | 标题模糊搜索 |
| cate_id | int | 否 | 分类ID筛选 |
| page | int | 否 | 页码，默认1 |
| page_size | int | 否 | 每页条数，默认10，最大50 |

**响应示例**:
```json
{
  "items": [
    {
      "id": 1,
      "title": "聊城市数字政协平台获评省级典型案例",
      "description": "摘要文字...",
      "created_at": "2026-03-19",
      "sort": 1,
      "views": 128,
      "cate_id": 1,
      "cate_name": "文史动态",
      "isrecommend": 1,
      "thumbnail": "/uploads/article/xxx.jpg"
    }
  ],
  "total": 25,
  "page": 1,
  "page_size": 10,
  "has_more": true,
  "cate_info": null
}
```

### 1.3 按分类获取文章列表

```
GET /api/client/articles/cate/{cate_id}?page=1&page_size=10
```

与1.2返回格式相同，`cate_info`会包含分类详情。

### 1.4 获取推荐文章（首页用）

```
GET /api/client/articles/recommended
```

返回最新6条推荐文章（isrecommend=1），精简字段。

**响应示例**:
```json
[
  {
    "id": 1,
    "title": "文章标题",
    "description": "摘要",
    "thumbnail": "/uploads/article/xxx.jpg",
    "views": 128,
    "created_at": "2026-03-19",
    "cate_name": "文史动态"
  }
]
```

### 1.5 获取文章详情

```
GET /api/client/articles/{article_id}
```

自动累加浏览量，返回上一篇/下一篇导航（同分类内）。

**响应示例**:
```json
{
  "id": 1,
  "title": "文章标题",
  "keywords": "关键词1,关键词2",
  "description": "摘要",
  "thumbnail": "/uploads/article/xxx.jpg",
  "source": "信息中心",
  "content": "<p>文章HTML正文...</p>",
  "sort": 1,
  "status": 1,
  "cate_id": 1,
  "cate_name": "文史动态",
  "isrecommend": 1,
  "views": 129,
  "created_at": "2026-03-19 10:30:00",
  "updated_at": "2026-03-19 10:30:00",
  "prev_article": {"id": 0, "title": "上一篇标题"},
  "next_article": {"id": 2, "title": "下一篇标题"}
}
```

> `prev_article` / `next_article` 为 `null` 表示没有上/下一篇。

---

## 2. 单页文章 `/api/client/particle`

用于"关于我们"、"联系方式"等固定页面。

### 2.1 获取所有单页（简化列表）

```
GET /api/client/particle/particles/all-simple
```

**响应**: `[{"id":1, "title":"关于我们", "theurl":"about-us", "description":"..."}]`

### 2.2 按URL标识获取单页详情

```
GET /api/client/particle/particles/by-url/{theurl}
```

如 `/api/client/particle/particles/by-url/about-us`

### 2.3 按ID获取单页详情

```
GET /api/client/particle/particles/{particle_id}
```

---

## 3. 板块/Banner/系统信息 `/api/client/sysbase`

### 3.1 获取所有板块位置

```
GET /api/client/sysbase/sec-positions
```

返回所有启用的板块位置（首页Banner轮播、文史动态、影像等）。

**响应**: `[{"id":1, "name":"首页Banner轮播", "url":"/", "sort":1, "status":1}]`

### 3.2 获取某板块下最新1条内容

```
GET /api/client/sysbase/sec-content/{position_id}
```

### 3.3 获取某板块下N条内容

```
GET /api/client/sysbase/sec-content-list/{position_id}?limit=10
```

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| position_id | int | 是 | 板块位置ID（路径参数） |
| limit | int | 否 | 获取数量，默认10 |

### 3.4 获取某板块下的Banner列表

```
GET /api/client/sysbase/banner-list/{position_id}
```

**响应示例**:
```json
[
  {
    "id": 1,
    "page_id": 1,
    "page_name": "首页Banner轮播",
    "title": "墨彩颂华诞",
    "imgurl": "/uploads/banner/xxx.jpg",
    "istourl": true,
    "url": "/news/detail-xxx.html",
    "sort": 1,
    "havechar": 0,
    "maintitle": "主标题",
    "subtitle": "副标题",
    "description": "描述文字",
    "leftbtn": "了解详情",
    "leftbtn_url": "/detail",
    "rightbtn": "",
    "rightbtn_url": ""
  }
]
```

### 3.5 获取合作单位列表

```
GET /api/client/sysbase/vip-partners
```

### 3.6 获取系统配置信息

```
GET /api/client/sysbase/sysinfos
```

返回网站名称、版权、备案号等 key-value 配置。

**响应示例**:
```json
[
  {"id": 1, "ky": "site_name", "val": "聊城市政协文史馆", "memo": "网站名称"},
  {"id": 4, "ky": "copyright", "val": "© 2025 聊城市政协文史馆 版权所有", "memo": "版权信息"},
  {"id": 5, "ky": "icp", "val": "鲁ICP备XXXXXXXX号", "memo": "ICP备案号"}
]
```

### 3.7 获取页面SEO配置

```
GET /api/client/sysbase/pseo/{page_id}
```

根据板块位置ID获取SEO（title/keywords/description），用于前端 `<head>` 标签。

---

## 4. 友情链接 `/api/client/syscate`

### 4.1 获取前20个友情链接

```
GET /api/client/syscate/flink/top20
```

**响应示例**:
```json
[
  {
    "id": 1,
    "name": "中国政协网",
    "logo": "/uploads/flink/logo.png",
    "link_url": "http://www.cppcc.gov.cn",
    "sort": 1,
    "status": 1
  }
]
```

---

## 5. 静态资源

上传的图片/视频通过以下路径直接访问：

```
GET /uploads/{category}/{filename}
```

示例: `http://服务器IP:8888/uploads/article/abc123.jpg`

---

# 二、后台管理接口

需要登录获取token，请求时在 Header 中携带 `token` 字段。

## 认证

### 登录

```
POST /api/v1/base/access_token
Content-Type: application/json

{"username": "admin", "password": "123456"}
```

**响应**:
```json
{"code": 200, "data": {"access_token": "eyJ...", "username": "admin"}}
```

### 后续请求携带token

```
Header: token: eyJ...（登录返回的access_token）
```

---

## 后台接口一览

### 文章管理

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/v1/articles/list` | 文章列表（支持title/cate_id/status/isrecommend/时间范围筛选） |
| GET | `/api/v1/articles/get?article_id=` | 文章详情 |
| POST | `/api/v1/articles/create` | 创建文章 |
| POST | `/api/v1/articles/update` | 更新文章 |
| POST | `/api/v1/articles/update_status?article_id=&status=` | 更新状态 |
| DELETE | `/api/v1/articles/delete?article_id=` | 删除文章（软删除） |

### 文章分类

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/v1/article_cate/list` | 分类列表 |
| GET | `/api/v1/article_cate/get?id=` | 分类详情 |
| POST | `/api/v1/article_cate/create` | 创建分类 |
| POST | `/api/v1/article_cate/update` | 更新分类 |
| DELETE | `/api/v1/article_cate/delete?id=` | 删除分类 |

### 单页文章

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/v1/particle/list` | 列表 |
| GET | `/api/v1/particle/get?id=` | 详情 |
| POST | `/api/v1/particle/create` | 创建 |
| POST | `/api/v1/particle/update` | 更新 |
| DELETE | `/api/v1/particle/delete?id=` | 删除 |

### 板块位置

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/v1/position/list` | 列表 |
| POST | `/api/v1/position/create` | 创建 |
| POST | `/api/v1/position/update` | 更新 |
| DELETE | `/api/v1/position/delete?id=` | 删除 |

### 板块内容

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/v1/content/list` | 列表（支持position_id/status筛选） |
| GET | `/api/v1/content/get?id=` | 详情 |
| POST | `/api/v1/content/create` | 创建 |
| POST | `/api/v1/content/update` | 更新 |
| DELETE | `/api/v1/content/delete?id=` | 删除 |

### Banner管理

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/v1/bannerpage/list` | Banner页面列表 |
| POST | `/api/v1/bannerpage/create` | 创建页面 |
| GET | `/api/v1/bannerlist/list` | Banner列表 |
| POST | `/api/v1/bannerlist/create` | 创建Banner |
| POST | `/api/v1/bannerlist/update` | 更新Banner |
| DELETE | `/api/v1/bannerlist/delete?id=` | 删除Banner |

### 友情链接

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/v1/flink/list` | 列表 |
| POST | `/api/v1/flink/create` | 创建 |
| POST | `/api/v1/flink/update` | 更新 |
| DELETE | `/api/v1/flink/delete?id=` | 删除 |

### 合作单位

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/v1/vippartner/list` | 列表 |
| POST | `/api/v1/vippartner/create` | 创建 |
| POST | `/api/v1/vippartner/update` | 更新 |
| DELETE | `/api/v1/vippartner/delete?id=` | 删除 |

### 页面SEO

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/v1/pseo/list` | 列表 |
| POST | `/api/v1/pseo/create` | 创建 |
| POST | `/api/v1/pseo/update` | 更新 |
| DELETE | `/api/v1/pseo/delete?id=` | 删除 |

### 系统配置

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/v1/sysinfo/list` | 配置列表 |
| GET | `/api/v1/sysinfo/get?id=` | 配置详情 |
| GET | `/api/v1/sysinfo/get_by_ky?ky=` | 按Key查配置 |
| POST | `/api/v1/sysinfo/create` | 创建配置 |
| POST | `/api/v1/sysinfo/update` | 更新配置 |
| DELETE | `/api/v1/sysinfo/delete?id=` | 删除配置 |

### 文件上传

| 方法 | 路径 | 说明 |
|------|------|------|
| POST | `/api/v1/upload/image` | 上传图片（jpg/png/gif/webp/svg/bmp/ico/tiff） |
| POST | `/api/v1/upload/video` | 上传视频（mp4/avi/mov/mkv/webm等） |
| POST | `/api/v1/upload/file` | 上传任意文件 |

上传使用 `multipart/form-data`，参数：
- `file`: 文件
- `category`: 存储子目录（如 `article`、`banner`、`video`，默认 `default`）

**响应**:
```json
{
  "code": 200,
  "data": {
    "url": "/uploads/article/abc123def456.jpg",
    "filename": "abc123def456.jpg",
    "original_name": "照片.jpg",
    "size": 1024000,
    "ext": "jpg"
  }
}
```

### 系统管理

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/v1/base/userinfo` | 当前用户信息 |
| GET | `/api/v1/base/usermenu` | 当前用户菜单 |
| GET | `/api/v1/base/userapi` | 当前用户API权限 |
| POST | `/api/v1/base/update_password` | 修改密码 |
| GET | `/api/v1/user/list` | 用户列表 |
| GET | `/api/v1/role/list` | 角色列表 |
| GET | `/api/v1/menu/list` | 菜单列表 |
| GET | `/api/v1/dept/list` | 部门列表 |
| GET | `/api/v1/auditlog/list` | 审计日志 |

---

# 三、网站栏目与API映射

| 网站栏目 | 分类ID | 列表接口 | 详情接口 |
|----------|--------|----------|----------|
| 文史动态 | 1 | `GET /api/client/articles/cate/1` | `GET /api/client/articles/{id}` |
| 通知公告 | 2 | `GET /api/client/articles/cate/2` | 同上 |
| 地方撷英 | 3 | `GET /api/client/articles/cate/3` | 同上 |
| 人物春秋 | 4 | `GET /api/client/articles/cate/4` | 同上 |
| 文史典籍 | 5 | `GET /api/client/articles/cate/5` | 同上 |
| 书画作品 | 6 | `GET /api/client/articles/cate/6` | 同上 |
| 县区集锦 | 7 | `GET /api/client/articles/cate/7` | 同上 |
| 首页Banner | - | `GET /api/client/sysbase/banner-list/1` | - |
| 友情链接 | - | `GET /api/client/syscate/flink/top20` | - |
| 网站信息 | - | `GET /api/client/sysbase/sysinfos` | - |
| 政协历程 | - | 固定内容，不走后端 | - |
| VR展厅 | - | 外链，不走后端 | - |

---

# 四、预设板块位置ID

| ID | 名称 | 用途 |
|----|------|------|
| 1 | 首页Banner轮播 | 首页顶部轮播图 |
| 2 | 文史动态 | 首页文史动态板块 |
| 3 | 通知公告 | 首页通知公告板块 |
| 4 | 县区政协文史资料集锦 | 首页县区集锦板块 |
| 5 | 影像 | 首页影像板块 |
| 6 | 文史典籍 | 首页文史典籍板块 |
| 7 | 人物春秋 | 首页人物春秋板块 |
| 8 | 书画作品 | 首页书画作品板块 |
