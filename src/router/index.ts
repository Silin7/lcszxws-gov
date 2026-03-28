import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import useHeaderStore from '@/store/modules/header'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/index.vue'),
    meta: {
      title: '聊城市政协文史馆',
      stcode: 'home',
      website: true,
      hashead: true,
      hasfoot: true,
    },
  },
  {
    path: '/news-list',
    name: 'news-list',
    component: () => import('@/views/news-list.vue'),
    meta: {
      title: '文史动态-聊城市政协文史馆',
      stcode: 'news-list',
      website: true,
      hashead: true,
      hasfoot: true,
    },
  },
  {
    path: '/news-detail',
    name: 'news-detail',
    component: () => import('@/views/news-detail.vue'),
    meta: {
      title: '文史动态-聊城市政协文史馆',
      stcode: 'news-list',
      website: true,
      hashead: true,
      hasfoot: true,
    },
  },
  {
    path: '/notice-list',
    name: 'notice-list',
    component: () => import('@/views/notice-list.vue'),
    meta: {
      title: '通知公告-聊城市政协文史馆',
      stcode: 'notice-list',
      website: true,
      hashead: true,
      hasfoot: true,
    },
  },
  {
    path: '/notice-detail',
    name: 'notice-detail',
    component: () => import('@/views/notice-detail.vue'),
    meta: {
      title: '通知公告-聊城市政协文史馆',
      stcode: 'notice-list',
      website: true,
      hashead: true,
      hasfoot: true,
    },
  },
  {
    path: '/culture-list',
    name: 'culture-list',
    component: () => import('@/views/culture-list.vue'),
    meta: {
      title: '地方撷英-聊城市政协文史馆',
      stcode: 'culture-list',
      website: true,
      hashead: true,
      hasfoot: true,
    },
  },
  {
    path: '/culture-detail',
    name: 'culture-detail',
    component: () => import('@/views/culture-detail.vue'),
    meta: {
      title: '地方撷英-聊城市政协文史馆',
      stcode: 'culture-list',
      website: true,
      hashead: true,
      hasfoot: true,
    },
  },
  {
    path: '/people-list',
    name: 'people-list',
    component: () => import('@/views/people-list.vue'),
    meta: {
      title: '人物春秋-聊城市政协文史馆',
      stcode: 'people-list',
      website: true,
      hashead: true,
      hasfoot: true,
    },
  },
  {
    path: '/people-detail',
    name: 'people-detail',
    component: () => import('@/views/people-detail.vue'),
    meta: {
      title: '人物春秋-聊城市政协文史馆',
      stcode: 'people-list',
      website: true,
      hashead: true,
      hasfoot: true,
    },
  },
  {
    path: '/literature-list',
    name: 'literature-list',
    component: () => import('@/views/literature-list.vue'),
    meta: {
      title: '文史典籍-聊城市政协文史馆',
      stcode: 'literature-list',
      website: true,
      hashead: true,
      hasfoot: true,
    },
  },
  {
    path: '/literature-detail',
    name: 'literature-detail',
    component: () => import('@/views/literature-detail.vue'),
    meta: {
      title: '文史典籍-聊城市政协文史馆',
      stcode: 'literature-list',
      website: true,
      hashead: true,
      hasfoot: true,
    },
  },
  {
    path: '/art-list',
    name: 'art-list',
    component: () => import('@/views/art-list.vue'),
    meta: {
      title: '书画作品-聊城市政协文史馆',
      stcode: 'art-list',
      website: true,
      hashead: true,
      hasfoot: true,
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // 根据路由元信息设置文档标题
  window.document.title = (to.meta.title as string) || '聊城市政协文史馆'

  if (useHeaderStore) {
    const headerStore = useHeaderStore()
    headerStore.setSelectedTab(to.meta.stcode as string)
    window.localStorage.setItem('selectedTab', to.meta.stcode as string)
    window.localStorage.setItem('selectedName', to.path as string)
  }

  next()
})


export default router;
