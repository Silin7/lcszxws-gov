<script setup lang="ts">
import { ref } from "vue";
import pageJump from "@/hooks/pageJump";

const navActive: any = ref("home");
const navList: any = ref([
  { id: "1", link: false, title: "首页", path: "/", name: "home" },
  {
    id: "2",
    link: false,
    title: "文史动态",
    path: "/news-list",
    name: "news-list",
  },
  {
    id: "3",
    link: false,
    title: "通知公告",
    path: "/notice-list",
    name: "notice-list",
  },
  {
    id: "4",
    link: true,
    target: "_blank",
    title: "政协历程",
    path: "http://lcwsg.lcszx.gov.cn:88/history/index.html",
    name: "history",
  },
  {
    id: "5",
    link: false,
    title: "地方撷英",
    path: "/culture-list",
    name: "culture-list",
  },
  {
    id: "6",
    link: false,
    title: "人物春秋",
    path: "/people-list",
    name: "people-list",
  },
  {
    id: "7",
    link: false,
    title: "文史典籍",
    path: "/literature-list",
    name: "literature-list",
  },
  {
    id: "8",
    link: false,
    title: "书画作品",
    path: "/art-list",
    name: "art-list",
  },
  {
    id: "9",
    link: true,
    target: "_blank",
    title: "VR展厅",
    path: "https://obs.3dyunzhan.com/sceneFront/index.html?G_TEMP_ID=a320af7b820742c19e8f5cde938424a0",
    name: "vr",
  },
]);

// 导航栏点击事件
function navClick(item: any) {
  navActive.value = item.name;
  if (!item.link) {
    pageJump(item.name);
  } else {
    window.open(item.path, item.target);
  }
}
</script>

<template>
  <div>
    <!-- 顶部导航栏 -->
    <header class="site-header">
      <div class="header-main">
        <div class="container">
          <div class="header-container">
            <div class="logo-area">
              <img src="/public/images/logo.png" />
            </div>
            <!-- 主导航 -->
            <nav class="main-nav">
              <ul class="nav-list">
                <li v-for="item in navList" :key="item.id" :class="['nav-item', { active: item.name === navActive }]"
                  @click.stop="navClick(item)" style="cursor: pointer">
                  <a>{{ item.title }}</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped></style>
