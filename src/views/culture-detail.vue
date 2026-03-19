ss<script setup lang="ts">
import { ref } from 'vue';

// 文章数据
const article = ref({
  title: '大运河聊城段的历史变迁与文化价值',
  time: '2023-10-20',
  summary: '大运河聊城段是中国大运河的重要组成部分，全长97.5公里。自元代开凿以来，在促进南北经济文化交流、推动沿线城市发展方面发挥了重要作用。聊城因运河而兴，形成了独特的运河文化，对聊城的历史发展和社会变迁产生了深远影响。',
  content: {
    sections: [
      {
        title: '一、历史沿革',
        subsections: [
          {
            title: '1. 元代开凿时期',
            content: '大运河聊城段开凿于元代至元二十六年（1289年），当时称为"会通河"。元世祖忽必烈为加强南北联系，解决漕运问题，下令开凿从东平到临清的运河段，全长250余里，其中经过聊城境内约50里。',
            list: [
              '连接了隋唐大运河与京杭大运河',
              '缩短了南北漕运距离',
              '促进了聊城地区的经济发展',
              '为明清时期运河的繁荣奠定了基础'
            ]
          },
          {
            title: '2. 明清繁荣时期',
            content: '明清时期是大运河聊城段的鼎盛时期。明代永乐年间，对会通河进行了大规模疏浚和整治，使其成为京杭大运河的重要航段。聊城因此成为重要的运河码头和商业城市。',
            quote: {
              text: '漕船北上，必由聊城过闸。商贾云集，百货骈阗，有\'江北一都会\'之称。',
              source: '——《聊城县志》光绪版'
            },
            list: [
              '<strong>漕运兴盛：</strong>每年有数千艘漕船通过聊城段',
              '<strong>商业繁荣：</strong>形成了多个商业码头和集散市场',
              '<strong>文化交融：</strong>南北文化在聊城交汇融合',
              '<strong>城市建设：</strong>促进了聊城古城的建设和发展'
            ],
            listType: 'ol'
          },
          {
            title: '3. 近代变迁',
            content: '清末至民国时期，随着漕运制度的废除和铁路、公路交通的发展，大运河聊城段的航运功能逐渐衰退。但运河文化的影响依然深远，运河沿岸的城镇和乡村仍然保持着传统的生活方式和文化习俗。'
          }
        ]
      },
      {
        title: '二、文化价值',
        valueGrid: [
          {
            icon: '🏛️',
            title: '建筑文化价值',
            content: '运河沿岸保存了大量历史建筑，如山陕会馆、大小码头、古闸遗址等，这些建筑体现了明清时期的建筑艺术和工程技术水平。'
          },
          {
            icon: '🎭',
            title: '民俗文化价值',
            content: '运河文化深刻影响了聊城的民俗风情，形成了独特的运河民俗，包括饮食习俗、节庆活动、民间信仰等。'
          },
          {
            icon: '📚',
            title: '文学艺术价值',
            content: '大运河成为文学艺术创作的重要题材，许多诗词、戏曲、小说都以运河为背景，反映了运河文化的丰富内涵。'
          },
          {
            icon: '🤝',
            title: '商业文化价值',
            content: '运河促进了商业发展，形成了独特的商业文化和会馆文化，体现了古代商帮的经营理念和商业精神。'
          }
        ]
      },
      {
        title: '三、主要遗址',
        content: '聊城境内保存有丰富的运河遗址，主要包括：',
        table: {
          headers: ['遗址名称', '位置', '时代', '保护级别'],
          rows: [
            ['山陕会馆', '聊城古城东', '清代', '全国重点文物保护单位'],
            ['大小码头遗址', '运河沿岸', '明清', '省级文物保护单位'],
            ['周店船闸', '阳谷县', '元代', '省级文物保护单位'],
            ['七级码头', '临清市', '明清', '市级文物保护单位']
          ]
        }
      },
      {
        title: '四、保护与利用',
        content: '近年来，聊城市高度重视大运河文化遗产的保护与利用工作：',
        subsections: [
          {
            title: '1. 保护措施',
            list: [
              '制定大运河聊城段保护规划',
              '实施遗址保护工程',
              '建立数字化档案',
              '加强环境整治'
            ]
          },
          {
            title: '2. 利用方向',
            list: [
              '发展文化旅游产业',
              '建设运河文化景观带',
              '开展运河文化研究',
              '举办运河文化节庆活动'
            ]
          },
          {
            title: '3. 未来展望',
            content: '随着大运河文化带建设的深入推进，聊城段运河将迎来新的发展机遇。未来将重点做好以下几个方面的工作：',
            plan: [
              {
                number: '01',
                title: '遗产保护',
                content: '加强文物本体保护和周边环境整治'
              },
              {
                number: '02',
                title: '文化传承',
                content: '挖掘运河文化内涵，传承运河精神'
              },
              {
                number: '03',
                title: '旅游开发',
                content: '打造运河文化旅游精品线路'
              },
              {
                number: '04',
                title: '生态建设',
                content: '建设运河生态廊道，改善生态环境'
              }
            ]
          }
        ]
      },
      {
        title: '五、结语',
        content: '大运河聊城段是聊城历史文化的重要载体，见证了聊城的发展变迁，承载着聊城人民的集体记忆。保护好、传承好、利用好大运河文化遗产，对于延续历史文脉、建设文化强市、推动高质量发展具有重要意义。在新的历史条件下，我们要深入挖掘大运河文化内涵，讲好运河故事，让古老的运河焕发新的生机与活力，为聊城经济社会发展注入文化动力。'
      }
    ]
  },
  resources: [
    {
      icon: '📷',
      text: '运河历史照片图集',
      link: '#'
    },
    {
      icon: '🎥',
      text: '运河文化纪录片',
      link: '#'
    },
    {
      icon: '🗺️',
      text: '运河遗址分布图',
      link: '#'
    },
    {
      icon: '📖',
      text: '运河研究文献',
      link: '#'
    }
  ],
  tags: ['大运河', '聊城', '文化遗产', '历史变迁', '文化价值'],
  prevArticle: {
    title: '黄河文化在聊城的传承与发展',
    link: '#'
  },
  nextArticle: {
    title: '运河古商埠：聊城的商业文化记忆',
    link: '#'
  }
});

