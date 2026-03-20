<script setup lang="ts">
import { ref } from "vue";
import pageJump from "@/hooks/pageJump";

// 文章详情
const noticeData = ref({
  title: "关于征集聊城市政协文史资料的公告",
  publishTime: "2026-01-06",
  source: "聊城市政协文化文史和学习委员会",
  summary: "为丰富聊城市政协文史馆馆藏，更好地保存和利用政协文史资料，现面向社会各界征集与聊城政协工作相关的文史资料。征集内容包括：政协会议资料、委员提案、调研报告、历史照片、音像资料等。",
  content: [
    {
      type: "paragraph",
      text: "聊城市政协文史资料是人民政协工作的重要组成部分，是记录历史、传承文化、资政育人的重要载体。为丰富聊城市政协文史馆馆藏，更好地保存和利用政协文史资料，充分发挥文史资料\"存史、资政、团结、育人\"的社会功能，现面向社会各界公开征集聊城政协文史资料。具体事项公告如下："
    },
    {
      type: "heading",
      text: "一、征集范围"
    },
    {
      type: "paragraph",
      text: "凡反映聊城市政协自成立以来各个历史时期的文史资料均在征集之列，重点包括："
    },
    {
      type: "list",
      listType: "ol",
      items: [
        "<strong>会议资料类：</strong>政协全体会议、常委会议、主席会议等重要会议的议程、报告、决议、简报、代表名册等；",
        "<strong>提案资料类：</strong>具有重要历史价值或社会影响的委员提案、建议案及其办理情况等；",
        "<strong>调研视察类：</strong>政协组织开展的重要调研、视察活动形成的报告、建议等；",
        "<strong>委员履职类：</strong>政协委员的履职日记、工作笔记、回忆录、口述历史等；",
        "<strong>人物资料类：</strong>历届政协委员（特别是知名委员）的生平事迹、著作手稿、书信、照片、音像资料等；",
        "<strong>历史照片类：</strong>反映政协重要会议、重大活动、重要人物等的历史照片；",
        "<strong>音像资料类：</strong>政协重要会议、活动的录音、录像资料；",
        "<strong>实物资料类：</strong>与政协工作相关的具有历史价值的证件、徽章、奖状、纪念品等实物；",
        "<strong>其他资料类：</strong>其他具有历史价值的政协文史资料。"
      ]
    },
    {
      type: "heading",
      text: "二、征集要求"
    },
    {
      type: "list",
      listType: "ol",
      items: [
        "资料应具有真实性、准确性和完整性；",
        "资料内容应积极健康，符合社会主义核心价值观；",
        "照片、音像资料应附简要说明（时间、地点、人物、事件等）；",
        "实物资料应完好无损，具有较好的保存状态；",
        "资料提供者应保证对所提供资料拥有合法权利，无知识产权纠纷。"
      ]
    },
    {
      type: "heading",
      text: "三、征集方式"
    },
    {
      type: "list",
      listType: "ol",
      items: [
        "<strong>捐赠：</strong>欢迎社会各界人士无偿捐赠。对捐赠者颁发捐赠证书，并在展览时注明捐赠者信息；",
        "<strong>复制：</strong>对特别珍贵且本人欲自行保存的资料，可提供复制服务，复制后原件归还本人；",
        "<strong>口述历史：</strong>对年事已高的老政协委员、政协工作者，可安排专人进行口述历史访谈；",
        "<strong>征购：</strong>对具有重要历史价值的资料，可协商征购。"
      ]
    },
    {
      type: "heading",
      text: "四、征集时间"
    },
    {
      type: "paragraph",
      text: "本次征集活动长期有效。集中征集时间为：2026 年 1 月 6 日至 2026 年 6 月 30 日。"
    },
    {
      type: "heading",
      text: "五、联系方式"
    },
    {
      type: "paragraph",
      text: "联系单位：聊城市政协文化文史和学习委员会"
    },
    {
      type: "paragraph",
      text: "地  址：聊城市东昌府区东昌西路 127 号"
    },
    {
      type: "heading",
      text: "六、资料使用"
    },
    {
      type: "paragraph",
      text: "征集到的文史资料将主要用于："
    },
    {
      type: "list",
      listType: "ul",
      items: [
        "充实市政协文史馆馆藏；",
        "编辑出版政协文史资料专辑；",
        "举办专题展览；",
        "开展文史研究；",
        "进行爱国主义和革命传统教育。"
      ]
    },
    {
      type: "heading",
      text: "七、相关说明"
    },
    {
      type: "list",
      listType: "ol",
      items: [
        "凡提供的资料，经鉴定确有收藏价值的，将办理交接手续；",
        "提供者如对资料使用有特殊要求，可在提供时说明，我们将充分尊重提供者的意愿；",
        "欢迎社会各界人士提供征集线索；",
        "本公告最终解释权归聊城市政协文化文史和学习委员会所有。"
      ]
    },
    {
      type: "paragraph",
      text: "政协文史资料是历史的见证，是宝贵的文化遗产。我们诚挚希望社会各界人士、历届政协委员及其家属、政协工作者积极参与本次征集活动，共同为保存聊城政协历史记忆、传承政协优良传统贡献力量。"
    },
    {
      type: "paragraph",
      text: "<strong>聊城市政协文化文史和学习委员会</strong><br/><strong>2026 年 1 月 6 日</strong>"
    }
  ],
});

