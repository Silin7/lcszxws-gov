<script setup lang="ts">
import { ref } from 'vue';
import pageJump from "@/hooks/pageJump";


// 文史动态
const articleTotal = ref(3);
const articleList = ref([
  {
    id: '1',
    day: '31',
    month: '12月',
    year: '2025',
    title: '聊城市"数字政协"平台获省信息技术应用创新"典型应用案例"',
    tag: 'new',
    hot: false,
    desc: '聊城市"数字政协"平台获评2025年山东省信息技术应用创新"典型应用案例"。该平台通过数字化手段提升政协履职效能，实现了提案办理、委员管理、会议服务等工作的信息化、智能化。',
    source: '信息中心',
    time: '2025-12-31',
  },
  {
    id: '2',
    day: '26',
    month: '09月',
    year: '2024',
    title: '聊城市政协系统庆祝中华人民共和国成立75周年和人民政协成立75周年文艺汇演举行',
    tag: '',
    hot: false,
    desc: '9月26日下午，"七十五载奋进路·同心向党谱新篇"聊城市政协系统庆祝中华人民共和国和人民政协成立75周年文艺汇演在市会议接待中心报告厅举行。市政协主席、副主席及各界政协委员代表观看了演出。',
    source: '办公室',
    time: '2024-09-26',
  },
  {
    id: '3',
    day: '05',
    month: '09月',
    year: '2024',
    title: '"墨彩颂华诞·政协建新功"——聊城市政协庆祝新中国和人民政协成立75周年书画作品展在孔繁森同志纪念馆开展',
    tag: '',
    hot: true,
    desc: '2024年9月5日上午，由政协聊城市委员会主办，聊城市美术馆、孔繁森同志纪念馆承办的"墨彩颂华诞·政协建新功"——聊城市政协庆祝新中国和人民政协成立75周年书画作品展在孔繁森同志纪念馆开展。',
    source: '文化文史委',
    time: '2024-09-05',
  }
]);

// 推荐文史典籍
const recommendList = ref([
  {
    id: '4',
    title: '《聊城脱贫攻坚口述史》',
    desc: '以亲历、亲见、亲闻为特色，用"小故事"折射"大历史"',
    cover: '/public/images/books/tuopingongjian.jpg',
  },
  {
    id: '1',
    title: '《聊城文化史》',
    desc: '全面系统记述聊城从古至今文化方面权威史著',
    cover: '/public/images/books/wenhuashi.jpg',
  },
  {
    id: '2',
    title: '《字圣仓颉》',
    desc: '仓颉其人及山东东阿仓颉墓地相关研究的汇集',
    cover: '/public/images/books/zisheng.jpg',
  },
]);
</script>

<template>
  <div class="news-list-page">
    <!-- 主要内容区域 -->
    <main class="main-content list-page">
      <div class="container">
        <div class="content-grid">
          <!-- 左侧内容 - 文章列表 -->
          <div class="content-left">
            <div class="articles-list">
              <div class="list-header">
                <h3 class="list-title">文史动态</h3>
                <div class="list-count">共 {{ articleTotal }} 条动态</div>
              </div>

              <div v-for="(item, index) in articleList" :key="index" class="article-item">
                <div class="article-date">
                  <span class="day">{{ item.day }}</span>
                  <span class="month">{{ item.month }}</span>
                  <span class="year">{{ item.year }}</span>
                </div>
                <div class="article-content">
                  <h3 class="article-title">
                    <a @click.prevent="pageJump('news-detail', { id: item.id })">{{
                      item.title }}</a>
                    <span v-if="item.tag === 'new'" class="article-tag new">最新</span>
                    <span v-if="item.hot" class="article-tag hot">热门</span>
                  </h3>
                  <p class="article-desc">
                    {{ item.desc }}</p>
                  <div class="article-meta">
                    <span class="meta-item">来源：{{ item.source }}</span>
                    <span class="meta-item">发布时间：{{ item.time }}</span>
                  </div>
                </div>
              </div>

              <!-- 分页导航 -->
              <div class="pagination">
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
@import "/public/css/culture.css";
@import "/public/css/home.css";
@import '/public/css/news.css';

.news-list-page {
  background-color: #f5f5f5;
}
</style>