// 相关文章
const relatedArticles = ref([
  {
    tag: '两河文化',
    title: '运河古商埠：聊城的商业文化记忆',
    link: '#'
  },
  {
    tag: '两河文化',
    title: '两河交汇处的聊城古城格局研究',
    link: '#'
  },
  {
    tag: '两河文化',
    title: '漕运文化对聊城民俗的影响',
    link: '#'
  }
]);
</script>

<template>
  <div class="culture-detail-page">
    <!-- 页面标题 -->
    <section class="page-header">
      <div class="container">
        <div class="breadcrumb">
          <a href="/index.html">首页</a> &gt;
          <a href="/culture-list.html">地方撷英</a> &gt;
          <span>文章详情</span>
        </div>
      </div>
    </section>

    <!-- 主要内容区域 -->
    <main class="main-content detail-page">
      <div class="container">
        <div class="content-grid">
          <!-- 左侧内容 - 文章详情 -->
          <div class="content-left">
            <article class="article-detail">
              <header class="article-header">
                <h1 class="article-title">{{ article.title }}</h1>
                <div class="article-meta">
                  <span class="meta-item">发布时间：{{ article.time }}</span>
                </div>
              </header>

              <div class="article-content">
                <div class="article-summary">
                  <p><strong>摘要：</strong>{{ article.summary }}</p>
                </div>

                <div class="article-body">
                  <div class="culture-image-large"
                    style="background: linear-gradient(135deg, #2a6e8b 0%, #4a9ccc 100%);">
                    <div class="image-caption">大运河聊城段今貌</div>
                  </div>

                  <div v-for="(section, sectionIndex) in article.content.sections" :key="sectionIndex">
                    <h3>{{ section.title }}</h3>

                    <p v-if="section.content">{{ section.content }}</p>

                    <div v-if="section.subsections" v-for="(subsection, subsectionIndex) in section.subsections"
                      :key="subsectionIndex">
                      <h4>{{ subsection.title }}</h4>
                      <p v-if="subsection.content">{{ subsection.content }}</p>

                      <div v-if="(subsection as any).quote" class="quote-box">
                        <p>{{ (subsection as any).quote.text }}</p>
                        <cite>{{ (subsection as any).quote.source }}</cite>
                      </div>

                      <ul v-if="subsection.list && (subsection as any).listType !== 'ol'">
                        <li v-for="(item, itemIndex) in subsection.list" :key="itemIndex" v-html="item"></li>
                      </ul>

                      <ol v-if="subsection.list && (subsection as any).listType === 'ol'">
                        <li v-for="(item, itemIndex) in subsection.list" :key="itemIndex" v-html="item"></li>
                      </ol>

                      <div v-if="(subsection as any).plan" class="future-plan">
                        <div v-for="(planItem, planIndex) in (subsection as any).plan" :key="planIndex"
                          class="plan-item">
                          <div class="plan-number">{{ planItem.number }}</div>
                          <div class="plan-content">
                            <h5>{{ planItem.title }}</h5>
                            <p>{{ planItem.content }}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div v-if="section.valueGrid" class="culture-value-grid">
                      <div v-for="(valueItem, valueIndex) in section.valueGrid" :key="valueIndex" class="value-item">
                        <div class="value-icon">{{ valueItem.icon }}</div>
                        <div class="value-content">
                          <h4>{{ valueItem.title }}</h4>
                          <p>{{ valueItem.content }}</p>
                        </div>
                      </div>
                    </div>

                    <table v-if="section.table" class="culture-table">
                      <thead>
                        <tr>
                          <th v-for="(header, headerIndex) in section.table.headers" :key="headerIndex">{{ header }}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(row, rowIndex) in section.table.rows" :key="rowIndex">
                          <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div class="article-resources">
                  <h4>相关资源：</h4>
                  <div class="resources-grid">
                    <a v-for="(resource, resourceIndex) in article.resources" :key="resourceIndex" :href="resource.link"
                      class="resource-link">
                      <span class="resource-icon">{{ resource.icon }}</span>
                      <span class="resource-text">{{ resource.text }}</span>
                    </a>
                  </div>
                </div>

                <div class="article-tags">
                  <span class="tag-label">标签：</span>
                  <a v-for="(tag, tagIndex) in article.tags" :key="tagIndex" href="#" class="tag">{{ tag }}</a>
                </div>
              </div>

              <footer class="article-footer">
                <div class="article-nav">
                  <a :href="article.prevArticle.link" class="prev-article">上一篇：{{ article.prevArticle.title }}</a>
                  <a :href="article.nextArticle.link" class="next-article">下一篇：{{ article.nextArticle.title }}</a>
                </div>

                <div class="article-share">
                  <span class="share-label">分享到：</span>
                  <a href="#" class="share-btn wechat">微信</a>
                  <a href="#" class="share-btn weibo">微博</a>
                  <a href="#" class="share-btn qq">QQ</a>
                </div>
              </footer>
            </article>
          </div>

          <!-- 右侧内容 - 侧边栏 -->
          <div class="content-right">
            <!-- 分栏目导航 -->
            <section class="sidebar-section">
              <div class="section-header">
                <h3 class="section-title">地方文化</h3>
              </div>
              <div class="culture-nav">
              </div>
            </section>

            <!-- 相关文章 -->
            <section class="sidebar-section">
              <div class="section-header">
                <h3 class="section-title">相关文章</h3>
              </div>
              <ul class="sidebar-list">
                <li v-for="(item, index) in relatedArticles" :key="index" class="sidebar-item">
                  <span class="sidebar-tag">{{ item.tag }}</span>
                  <a :href="item.link" class="sidebar-title">{{ item.title }}</a>
                </li>
              </ul>
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
@import "/public/css/news.css";

