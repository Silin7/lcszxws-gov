<script setup lang="ts">
import { ref } from "vue";

const literatureData = ref({
  name: "《聊城通史》",
  category: "地方史志",
  author: "主编：王立新",
  publisher: "山东人民出版社",
  publishTime: "2010年",
  isbn: "978-7-209-05321-5",
  keywords: ["地方史", "通史", "聊城", "历史文化"],
  coverGradient: "linear-gradient(135deg, #8B1A1A 0%, #c00 100%)",
  description: `《聊城通史》是一部全面系统记述聊城从古至今发展历程的权威史著。全书共分五卷，200余万字，涵盖政治、经济、文化、社会等各个领域，是研究聊城历史文化的必备参考书。
  
该书以时间为经，以史实为纬，全面梳理了聊城地区从远古时期到21世纪初的历史发展脉络。编写团队历时八年，查阅了大量档案文献，进行了深入的田野调查，确保了史料的准确性和权威性。

《聊城通史》不仅填补了聊城地方史研究的空白，也为聊城历史文化保护、传承和创新提供了重要的学术支撑，具有很高的学术价值和社会价值。`,
  catalog: [
    {
      volume: "第一卷",
      title: "先秦至魏晋南北朝时期",
      chapters: [
        "第一章：远古时期的聊城",
        "第二章：夏商周时期的东夷文化",
        "第三章：春秋战国时期的聊城",
        "第四章：秦汉时期的郡县设置",
        "第五章：魏晋南北朝时期的变迁",
      ],
    },
    {
      volume: "第二卷",
      title: "隋唐至宋元时期",
      chapters: [
        "第六章：隋唐时期的聊城",
        "第七章：五代十国时期的变迁",
        "第八章：宋金时期的聊城",
        "第九章：元代的大运河与聊城",
      ],
    },
    {
      volume: "第三卷",
      title: "明清时期",
      chapters: [
        "第十章：明代的聊城",
        "第十一章：清代的聊城",
        "第十二章：运河文化的兴盛",
        "第十三章：海源阁与聊城文化",
      ],
    },
    {
      volume: "第四卷",
      title: "近代时期",
      chapters: [
        "第十四章：晚清时期的聊城",
        "第十五章：民国时期的聊城",
        "第十六章：抗日战争时期的聊城",
        "第十七章：解放战争时期的聊城",
      ],
    },
    {
      volume: "第五卷",
      title: "当代时期",
      chapters: [
        "第十八章：建国初期的聊城",
        "第十九章：改革开放时期的聊城",
        "第二十章：新世纪以来的聊城",
        "附录：大事年表、参考文献等",
      ],
    },
  ],
  academicValues: [
    {
      icon: "📚",
      title: "史料价值",
      content:
        "汇集了大量第一手史料，包括档案、碑刻、家谱、口述史等，为聊城历史研究提供了丰富的资料基础。",
    },
    {
      icon: "🔍",
      title: "研究价值",
      content:
        "运用新史料、新方法，对聊城历史上的重要问题进行了深入研究，提出了许多新的观点和见解。",
    },
    {
      icon: "🌐",
      title: "参考价值",
      content:
        "为地方文化建设、文化遗产保护、文化旅游发展等提供了重要的历史依据和学术参考。",
    },
    {
      icon: "🎓",
      title: "教育价值",
      content:
        "可作为大中专院校历史专业的教学参考书，也是进行爱国主义教育和乡土教育的重要读物。",
    },
  ],
  authorInfo: {
    name: "王立新",
    title: "聊城大学历史文化学院教授、博士生导师",
    avatarGradient: "linear-gradient(135deg, #A52A2A 0%, #d33 100%)",
    avatarText: "王",
    achievements: `主要从事中国近代史、地方史研究，发表学术论文60余篇，出版专著8部。

主持国家社科基金项目2项，省部级项目5项。曾获山东省社会科学优秀成果一等奖。

兼任山东省历史学会副会长、聊城市文史研究会会长等职。`,
  },
  reviews: [
    {
      quote:
        '"《聊城通史》是近年来地方史研究的重要成果，填补了聊城历史研究的空白，为地方文化建设作出了重要贡献。"',
      cite: "——李建国（山东大学历史系教授）",
    },
    {
      quote:
        '"这部通史史料翔实，观点新颖，结构合理，既具有学术价值，又通俗易懂，是了解聊城历史文化的最佳读物。"',
      cite: "——刘明华（聊城政协文史馆研究员）",
    },
    {
      quote:
        '"《聊城通史》的出版，标志着聊城地方史研究进入了一个新的阶段，对推动聊城文化事业发展具有重要意义。"',
      cite: "——张伟（山东省社科院历史所研究员）",
    },
  ],
  relatedBooks: [
    {
      name: "《运河文化研究》",
      author: "编著：李明华",
      gradient: "linear-gradient(135deg, #A52A2A 0%, #d33 100%)",
      coverText: "《运河文化研究》",
      link: "literature-detail-canal.html",
    },
    {
      name: "《聊城非遗图录》",
      author: "编委会",
      gradient: "linear-gradient(135deg, #B22222 0%, #e44 100%)",
      coverText: "《聊城非遗图录》",
      link: "literature-detail-intangible.html",
    },
    {
      name: "《政协史料选编》",
      author: "主编：张怀德",
      gradient: "linear-gradient(135deg, #2a6e8b 0%, #4a9ccc 100%)",
      coverText: "《政协史料选编》",
      link: "literature-detail-zhengxie.html",
    },
  ],
  prevArticle: {
    title: "《运河文化研究》",
    link: "#",
  },
  nextArticle: {
    title: "《聊城非遗图录》",
    link: "#",
  },
});
</script>

