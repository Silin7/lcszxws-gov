<script setup lang="ts">
import { ref } from "vue";

const articleData = ref({
  title: "市政协召开文史资料征集工作座谈会",
  publishTime: "2023-10-15 09:30",
  source: "文史馆办公室",
  author: "张伟",
  views: "425",
  summary: "10月15日，市政协文史馆组织召开文史资料征集工作座谈会，邀请各界专家学者就如何进一步做好我市文史资料征集工作进行深入交流。与会专家围绕征集范围、方法创新、数字化保存等议题展开热烈讨论。",
  content: [
    {
      type: "paragraph",
      text: "10月15日上午，聊城市政协文史馆在馆内会议室召开了文史资料征集工作座谈会。市政协副主席李建国出席会议并讲话，市政协文化文史和学习委员会主任王志强主持会议。"
    },
    {
      type: "paragraph",
      text: "会议邀请了来自山东大学、聊城大学、聊城师范学院的专家学者，以及市档案馆、地方志办公室、博物馆等单位的相关负责人，各县区政协文史委主任，部分老政协委员和文史爱好者代表，共计40余人参加座谈。"
    },
    {
      type: "heading",
      text: "会议主要内容"
    },
    {
      type: "paragraph",
      text: "座谈会上，市政协文史馆馆长刘明首先介绍了近年来文史资料征集工作的基本情况。他指出，自文史馆成立以来，通过广泛征集、重点约稿、专题调研等方式，已累计征集各类文史资料5000余件，为政协文史研究提供了丰富素材。"
    },
    {
      type: "paragraph",
      text: "与会专家围绕以下议题进行了深入研讨："
    },
    {
      type: "list",
      listType: "ol",
      items: [
        "<strong>征集范围的拓展：</strong>专家建议在继续做好近现代史资料征集的同时，适当向当代史资料延伸，特别是改革开放以来的重大事件、重要人物资料。",
        "<strong>征集方法的创新：</strong>提出采用\"互联网+征集\"模式，通过网站、微信公众号等平台拓宽征集渠道，提高征集效率。",
        "<strong>数字化保存与利用：</strong>建议加强文史资料的数字化处理，建立数据库，便于检索和共享，同时做好原件保护工作。",
        "<strong>专题征集规划：</strong>与会者建议围绕\"运河文化\"、\"红色历史\"、\"工业遗产\"、\"非遗传承\"等专题开展系统征集。"
      ]
    },
    {
      type: "heading",
      text: "领导讲话精神"
    },
    {
      type: "paragraph",
      text: "市政协副主席李建国在总结讲话中指出，文史资料工作是人民政协的一项重要工作，具有\"存史、资政、团结、育人\"的重要作用。做好新时期文史资料工作，要把握好以下几个方面："
    },
    {
      type: "list",
      listType: "ul",
      items: [
        "坚持正确的政治方向，确保文史资料的真实性、准确性；",
        "突出政协特色，重点征集统一战线和人民政协方面的史料；",
        "注重抢救性征集，特别是对年事已高的政协委员、民主人士、各界代表人士的口述史料；",
        "加强协作配合，形成政协组织、专家学者、社会力量共同参与的征集工作格局；",
        "推动成果转化，让征集到的文史资料更好地服务于经济社会发展。"
      ]
    },
    {
      type: "heading",
      text: "下一步工作安排"
    },
    {
      type: "paragraph",
      text: "会议决定，下一步文史馆将重点做好以下工作："
    },
    {
      type: "paragraph",
      text: "一是制定《聊城市政协文史资料征集工作三年规划》，明确征集重点和工作目标；"
    },
    {
      type: "paragraph",
      text: "二是建立\"聊城政协文史资料征集专家库\"，聘请30名左右专家学者担任特约征集员；"
    },
    {
      type: "paragraph",
      text: "三是开通\"线上征集平台\"，方便社会各界提交文史资料；"
    },
    {
      type: "paragraph",
      text: "四是启动\"百名老政协委员口述史\"专项征集工作，用两年时间完成对百名老政协委员的访谈。"
    },
    {
      type: "paragraph",
      text: "座谈会气氛热烈，与会者畅所欲言，提出了许多宝贵意见和建议。大家一致表示，将积极参与政协文史资料征集工作，共同为传承聊城历史文脉、服务文化强市建设贡献力量。"
    }
  ],
  attachments: [
    {
      name: "《文史资料征集工作三年规划（征求意见稿）》",
      link: "#"
    },
    {
      name: "《老政协委员口述史征集方案》",
      link: "#"
    }
  ],
  tags: ["文史资料", "征集工作", "座谈会", "政协工作"],
  prevArticle: {
    title: "聊城政协历程展厅正式对外开放",
    link: "#"
  },
  nextArticle: {
    title: "市政协开展运河文化专题调研",
    link: "#"
  },
  latestNews: [
    {
      date: "10-15",
      title: "市政协召开文史资料征集工作座谈会",
      link: "#"
    },
    {
      date: "10-08",
      title: "聊城政协历程展厅正式对外开放",
      link: "#"
    },
    {
      date: "09-28",
      title: "市政协开展运河文化专题调研",
      link: "#"
    }
  ],
  relatedBooks: [
    {
      name: "《聊城通史》",
      author: "主编：王立新",
      color: "#9e2a2a",
      link: "#"
    },
    {
      name: "《运河文化研究》",
      author: "编著：李明华",
      color: "#a64d4d",
      link: "#"
    },
    {
      name: "《聊城非遗图录》",
      author: "编委会",
      color: "#b35959",
      link: "#"
    }
  ],
  relatedArticles: [
    {
      badge: "新闻",
      title: "文史馆新增一批珍贵文献资料",
      link: "#"
    },
    {
      badge: "通知",
      title: "关于征集政协文史研究课题的公告",
      link: "#"
    },
    {
      badge: "新闻",
      title: "举办\"古城记忆\"老照片展",
      link: "#"
    }
  ]
});
</script>