// 文化详情页面样式
.culture-detail-page {
  background-color: #f5f5f5;
  min-height: 100vh;
}

// 自定义样式
.culture-image-large {
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
  border-radius: 8px;
  overflow: hidden;
}

.image-caption {
  color: white;
  font-size: 18px;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.quote-box {
  background-color: #f5f5f5;
  border-left: 4px solid #2a6e8b;
  padding: 20px;
  margin: 20px 0;
  border-radius: 0 8px 8px 0;
}

.quote-box p {
  margin: 0 0 10px 0;
  font-style: italic;
  color: #333;
}

.quote-box cite {
  display: block;
  text-align: right;
  color: #666;
  font-size: 14px;
}

.culture-value-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 30px 0;
}

.value-item {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  gap: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.value-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.value-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.value-content h4 {
  margin: 0 0 10px 0;
  color: #2a6e8b;
  font-size: 16px;
  font-weight: 600;
}

.value-content p {
  margin: 0;
  color: #666;
  font-size: 14px;
  line-height: 1.5;
}

.culture-table {
  width: 100%;
  border-collapse: collapse;
  margin: 30px 0;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

.culture-table th,
.culture-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #eee;
}

.culture-table th {
  background-color: #2a6e8b;
  color: white;
  font-weight: 600;
}

.culture-table tr:hover {
  background-color: #f5f5f5;
}

.culture-table tr:last-child td {
  border-bottom: none;
}

.future-plan {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 30px 0;
}

.plan-item {
  background: white;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  gap: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.plan-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.plan-number {
  font-size: 24px;
  font-weight: 700;
  color: #2a6e8b;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f8ff;
  border-radius: 50%;
}

.plan-content h5 {
  margin: 0 0 10px 0;
  color: #333;
  font-size: 16px;
  font-weight: 600;
}

.plan-content p {
  margin: 0;
  color: #666;
  font-size: 14px;
  line-height: 1.5;
}

.article-resources {
  margin: 40px 0;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
}

.article-resources h4 {
  margin: 0 0 20px 0;
  color: #333;
  font-size: 16px;
  font-weight: 600;
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.resource-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  background: white;
  border-radius: 6px;
  text-decoration: none;
  color: #333;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.resource-link:hover {
  background-color: #f0f8ff;
  transform: translateY(-3px);
}

.resource-icon {
  font-size: 20px;
}

.resource-text {
  font-size: 14px;
}

.article-tags {
  margin: 30px 0;
  padding: 15px;
  background: #f9f9f9;
  border-radius: 8px;
}

.tag-label {
  font-weight: 600;
  color: #333;
  margin-right: 10px;
}

.tag {
  display: inline-block;
  padding: 4px 12px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 16px;
  text-decoration: none;
  color: #666;
  font-size: 14px;
  margin-right: 10px;
  margin-bottom: 10px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.tag:hover {
  background-color: #2a6e8b;
  color: white;
  border-color: #2a6e8b;
}

.article-footer {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.article-nav {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 10px;
}

.prev-article,
.next-article {
  text-decoration: none;
  color: #333;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: color 0.3s ease;
}

.prev-article:hover,
.next-article:hover {
  color: #2a6e8b;
}

.article-share {
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
}

.share-label {
  font-weight: 600;
  color: #333;
}

.share-btn {
  display: inline-block;
  padding: 6px 12px;
  background: #f0f0f0;
  border-radius: 4px;
  text-decoration: none;
  color: #333;
  font-size: 14px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.share-btn:hover {
  background-color: #2a6e8b;
  color: white;
}

.share-btn.wechat:hover {
  background-color: #07C160;
}

.share-btn.weibo:hover {
  background-color: #E6162D;
}

.share-btn.qq:hover {
  background-color: #12B7F5;
}

.sidebar-section {
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.section-header {
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 2px solid #2a6e8b;
}

.section-title {
  margin: 0;
  color: #2a6e8b;
  font-size: 16px;
  font-weight: 600;
}

.sidebar-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-item {
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.sidebar-item:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.sidebar-tag {
  display: inline-block;
  padding: 2px 8px;
  background: #2a6e8b;
  color: white;
  border-radius: 12px;
  font-size: 12px;
  margin-right: 10px;
}

.sidebar-title {
  text-decoration: none;
  color: #333;
  font-size: 14px;
  line-height: 1.4;
  transition: color 0.3s ease;
}

.sidebar-title:hover {
  color: #2a6e8b;
}

// 响应式设计
@media (max-width: 768px) {
  .content-grid {
    flex-direction: column;
  }

  .content-left,
  .content-right {
    width: 100%;
  }

  .content-right {
    margin-top: 30px;
  }

  .culture-value-grid,
  .future-plan,
  .resources-grid {
    grid-template-columns: 1fr;
  }

  .article-nav {
    flex-direction: column;
    align-items: flex-start;
  }

  .prev-article,
  .next-article {
    width: 100%;
  }
}
</style>