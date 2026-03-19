import { createRouter, createWebHashHistory, type RouteRecordRaw } from "vue-router";
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
]

const router = createRouter({
  history: createWebHashHistory(),
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