<template>
  <div class="news-detail-page">
    <section class="page-header">
      <div class="container">
        <div class="breadcrumb">
          <a href="index.html">首页</a> &gt;
          <a href="news-list.html">新闻动态</a> &gt;
          <span>文章详情</span>
        </div>
      </div>
    </section>

    <main class="main-content detail-page">
      <div class="container">
        <div class="content-grid">
          <div class="content-left">
            <article class="article-detail">
              <header class="article-header">
                <h1 class="article-title">{{ articleData.title }}</h1>
                <div class="article-meta">
                  <span class="meta-item">发布时间：{{ articleData.publishTime }}</span>
                  <span class="meta-item">来源：{{ articleData.source }}</span>
                  <span class="meta-item">作者：{{ articleData.author }}</span>
                  <span class="meta-item">阅读次数：{{ articleData.views }}</span>
                </div>
              </header>

              <div class="article-content">
                <div class="article-summary">
                  <p><strong>摘要：</strong>{{ articleData.summary }}</p>
                </div>

                <div class="article-body">
                  <template v-for="(block, index) in articleData.content" :key="index">
                    <p v-if="block.type === 'paragraph'" v-html="block.text"></p>
                    <h3 v-else-if="block.type === 'heading'">
                      {{ block.text }}
                    </h3>
                    <ol v-else-if="
                      block.type === 'list' && block.listType === 'ol'
                    ">
                      <li v-for="(item, idx) in block.items" :key="idx" v-html="item"></li>
                    </ol>
                    <ul v-else-if="
                      block.type === 'list' && block.listType === 'ul'
                    ">
                      <li v-for="(item, idx) in block.items" :key="idx">
                        {{ item }}
                      </li>
                    </ul>
                  </template>
                </div>

                <div class="article-attachments" v-if="articleData.attachments.length > 0">
                  <h4>相关附件：</h4>
                  <ul>
                    <li v-for="(attachment, index) in articleData.attachments" :key="index">
                      <a :href="attachment.link">{{ attachment.name }}</a>
                    </li>
                  </ul>
                </div>

                <div class="article-tags">
                  <span class="tag-label">标签：</span>
                  <a v-for="(tag, index) in articleData.tags" :key="index" href="#" class="tag">
                    {{ tag }}
                  </a>
                </div>
              </div>

              <footer class="article-footer">
                <div class="article-nav">
                  <a :href="articleData.prevArticle.link" class="prev-article">
                    上一篇：{{ articleData.prevArticle.title }}
                  </a>
                  <a :href="articleData.nextArticle.link" class="next-article">
                    下一篇：{{ articleData.nextArticle.title }}
                  </a>
                </div>
              </footer>
            </article>
          </div>

          <div class="content-right">
            <section class="sidebar-section">
              <div class="section-header">
                <h3 class="section-title">最新动态</h3>
              </div>
              <ul class="sidebar-list">
                <li v-for="(news, index) in articleData.latestNews" :key="index" class="sidebar-item">
                  <span class="sidebar-date">{{ news.date }}</span>
                  <a :href="news.link" class="sidebar-title">{{
                    news.title
                  }}</a>
                </li>
              </ul>
            </section>

            <section class="sidebar-section">
              <div class="section-header">
                <h3 class="section-title">文史典籍</h3>
              </div>
              <div class="sidebar-books">
                <div v-for="(book, index) in articleData.relatedBooks" :key="index" class="sidebar-book">
                  <div class="book-cover-mini" :style="{ backgroundColor: book.color }">
                    <div class="book-title-mini">{{ book.name }}</div>
                  </div>
                  <div class="book-info-mini">
                    <h4 class="book-title-mini">{{ book.name }}</h4>
                    <p class="book-author">{{ book.author }}</p>
                    <a :href="book.link" class="book-link">在线阅读</a>
                  </div>
                </div>
              </div>
            </section>

            <section class="sidebar-section">
              <div class="section-header">
                <h3 class="section-title">相关文章</h3>
              </div>
              <ul class="sidebar-list">
                <li v-for="(article, index) in articleData.relatedArticles" :key="index" class="sidebar-item">
                  <span class="sidebar-badge">{{ article.badge }}</span>
                  <a :href="article.link" class="sidebar-title">{{
                    article.title
                  }}</a>
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
@import "/public/css/news.css";

.news-detail-page {
  background-color: #f5f5f5;
}
</style>
