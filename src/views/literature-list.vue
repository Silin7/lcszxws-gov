<script setup lang="ts">
import { ref, computed } from 'vue';
import pageJump from '@/hooks/pageJump';

// 分类数据
const categories = ref([
  {
    id: 'all',
    name: '全部典籍'
  },
  {
    id: 'history',
    name: '地方史志'
  },
  {
    id: 'culture',
    name: '文化研究'
  },
  {
    id: 'modern',
    name: '当代史志'
  }
]);

// 当前选中的分类
const currentCategory = ref('all');

// 典籍数据
const literatureList = ref([
  {
    id: '1',
    name: '《东昌府志校注》',
    author: '校注：曲成立',
    brief: '该志始修于乾隆三十七年（1772年），历时两年完成编纂，乾隆四十二年（1777年）正式刊行。',
    cover: '/public/images/books/dongchangfuzhi.jpg',
    category: 'history',
    badge: '史志',
    link: '/literature/detail_5.html'
  },
  {
    id: '2',
    name: '《艺文命脉》',
    author: '聊城市政协文化史和学习文员会',
    brief: '李世钊先生收集聊城文史资料汇编。',
    cover: '/public/images/books/yiwenmingmai.jpg',
    category: 'history',
    badge: '史志',
    link: '/literature/detail_6.html'
  },
  {
    id: '3',
    name: '《聊城文化史》',
    author: '聊城市政协委员会编',
    brief: '全面系统记述聊城从古至今文化方面权威史著，涵盖政治、经济、文化、社会等各个领域。',
    cover: '/public/images/books/wenhuashi.jpg',
    category: 'history',
    badge: '史志',
    link: '/literature/detail_1.html'
  },
  {
    id: '4',
    name: '《字圣仓颉》',
    author: '主编：王一',
    brief: '该书对仓颉其人特别是对山东东阿仓颉墓地的记载和有关论文等全部汇集在一起。',
    cover: '/public/images/books/zisheng.jpg',
    category: 'culture',
    badge: '文化',
    link: '/literature/detail_2.html'
  },
  {
    id: '5',
    name: '《聊城重要历史人物》',
    author: '聊城市政协文史资料委员会',
    brief: '详尽地介绍了160多位在中国历史和聊城历史上曾经产生重大影响的聊城籍或客籍人物。',
    cover: '/public/images/books/lishirenwu.jpg',
    category: 'history',
    badge: '人物',
    link: '/literature/detail_3.html'
  },
  {
    id: '6',
    name: '《聊城脱贫攻坚口述史》',
    author: '聊城市政协文化史和学习委员会',
    brief: '以亲历、亲见、亲闻为特色，以身边人口述身边事，用"小故事"折射"大历史"。',
    cover: '/public/images/books/tuopingongjian.jpg',
    category: 'modern',
    badge: '当代',
    link: '/literature/detail_4.html'
  }
]);

// 切换分类
const switchCategory = (categoryId: string) => {
  currentCategory.value = categoryId;
};

// 筛选后的典籍列表
const filteredLiterature = computed(() => {
  if (currentCategory.value === 'all') {
    return literatureList.value;
  }
  return literatureList.value.filter(item => item.category === currentCategory.value);
});

// 将典籍列表分组，每行2个
const literatureRows = computed(() => {
  const rows = [];
  for (let i = 0; i < filteredLiterature.value.length; i += 2) {
    rows.push(filteredLiterature.value.slice(i, i + 2));
  }
  return rows;
});
</script>

<template>
  <div class="literature-list-page">
    <!-- 主要内容区域 -->
    <main class="main-content literature-main">
      <div class="container">
        <!-- 典籍分类导航 -->
        <div class="literature-category-nav">
          <button v-for="category in categories" :key="category.id" class="category-btn"
            :class="{ active: category.id === currentCategory }" @click="switchCategory(category.id)">{{ category.name
            }}</button>
        </div>

        <!-- 典籍展示区 - 每行2本书 -->
        <div class="literature-showcase">
          <div v-for="(row, rowIndex) in literatureRows" :key="rowIndex" class="literature-row">
            <div v-for="(item, index) in row" :key="index" class="literature-item" :data-category="item.category">
              <div class="book-cover">
                <img :src="item.cover" :alt="item.name" class="cover-image">
                <div class="book-badge">{{ item.badge }}</div>
              </div>
              <div class="book-info">
                <h3 class="book-name">{{ item.name }}</h3>
                <p class="book-author">{{ item.author }}</p>
                <p class="book-brief">{{ item.brief }}</p>
              </div>
              <a @click.prevent="pageJump('literature-detail', { id: item.id })" class="book-link">查看详情</a>
            </div>
          </div>
        </div>
      </div>
    </main>

  </div>
</template>

<style lang="scss" scoped>
@import "/public/css/common.css";
@import "/public/css/literature.css";

// 文史典籍页面样式
.literature-list-page {
  // 可根据需要添加页面特定样式
}
</style>