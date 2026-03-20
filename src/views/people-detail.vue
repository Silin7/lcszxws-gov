<script setup lang="ts">
import { ref } from "vue";

const peopleData = ref({
  name: "张怀德",
  category: "政协人物",
  title: "聊城市政协第五届主席",
  lifespan: "1935 年 -2018 年",
  age: "享年 83 岁",
  keywords: ["文史工作", "政协建设", "文化保护", "地方志"],
  avatarGradient: "linear-gradient(135deg, #8B1A1A 0%, #c00 100%)",
  avatarText: "张",
  biography: [
    "张怀德（1935 年 -2018 年），山东省聊城市东昌府区人，中国共产党党员。1953 年参加工作，历任聊城地委办公室秘书、副主任，中共聊城地委宣传部副部长，聊城地区文化局局长等职。",
    "1988 年至 1998 年任聊城市政协第五届主席。在任期间，他高度重视政协文史工作，推动建立了聊城政协文史馆，组织编纂了《聊城政协志》，为我市政协文史工作奠定了坚实基础。",
    "张怀德同志一生致力于聊城文化事业发展和政协工作创新，积极推动地方文化保护工作，主持多项文史研究项目，为聊城历史文化传承作出了重要贡献。"
  ],
  contributions: [
    {
      icon: "🏛️",
      title: "推动文史馆建设",
      content: "主持筹建聊城政协文史馆，为政协文史资料收集、整理、研究和展示提供了重要平台。"
    },
    {
      icon: "📚",
      title: "组织编纂政协志",
      content: "主持编纂《聊城政协志》，系统记录聊城政协的历史发展历程，填补了相关领域的空白。"
    },
    {
      icon: "🤝",
      title: "加强文史研究",
      content: "推动建立政协文史研究机制，组织专家学者开展地方历史文化研究，取得丰硕成果。"
    },
    {
      icon: "💡",
      title: "创新政协工作",
      content: "探索新时期政协工作新思路、新方法，推动政协工作规范化、制度化建设。"
    }
  ],
  works: [
    {
      title: "《聊城政协志》",
      role: "主编",
      year: "1996 年出版",
      desc: "系统记述聊城政协自成立以来的发展历程和主要工作。",
      gradient: "linear-gradient(135deg, #8B1A1A 0%, #c00 100%)"
    },
    {
      title: "《聊城文史论丛》",
      role: "主编",
      year: "1998 年出版",
      desc: "收录聊城文史研究论文 50 余篇，涵盖历史、文化、民俗等多个领域。",
      gradient: "linear-gradient(135deg, #A52A2A 0%, #d33 100%)"
    }
  ],
  evaluations: [
    {
      quote: "\"张怀德同志是聊城政协文史工作的奠基人，他的远见卓识和执着精神，为聊城历史文化保护留下了宝贵财富。\"",
      cite: "——王建国（文史专家）"
    },
    {
      quote: "\"在张主席的领导下，聊城政协文史工作从无到有，从小到大，形成了完整的工作体系和丰富的研究成果。\"",
      cite: "——李明华（原政协秘书长）"
    },
    {
      quote: "\"张怀德同志严谨治学、求真务实的工作作风，深深影响了我们这一代文史工作者。\"",
      cite: "——刘志强（文史研究员）"
    }
  ],
  artifacts: [
    {
      title: "《文史馆筹建方案》手稿",
      desc: "1985 年手写稿，现藏于聊城政协文史馆",
      type: "手稿",
      gradient: "linear-gradient(135deg, #8B1A1A 0%, #c00 100%)"
    },
    {
      title: "工作照一组",
      desc: "1990 年代工作照片，共 12 张",
      type: "照片",
      gradient: "linear-gradient(135deg, #A52A2A 0%, #d33 100%)"
    },
    {
      title: "与专家学者往来信件",
      desc: "共 38 封，时间跨度 1988-1998 年",
      type: "信件",
      gradient: "linear-gradient(135deg, #B22222 0%, #e44 100%)"
    }
  ],
  prevArticle: {
    title: "王建国 - 文史专家",
    link: "#"
  },
  nextArticle: {
    title: "李秀英 - 捐赠代表",
    link: "#"
  },
  relatedPeople: [
    {
      name: "王建国",
      title: "文史专家",
      avatarText: "王",
      gradient: "linear-gradient(135deg, #A52A2A 0%, #d33 100%)",
      link: "people-detail-wangjianguo.html"
    },
    {
      name: "李秀英",
      title: "捐赠代表",
      avatarText: "李",
      gradient: "linear-gradient(135deg, #B22222 0%, #e44 100%)",
      link: "people-detail-lixiuying.html"
    },
    {
      name: "赵明诚",
      title: "第二届政协副主席",
      avatarText: "赵",
      gradient: "linear-gradient(135deg, #0066cc 0%, #3399ff 100%)",
      link: "people-detail-zhaomingcheng.html"
    }
  ]
});
</script>

