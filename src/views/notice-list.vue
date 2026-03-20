<script setup lang="ts">
import { ref } from 'vue';
import pageJump from '@/hooks/pageJump';

// 通知公告数据
const noticeTotal = ref(1);
const noticeList = ref([
  {
    id: '1',
    day: '06',
    month: '01月',
    title: '关于征集聊城政协文史资料的公告',
    tag: 'important',
    desc: '为丰富聊城市政协文史馆馆藏，更好地保存和利用政协文史资料，现面向社会各界征集与聊城政协工作相关的文史资料。征集内容包括：政协会议资料、委员提案、调研报告、历史照片、音像资料等。',
    source: '聊城市政协文化文史和学习委员会',
  }
]);

// 推荐文史典籍
const recommendList = ref([
  {
    id: '1',
    title: '《聊城文化史》',
    desc: '全面系统记述聊城从古至今文化方面权威史著',
    cover: '/public/images/books/wenhuashi.jpg',
  },
  {
    id: '2',
    title: '《字圣仓颉》',
    desc: '对仓颉其人特别是山东东阿仓颉墓地的记载和论文汇集',
    cover: '/public/images/books/zisheng.jpg',
  },
  {
    id: '3',
    title: '《聊城重要历史人物》',
    desc: '介绍160多位在中国历史和聊城历史上产生重大影响的聊城籍或客籍人物',
    cover: '/public/images/books/lishirenwu.jpg',
  }
]);
</script>

<template>
  <div class="notice-list-page">
    <!-- 主要内容区域 -->
    <main class="main-content list-page">
      <div class="container">
        <div class="content-grid">
          <!-- 左侧内容 - 文章列表 -->
          <div class="content-left">
            <div class="articles-list">
              <div class="list-header">
                <h3 class="list-title">通知公告</h3>
                <div class="list-count">共 {{ noticeTotal }} 条公告</div>
              </div>

              <div v-for="(item, index) in noticeList" :key="index" class="article-item">
                <div class="article-date">
                  <span class="day">{{ item.day }}</span>
                  <span class="month">{{ item.month }}</span>
                </div>
                <div class="article-content">
                  <h3 class="article-title">
                    <a @click.prevent="pageJump('notice-detail', { id: item.id })">{{ item.title }}</a>
                    <span v-if="item.tag === 'important'" class="article-tag important">重要</span>
                  </h3>
                  <p class="article-desc">
                    {{ item.desc }}</p>
                  <div class="article-meta">
                    <span class="meta-item">发布单位：{{ item.source }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧内容 - 推荐栏目 -->
          <div class="content-right">
            <!-- 推荐文史典籍 -->
            <section class="recommend-section">
              <div class="section-header">
                <h3 class="section-title">推荐文史典籍</h3>
                <a @click.prevent="pageJump('literature-list')" class="more-link">更多&gt;&gt;</a>
              </div>
              <div class="recommend-list">
                <div v-for="(item, index) in recommendList" :key="index" class="recommend-item">
                  <div class="book-cover">
                    <img :src="item.cover" alt="">
                  </div>
                  <div class="recommend-info">
                    <h4 class="recommend-title">{{ item.title }}</h4>
                    <p class="recommend-desc">{{ item.desc }}</p>
                    <a @click.prevent="pageJump('literature-detail', { id: item.id })" class="recommend-link">查看详情</a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>

  </div>
</template>

<style lang="scss" scoped>
@import "/public/css/common.css";
@import "/public/css/news.css";

// 通知公告页面样式
.notice-list-page {
  background-color: #f5f5f5;
}
</style>