<template>
  <div class="literature-detail-page">
    <main class="main-content literature-detail-page">
      <div class="container">
        <div class="content-grid">
          <div class="content-left">
            <article class="literature-detail">
              <div class="literature-header">
                <div class="book-cover-large">
                  <div class="cover-image-large" :style="{ background: literatureData.coverGradient }">
                    <span class="cover-title-large">{{
                      literatureData.name
                      }}</span>
                  </div>
                </div>
                <div class="literature-basic-info">
                  <div class="literature-title-row">
                    <h1 class="literature-name">{{ literatureData.name }}</h1>
                    <span class="literature-category-tag">{{
                      literatureData.category
                      }}</span>
                  </div>
                  <p class="literature-author">{{ literatureData.author }}</p>
                  <div class="literature-meta">
                    <span class="meta-item">出版社：{{ literatureData.publisher }}</span>
                    <span class="meta-item">出版时间：{{ literatureData.publishTime }}</span>
                    <span class="meta-item">ISBN：{{ literatureData.isbn }}</span>
                  </div>
                  <div class="literature-keywords">
                    <span v-for="(keyword, index) in literatureData.keywords" :key="index" class="keyword">
                      {{ keyword }}
                    </span>
                  </div>
                </div>
              </div>

              <div class="literature-section">
                <h3 class="section-title">内容简介</h3>
                <div class="section-content">
                  <p v-for="(para, index) in literatureData.description.split(
                    '\n\n',
                  )" :key="index">
                    {{ para }}
                  </p>
                </div>
              </div>

              <div class="literature-section">
                <h3 class="section-title">目录结构</h3>
                <div class="section-content">
                  <div class="catalog-grid">
                    <div v-for="(item, index) in literatureData.catalog" :key="index" class="catalog-item">
                      <div class="catalog-volume">{{ item.volume }}</div>
                      <div class="catalog-content">
                        <h4>{{ item.title }}</h4>
                        <ul class="catalog-chapters">
                          <li v-for="(chapter, idx) in item.chapters" :key="idx">
                            {{ chapter }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="literature-section">
                <h3 class="section-title">学术价值</h3>
                <div class="section-content">
                  <div class="value-grid">
                    <div v-for="(item, index) in literatureData.academicValues" :key="index" class="value-item">
                      <div class="value-icon">{{ item.icon }}</div>
                      <div class="value-content">
                        <h4>{{ item.title }}</h4>
                        <p>{{ item.content }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="literature-section">
                <h3 class="section-title">作者简介</h3>
                <div class="section-content">
                  <div class="author-info">
                    <div class="author-avatar">
                      <div class="author-image" :style="{
                        background: literatureData.authorInfo.avatarGradient,
                      }">
                        <span class="author-text">{{
                          literatureData.authorInfo.avatarText
                          }}</span>
                      </div>
                    </div>
                    <div class="author-details">
                      <h4 class="author-name">
                        {{ literatureData.authorInfo.name }}
                      </h4>
                      <p class="author-title">
                        {{ literatureData.authorInfo.title }}
                      </p>
                      <div class="author-achievements">
                        <p v-for="(
para, index
                          ) in literatureData.authorInfo.achievements.split(
                              '\n\n',
                            )" :key="index">
                          {{ para }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="literature-section">
                <h3 class="section-title">书评</h3>
                <div class="section-content">
                  <div class="review-quotes">
                    <blockquote v-for="(review, index) in literatureData.reviews" :key="index" class="quote-item">
                      <p>{{ review.quote }}</p>
                      <cite>{{ review.cite }}</cite>
                    </blockquote>
                  </div>
                </div>
              </div>

              <footer class="article-footer">
                <div class="article-nav">
                  <a :href="literatureData.prevArticle.link" class="prev-article">
                    上一篇：{{ literatureData.prevArticle.title }}
                  </a>
                  <a :href="literatureData.nextArticle.link" class="next-article">
                    下一篇：{{ literatureData.nextArticle.title }}
                  </a>
                </div>
              </footer>
            </article>
          </div>

          <div class="content-right">
            <section class="sidebar-section">
              <div class="section-header">
                <h3 class="section-title">相关典籍</h3>
              </div>
              <div class="related-literature">
                <div v-for="(book, index) in literatureData.relatedBooks" :key="index" class="related-book">
                  <div class="related-cover" :style="{ background: book.gradient }">
                    <span class="related-cover-text">{{ book.coverText }}</span>
                  </div>
                  <div class="related-info">
                    <h4 class="related-name">{{ book.name }}</h4>
                    <p class="related-author">{{ book.author }}</p>
                    <a :href="book.link" class="related-link">查看详情</a>
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
@import "/public/css/literature.css";
@import "/public/css/news.css";

.literature-detail-page {
  background-color: #f5f5f5;
}
</style>
