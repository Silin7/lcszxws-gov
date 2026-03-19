<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import pageJump from '@/hooks/pageJump'

const menuList: any = ref([
  { id: '1', title: '首页', path: '/', name: 'home' },
  { id: '2', title: '文史动态', path: '/news-list', name: 'news-list' },
  { id: '3', title: '通知公告', path: '/notice-list', name: 'notice-list' },
  { id: '4', title: '政协历程', path: '/history/index', name: 'history' },
  { id: '5', title: '地方撷英', path: '/culture-list', name: 'culture-list' },
  { id: '6', title: '人物春秋', path: '/people-list', name: 'people-list' },
  { id: '7', title: '文史典籍', path: '/literature-list', name: 'literature-list' },
  { id: '8', title: '书画作品', path: '/art-list', name: 'art-list' },
  { id: '9', title: 'VR展厅', path: '/https://obs.3dyunzhan.com/sceneFront/index.html?G_TEMP_ID=a320af7b820742c19e8f5cde938424a0', name: 'vr' },
])
</script>

<template>
  <div>
    <!-- 顶部导航栏 -->
    <header class="site-header">
      <div class="header-main">
        <div class="container">
          <div class="header-container">
            <div class="logo-area">
              <img src="/public/images/logo.png">
            </div>
            <!-- 主导航 -->
            <nav class="main-nav">
              <ul class="nav-list">
                <li class="nav-item active"><a href="/index">首页</a></li>
                <li class="nav-item"><a href="/news-list">文史动态</a></li>
                <li class="nav-item"><a href="/notice-list">通知公告</a></li>
                <li class="nav-item"><a href="/history/index">政协历程</a></li>
                <li class="nav-item"><a href="/culture-list">地方撷英</a></li>
                <li class="nav-item"><a href="/people-list">人物春秋</a></li>
                <li class="nav-item"><a href="/literature-list">文史典籍</a></li>
                <li class="nav-item"><a href="/art-list">书画作品</a></li>
                <li class="nav-item"><a
                    href="https://obs.3dyunzhan.com/sceneFront/index.html?G_TEMP_ID=a320af7b820742c19e8f5cde938424a0"
                    target=_blank>VR展厅</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
</style>
