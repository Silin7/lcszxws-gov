<script setup lang="ts">
import { ref } from 'vue';

// 分类数据
const categories = ref([
  {
    id: 'river-culture',
    name: '两河文化',
    icon: '🌊',
    count: 2
  },
  {
    id: 'intangible-culture',
    name: '非遗传承',
    icon: '🎭',
    count: 2
  },
  {
    id: 'historic-sites',
    name: '名胜古迹',
    icon: '🏛️',
    count: 2
  }
]);

// 当前选中的分类
const currentCategory = ref('river-culture');

// 文章数据
const articleList = ref({
  'river-culture': [
    {
      id: '1',
      day: '30',
      month: '12月',
      year: '2025',
      title: '黄河文化在聊城的传承与发展',
      tag: '两河文化',
      desc: '聊城地处黄河下游冲积平原，黄河文化在这里留下了深刻的印记。从古代治黄工程到现代黄河治理，从黄河农耕文明到沿黄民俗文化，黄河文化在聊城得到了很好的传承和发展。',
      time: '2025-12-30',
      views: '356',
      link: '/culture/detail-2024101501.html'
    },
    {
      id: '2',
      day: '30',
      month: '12月',
      year: '2025',
      title: '运河古商埠：聊城的商业文化记忆',
      tag: '两河文化',
      desc: '明清时期，随着大运河漕运的兴盛，聊城成为重要的运河商埠。山陕会馆、聊城古城、运河码头等见证了当年商业的繁荣，形成了独特的商业文化和会馆文化。',
      time: '2025-12-30',
      views: '287',
      link: '/culture/detail-2024100801.html'
    }
  ],
  'intangible-culture': [
    {
      id: '3',
      day: '25',
      month: '12月',
      year: '2025',
      title: '东阿阿胶制作技艺的保护与传承',
      tag: '非遗传承',
      desc: '东阿阿胶制作技艺是国家级非物质文化遗产。这项技艺始于秦汉，盛于唐宋，已有两千多年的历史。从选材到制作，每个环节都体现了传统中医药的智慧和匠心精神。',
      time: '2025-12-25',
      views: '398',
      link: '/culture/detail-2024101801.html'
    },
    {
      id: '4',
      day: '25',
      month: '12月',
      year: '2025',
      title: '聊城木版年画的传承与创新',
      tag: '非遗传承',
      desc: '聊城木版年画是中国传统木版年画的重要流派之一，以构图饱满、色彩鲜艳、题材丰富著称。近年来，在保持传统特色的基础上，不断进行创新，赋予了新的时代内涵。',
      time: '2025-12-25',
      views: '287',
      link: '/culture/detail-2024101201.html'
    }
  ],
  'historic-sites': [
    {
      id: '5',
      day: '22',
      month: '12月',
      year: '2025',
      title: '光岳楼：江北第一名楼的历史与文化',
      tag: '名胜古迹',
      desc: '光岳楼建于明洪武七年（1374年），是中国现存最古老、最大的木质结构楼阁之一。楼高33米，为四重檐十字脊楼阁式建筑，造型雄伟，工艺精湛，有"虽黄鹤、岳阳亦当望拜"之誉。',
      time: '2025-12-22',
      views: '456',
      link: '/culture/detail-2024102201.html'
    },
    {
      id: '6',
      day: '16',
      month: '12月',
      year: '2025',
      title: '山陕会馆：运河商帮文化的见证',
      tag: '名胜古迹',
      desc: '山陕会馆建于清乾隆八年（1743年），是山西、陕西商人为"祀神明而联桑梓"集资兴建。整个建筑群气势恢宏，雕刻精美，是清代会馆建筑的典范，也是运河商帮文化的重要见证。',
      time: '2025-12-16',
      views: '324',
      link: '/culture/detail-2024101601.html'
    }
  ]
});

// 切换分类
const switchCategory = (categoryId: string) => {
  currentCategory.value = categoryId;
};

// 获取当前分类的文章
const currentArticles = () => {
  return articleList.value[currentCategory.value as keyof typeof articleList.value] || [];
};

// 获取当前分类的信息
const currentCategoryInfo = () => {
  return categories.value.find(cat => cat.id === currentCategory.value);
};
</script>

<template>
  <div class="culture-list-page">
    <!-- 主要内容区域 -->
    <main class="main-content list-page">
      <div class="container">
        <div class="content-grid">
          <!-- 左侧内容 - 文章列表 -->
          <div class="content-left">
            <div class="articles-list">
              <div class="list-header">
                <h3 class="list-title">{{ currentCategoryInfo()?.name }}</h3>
                <div class="list-count">共 {{ currentCategoryInfo()?.count }} 篇文章</div>
              </div>

              <div class="article-category active">
                <div v-for="(item, index) in currentArticles()" :key="index" class="article-item">
                  <div class="article-date">
                    <span class="day">{{ item.day }}</span>
                    <span class="month">{{ item.month }}</span>
                    <span class="year">{{ item.year }}</span>
                  </div>
                  <div class="article-content">
                    <h3 class="article-title">
                      <a :href="item.link">{{ item.title }}</a>
                      <span class="article-tag">{{ item.tag }}</span>
                    </h3>
                    <p class="article-desc">
                      {{ item.desc }}</p>
                    <div class="article-meta">
                      <span class="meta-item">发布时间：{{ item.time }}</span>
                      <span class="meta-item">阅读：{{ item.views }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 分页导航 -->
              <div class="pagination">
                <a href="#" class="page-link active">1</a>
              </div>
            </div>
          </div>

          <!-- 右侧内容 - 分栏目导航 -->
          <div class="content-right">
            <!-- 分栏目切换 -->
            <section class="category-nav-section">
              <div class="section-header">
                <h3 class="section-title">地方撷英</h3>
              </div>
              <div class="category-nav">
                <button 
                  v-for="category in categories" 
                  :key="category.id"
                  class="category-btn"
                  :class="{ active: category.id === currentCategory }"
                  @click="switchCategory(category.id)"
                >
                  <div class="category-icon">{{ category.icon }}</div>
                  <div class="category-content">
                    <h4 class="category-title">{{ category.name }}</h4>
                  </div>
                </button>
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

// 地方撷英页面样式
.culture-list-page {
  background-color: #f5f5f5;
}
</style>