<template>
  <div class="people-detail-page">
    <section class="page-header">
      <div class="container">
        <div class="breadcrumb">
          <a href="/index.html">首页</a> &gt;
          <a href="/people-list.html">人物春秋</a> &gt;
          <span>人物详情</span>
        </div>
      </div>
    </section>

    <main class="main-content people-detail-page">
      <div class="container">
        <div class="content-grid">
          <div class="content-left">
            <article class="people-detail">
              <div class="people-header">
                <div class="people-avatar-large">
                  <div class="avatar-image-large" :style="{ background: peopleData.avatarGradient }">
                    <span class="avatar-text-large">{{ peopleData.avatarText }}</span>
                  </div>
                </div>
                <div class="people-basic-info">
                  <div class="people-title-row">
                    <h1 class="people-name">{{ peopleData.name }}</h1>
                    <span class="people-category-tag">{{ peopleData.category }}</span>
                  </div>
                  <p class="people-title">{{ peopleData.title }}</p>
                  <div class="people-lifespan">
                    <span class="birth">{{ peopleData.lifespan }}</span>
                    <span class="age">{{ peopleData.age }}</span>
                  </div>
                  <div class="people-keywords">
                    <span
                      v-for="(keyword, index) in peopleData.keywords"
                      :key="index"
                      class="keyword"
                    >
                      {{ keyword }}
                    </span>
                  </div>
                </div>
              </div>

              <div class="people-section">
                <h3 class="section-title">人物生平</h3>
                <div class="section-content">
                  <p v-for="(para, index) in peopleData.biography" :key="index">{{ para }}</p>
                </div>
              </div>

              <div class="people-section">
                <h3 class="section-title">主要贡献</h3>
                <div class="section-content">
                  <div class="contributions-grid">
                    <div
                      v-for="(item, index) in peopleData.contributions"
                      :key="index"
                      class="contribution-item"
                    >
                      <div class="contribution-icon">{{ item.icon }}</div>
                      <div class="contribution-content">
                        <h4>{{ item.title }}</h4>
                        <p>{{ item.content }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="people-section">
                <h3 class="section-title">著作成果</h3>
                <div class="section-content">
                  <div class="works-list">
                    <div
                      v-for="(work, index) in peopleData.works"
                      :key="index"
                      class="work-item"
                    >
                      <div class="work-cover" :style="{ background: work.gradient }">
                        <div class="work-title">{{ work.title }}</div>
                      </div>
                      <div class="work-info">
                        <h4>{{ work.title }}</h4>
                        <p class="work-meta">{{ work.role }} | {{ work.year }}</p>
                        <p class="work-desc">{{ work.desc }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="people-section">
                <h3 class="section-title">社会评价</h3>
                <div class="section-content">
                  <div class="evaluation-quotes">
                    <blockquote
                      v-for="(review, index) in peopleData.evaluations"
                      :key="index"
                      class="quote-item"
                    >
                      <p>{{ review.quote }}</p>
                      <cite>{{ review.cite }}</cite>
                    </blockquote>
                  </div>
                </div>
              </div>

              <div class="people-section">
                <h3 class="section-title">相关文物</h3>
                <div class="section-content">
                  <div class="artifacts-grid">
                    <div
                      v-for="(artifact, index) in peopleData.artifacts"
                      :key="index"
                      class="artifact-item"
                    >
                      <div class="artifact-image" :style="{ background: artifact.gradient }">
                        <div class="artifact-text">{{ artifact.type }}</div>
                      </div>
                      <div class="artifact-info">
                        <h4>{{ artifact.title }}</h4>
                        <p>{{ artifact.desc }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <footer class="article-footer">
                <div class="article-nav">
                  <a :href="peopleData.prevArticle.link" class="prev-article">
                    上一篇：{{ peopleData.prevArticle.title }}
                  </a>
                  <a :href="peopleData.nextArticle.link" class="next-article">
                    下一篇：{{ peopleData.nextArticle.title }}
                  </a>
                </div>
              </footer>
            </article>
          </div>

          <div class="content-right">
            <section class="sidebar-section">
              <div class="section-header">
                <h3 class="section-title">相关人物</h3>
              </div>
              <div class="related-people">
                <div
                  v-for="(person, index) in peopleData.relatedPeople"
                  :key="index"
                  class="related-person"
                >
                  <div class="related-avatar" :style="{ background: person.gradient }">
                    <span class="related-avatar-text">{{ person.avatarText }}</span>
                  </div>
                  <div class="related-info">
                    <h4 class="related-name">{{ person.name }}</h4>
                    <p class="related-title">{{ person.title }}</p>
                    <a :href="person.link" class="related-link">查看详情</a>
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
@import "/public/css/people.css";
@import "/public/css/news.css";

.people-detail-page {
  background-color: #f5f5f5;
}
</style>