// 新闻动态
const latestNews = ref([
  {
    badge: "动态",
    title: "聊城市\"数字政协\"平台\"获评省信息技术应用创新\"典型应用案例\"",
    id: "20251231001"
  },
  {
    badge: "动态",
    title: "\"墨彩颂华诞·政协建新功\"——聊城市政协庆祝新中国和人民政协成立 75 周年书画作品展在孔繁森同志纪念馆开展",
    id: "20240905001"
  },
  {
    badge: "动态",
    title: "市政协召开文史资料工作座谈会",
    id: "20250925001"
  }
]);

// 文史典籍
const relatedBooks = ref([
  {
    name: "《聊城文化史》",
    author: "聊城市政协委员会编",
    cover: "/public/images/books/wenhuashi.jpg",
    id: "1"
  },
  {
    name: "《聊城重要历史人物》",
    author: "聊城市政协文史资料委员会",
    cover: "/public/images/books/lishirenwu.jpg",
    id: "3"
  },
  {
    name: "《聊城脱贫攻坚口述史》",
    author: "聊城市政协文化史和学习委员会",
    cover: "/public/images/books/tuopingongjian.jpg",
    id: "4"
  }
]);
</script>

<template>
  <div class="notice-detail-page">
    <section class="page-header">
      <div class="container">
        <div class="breadcrumb">
          <a @click.prevent="pageJump('home')">首页</a> &gt;
          <a @click.prevent="pageJump('notice-list')">通知公告</a> &gt;
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
                <h1 class="article-title">{{ noticeData.title }}</h1>
                <div class="article-meta">
                  <span class="meta-item">发布时间：{{ noticeData.publishTime }}</span>
                  <span class="meta-item">来源：{{ noticeData.source }}</span>
                </div>
              </header>

              <div class="article-content">
                <div class="article-summary">
                  <p><strong>摘要：</strong>{{ noticeData.summary }}</p>
                </div>

                <div class="article-body">
                  <template v-for="(block, index) in noticeData.content" :key="index">
                    <p v-if="block.type === 'paragraph'" v-html="block.text"></p>
                    <h3 v-else-if="block.type === 'heading'">{{ block.text }}</h3>
                    <ol v-else-if="block.type === 'list' && block.listType === 'ol'">
                      <li v-for="(item, idx) in block.items" :key="idx" v-html="item"></li>
                    </ol>
                    <ul v-else-if="block.type === 'list' && block.listType === 'ul'">
                      <li v-for="(item, idx) in block.items" :key="idx">{{ item }}</li>
                    </ul>
                  </template>
                </div>
              </div>

              <footer class="article-footer">
              </footer>
            </article>
          </div>

          <div class="content-right">
            <section class="sidebar-section">
              <div class="section-header">
                <h3 class="section-title">新闻动态</h3>
                <a @click.prevent="pageJump('news-list')" class="more-link">更多&gt;&gt;</a>
              </div>
              <ul class="sidebar-list">
                <li v-for="(news, index) in latestNews" :key="index" class="sidebar-item">
                  <span class="sidebar-badge">{{ news.badge }}</span>
                  <a @click.prevent="pageJump('news-detail', { id: news.id })" class="sidebar-title">{{ news.title }}</a>
                </li>
              </ul>
            </section>

            <section class="sidebar-section">
              <div class="section-header">
                <h3 class="section-title">文史典籍</h3>
                <a @click.prevent="pageJump('literature-list')" class="more-link">更多&gt;&gt;</a>
              </div>
              <div class="sidebar-books">
                <div v-for="(book, index) in relatedBooks" :key="index" class="sidebar-book">
                  <div class="book-cover-mini">
                    <img :src="book.cover" :alt="book.name">
                  </div>
                  <div class="book-info-mini">
                    <h4 class="book-title-mini">{{ book.name }}</h4>
                    <p class="book-author">{{ book.author }}</p>
                    <a @click.prevent="pageJump('literature-detail', { id: book.id })" class="book-link">在线阅读</a>
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

.notice-detail-page {
  background-color: #f5f5f5;
}
</style>
