<script setup lang="ts">
import { ref } from "vue";
import pageJump from "@/hooks/pageJump";

// 轮播图区域
const sliderActive = ref(0);
const sliderData = ref([
  {
    id: "1",
    title: "墨彩颂华诞 政协建新功",
    info: "聊城市政协庆祝新中国和人民政协成立75周年 书画作品展",
    source: "/public/images/index_banner01_m.jpg",
    img: "/public/images/index_banner01.jpg",
  },
  {
    id: "2",
    title: "庆祝中华人民共和国成立75周年和人民政协成立75周年文艺汇演举行",
    info: "聊城市政协系统庆祝中华人民共和国成立75周年和人民政协成立75周年文艺汇演举行",
    source: "/public/images/index_banner02.jpg",
    img: "/public/images/index_banner02.jpg",
  },
]);

// 文史动态
const newsData = ref([
  {
    id: "1",
    day: "11",
    month: "1月",
    title: "热烈祝贺聊城市政协线上文史馆上线试运行！",
    desc: "为展示和宣传政协历程、重要成果和实践经验，增进政协与社会的沟通和交流，聊城市政协启动了线上文史馆建设，搭建集“存史、展览、研究、教育、交流”功能于一体的综合性数字化平台，打造传承政协精神、彰显聊城特色的“线上文化新地标”，为政协工作创新发展注入新动能。",
  },
  {
    id: "2",
    day: "26",
    month: "9月",
    title:
      "聊城市政协系统庆祝中华人民共和国成立75周年和人民政协成立75周年文艺汇演举行",
    desc: '9月26日下午，"七十五载奋进路·同心向党谱新篇"聊城市政协系统庆祝中华人民共和国和人民政协成立75周年文艺汇演在市会议接待中心报告厅举行。',
  },
  {
    id: "3",
    day: "05",
    month: "9月",
    title:
      '"墨彩颂华诞·政协建新功"——聊城市政协庆祝新中国和人民政协成立75周年书画作品展在孔繁森同志纪念馆开展',
    desc: '2024年9月5日上午，由政协聊城市委员会主办，聊城市美术馆、孔繁森同志纪念馆承办的"墨彩颂华诞·政协建新功"——聊城市政协庆祝新中国和人民政协成立75周年书画作品展在孔繁森同志纪念馆开展。',
  },
]);

// 县区板块
const countyActive = ref("dynamic");
const dynamicData = ref([
  {
    id: "20251029001",
    badge: "东昌府区",
    title: "葫芦工匠进校园”：推进葫芦产业链人才培养为文旅高质量发展注入新动能",
    date: "2025-10-19",
  },
]);
const collectionData = ref([
  {
    id: "20220111001",
    badge: "莘县",
    title: "莘县古云镇《潘庄村志》正式发行。",
    date: "2022-1-11",
  },
]);

// 通知公告
const noticeData = ref([
  {
    id: "1",
    badge: "征集",
    title: "关于征集聊城市政协文史资料的公告",
    date: "2026-01-06",
  },
]);

// 图片区域
const jiebieImg = "/images/jiebie.png";

// 视频板块（新设计）
const videoData = ref({
  id: "1",
  title: "丹青迎国庆 政协见行动 聊城市书香政协书画作品展",
  video: "http://lcwsg.lcszx.gov.cn:88/public/video/shuhua01.mp4",
});
</script>

<template>
  <div class="homePage">
    <!-- 轮播图区域 -->
    <section class="slider-section">
      <div class="container">
        <div class="slider-container">
          <!-- 第一张轮播图 -->
          <!-- 修改轮播图中的img标签为picture -->
          <div v-for="(item, index) in sliderData" :key="item.id"
            :class="['slider-item', { active: index === sliderActive }]">
            <div class="slider-image">
              <picture>
                <!-- 手机端图片 -->
                <source media="(max-width: 768px)" :srcset="item.source" />
                <!-- PC端图片 -->
                <img :src="item.img" alt="墨彩颂华诞 政协建新功" class="slider-img" />
              </picture>
              <div class="slider-content visually-hidden">
                <h3>{{ item.title }}</h3>
                <p>{{ item.info }}</p>
              </div>
            </div>
          </div>

          <!-- 轮播控制按钮 -->
          <div class="slider-controls">
            <button class="slider-prev" aria-label="上一张" @click="
              sliderActive =
              (sliderActive - 1 + sliderData.length) % sliderData.length
              ">
              &lt;
            </button>
            <div class="slider-dots">
              <span v-for="(item, index) in sliderData" :key="index"
                :class="['dot', { active: index === sliderActive }]" @click="sliderActive = index"></span>
            </div>
            <button class="slider-next" aria-label="下一张" @click="sliderActive = (sliderActive + 1) % sliderData.length">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- 主要内容区域 -->
    <main class="main-content">
      <div class="container">
        <div class="content-grid">
          <!-- 左侧内容 -->
          <div class="content-left">
            <!-- 文史动态 -->
            <section id="news" class="content-section news-section">
              <div class="section-header">
                <h2 class="section-title">文史动态</h2>
                <a href="/news-list" @click.prevent="pageJump('news-list')" class="more-link">更多&gt;&gt;</a>
              </div>
              <div class="news-list">
                <div v-for="(item, index) in newsData" :key="index" class="news-item">
                  <div class="news-date">
                    <span class="day">{{ item.day }}</span>
                    <span class="month">{{ item.month }}</span>
                  </div>
                  <div class="news-content">
                    <h3 class="news-title">
                      <a href="/news/detai-20260111001.html" @click.prevent="pageJump('news-detai', { id: item.id })">{{
                        item.title }}</a>
                    </h3>
                    <p class="news-desc">
                      {{ item.desc }}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <!-- 县区板块 -->
            <section class="county-section content-section">
              <div class="section-header">
                <h2 class="section-title">县区政协文史资料集锦</h2>
              </div>
              <div class="tab-container">
                <div class="tab-header">
                  <button :class="[
                    'tab-btn',
                    { ' active': countyActive === 'dynamic' },
                  ]" @click="countyActive = 'dynamic'">
                    县区动态
                  </button>
                  <button :class="[
                    'tab-btn',
                    { ' active': countyActive === 'collection' },
                  ]" @click="countyActive = 'collection'">
                    文史典藏
                  </button>
                </div>
                <div class="tab-content">
                  <div :class="[
                    'tab-pane',
                    { ' active': countyActive === 'dynamic' },
                  ]">
                    <ul class="county-list">
                      <li v-for="(item, index) in dynamicData" :key="index" class="county-item">
                        <span class="county-badge">{{ item.badge }}</span>
                        <a href="/countynews/detai-20251029001.html" class="county-title">{{ item.title }}</a>
                        <span class="county-date">{{ item.date }}</span>
                      </li>
                    </ul>
                  </div>
                  <div :class="[
                    'tab-pane',
                    { ' active': countyActive === 'collection' },
                  ]">
                    <ul class="county-list">
                      <li v-for="(item, index) in collectionData" :key="index" class="county-item">
                        <span class="county-badge">{{ item.badge }}</span>
                        <a href="/countyculture/detai-20220111001.html" class="county-title">{{ item.title }}</a>
                        <span class="county-date">{{ item.date }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <!-- 右侧内容 -->
          <div class="content-right">
            <!-- 通知公告 -->
            <section id="notice" class="notice-section content-section">
              <div class="section-header">
                <h2 class="section-title">通知公告</h2>
                <a href="/notice-list" @click.prevent="pageJump('notice-list')" class="more-link">更多&gt;&gt;</a>
              </div>
              <ul class="notice-list">
                <li v-for="(item, index) in noticeData" :key="index" class="notice-item">
                  <span class="notice-badge">{{ item.badge }}</span>
                  <a href="/notice/detai-20260106001.html" class="notice-title">{{ item.title }}</a>
                  <span class="notice-date">{{ item.date }}</span>
                </li>
              </ul>
            </section>

            <!-- 图片区域 -->
            <section class="content-section">
              <img :src="jiebieImg" alt="届别图片" style="width: 100%; height: auto" />
            </section>

            <!-- 视频板块（新设计） -->
            <section class="content-section video-section">
              <div class="section-header">
                <h2 class="section-title">影像</h2>
                <a href="#" @click.prevent="" class="more-link">更多&gt;&gt;</a>
              </div>

              <div class="video-player" id="videoPlayer">
                <!-- 当前页面小视频预览 -->
                <video id="mainVideo" preload="metadata" playsinline>
                  <source :src="videoData.video" type="video/mp4" />
                  您的浏览器不支持视频播放，请升级浏览器。
                </video>

                <!-- 视频预览图 -->
                <div class="video-poster" id="videoPoster" style="">
                  <div class="play-button" id="playButton"></div>
                  <div class="video-title">
                    <h3>{{ videoData.title }}</h3>
                  </div>
                </div>
              </div>
              <div class="video-info">
                <a href="#" @click.prevent="" class="view-more">查看更多影像 &gt;</a>
              </div>
            </section>
          </div>
        </div>
      </div>

      <!-- 文史典籍（通栏） -->
      <section id="literature" class="literature-section full-width">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">文史典籍</h2>
            <a href="/literature-list.html" class="more-link">更多&gt;&gt;</a>
          </div>
          <div class="literature-grid">
            <!-- 第一本书 -->
            <div class="literature-item">
              <a href="/literature/detail_1.html" class="book-link">
                <div class="book-cover">
                  <img src="/public/images/books/wenhuashi.jpg" alt="聊城文化史" class="book-img" />
                  <div class="book-hover">
                    <span>查看详情</span>
                  </div>
                </div>
                <div class="book-info">
                  <h3 class="book-title">《聊城文化史》</h3>
                  <p class="book-desc">
                    全面系统记述聊城从古至今文化方面权威史著。
                  </p>
                  <div class="book-meta">
                    <span class="book-author">聊城市政协委员会编</span>
                  </div>
                </div>
              </a>
            </div>

            <!-- 第二本书 -->
            <div class="literature-item">
              <a href="/literature/detail_5.html" class="book-link">
                <div class="book-cover">
                  <img src="/public/images/books/dongchangfuzhi.jpg" alt="东昌府誌" class="book-img" />
                  <div class="book-hover">
                    <span>查看详情</span>
                  </div>
                </div>
                <div class="book-info">
                  <h3 class="book-title">《东昌府誌校注》</h3>
                  <p class="book-desc">
                    该志始修于乾隆三十七年（1772年），历时两年完成编纂，乾隆四十二年（1777年）正式刊行。
                  </p>
                  <div class="book-meta">
                    <span class="book-author">曲成立校注</span>
                  </div>
                </div>
              </a>
            </div>

            <!-- 第三本书 -->
            <div class="literature-item">
              <a href="/literature/detail_3.html" class="book-link">
                <div class="book-cover">
                  <img src="/public/images/books/lishirenwu.jpg" alt="聊城重要历史人物" class="book-img" />
                  <div class="book-hover">
                    <span>查看详情</span>
                  </div>
                </div>
                <div class="book-info">
                  <h3 class="book-title">《聊城重要历史人物》</h3>
                  <p class="book-desc">
                    详尽地介绍了160多位在中国历史和聊城历史上曾经产生重大影响的聊城籍或客籍人物。
                  </p>
                  <div class="book-meta">
                    <span class="book-author">聊城市政协文史资料委员会</span>
                  </div>
                </div>
              </a>
            </div>

            <!-- 第四本书 -->
            <div class="literature-item">
              <a href="/ebook/yanggumingzhu/mobile/index.html" class="book-link">
                <div class="book-cover">
                  <img src="/public/images/books/yanggu.jpg" alt="聊城脱贫攻坚口述史" class="book-img" />
                  <div class="book-hover">
                    <span>查看详情</span>
                  </div>
                </div>
                <div class="book-info">
                  <h3 class="book-title">《阳谷县名著记忆》</h3>
                  <p class="book-desc">
                    以水浒文化为主线串联起水浒遗迹、水浒遗珍、水浒非遗、水浒论坛和水浒诗文五大篇章。
                  </p>
                  <div class="book-meta">
                    <span class="book-author">聊城市政协文化史和学习委员会</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- 人物春秋（通栏） -->
      <section id="people" class="people-section full-width">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">人物春秋</h2>
            <a href="/people-list.html" class="more-link">更多&gt;&gt;</a>
          </div>
          <div class="people-grid">
            <div class="people-item featured">
              <a href="/people/people-jixianlin.html" class="people-link">
                <div class="people-image">
                  <img src="/public/images/jixianlin.jpg" style="max-height: 450px; width: auto" />
                </div>
                <div class="people-info">
                  <h3 class="people-name">季羡林</h3>
                  <p class="people-title">国际东方学大师</p>
                  <p class="people-desc">
                    中国山东省聊城市临清人，字希逋，又字齐奘。国际著名东方学大师、语言学家、文学家、国学家、佛学家、史学家、教育家和社会活动家。历任中国科学院哲学社会科学部委员、聊城大学名誉校长、北京大学副校长、中国社会科学院南亚研究所所长，第一批北京大学哲学社会科学资深教授，与饶宗颐并称为“南饶北季”。
                  </p>
                </div>
              </a>
            </div>
            <div class="people-item">
              <a href="/people/people-fusinian.html" class="people-link">
                <div class="people-image">
                  <img src="/public/images/fusinian.jpg" style="width: auto" />
                </div>
                <div class="people-info">
                  <h3 class="people-name">傅斯年</h3>
                  <p class="people-title">历史学家、古典文学研究专家</p>
                  <p class="people-desc">初字梦簪，字孟真，山东聊城人</p>
                </div>
              </a>
            </div>
            <div class="people-item">
              <a href="/people/people-sundashi.html" class="people-link">
                <div class="people-image">
                  <img src="/public/images/sundashi.jpg" style="width: auto" />
                </div>
                <div class="people-info">
                  <h3 class="people-name">孙大石</h3>
                  <p class="people-title">中国书画家</p>
                  <p class="people-desc">
                    又名孙瑛，山东高唐人，中国美术家协会理事
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- 书画作品（通栏） -->
      <section id="art" class="art-section full-width">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">书画作品</h2>
            <a href="/art-list.html" class="more-link">更多&gt;&gt;</a>
          </div>
          <div class="art-grid">
            <!-- 第一行 - 特色作品 -->
            <!-- 修改2：为书画作品添加点击事件 -->
            <div class="art-item featured" data-art-id="1">
              <div class="art-image">
                <img src="/public/images/art/art01.jpg" style="max-height: 430px; width: auto" alt="运河春晓" />
              </div>
              <div class="art-info">
                <h3 class="art-title">《吉祥溪山》</h3>
                <p class="art-author">韩英凌</p>
                <p class="art-desc">
                  以水墨与色彩结合，描绘层叠山峦、瀑布溪流及山间亭台，笔墨苍劲，意境深远。
                </p>
              </div>
            </div>

            <div class="art-item" data-art-id="3">
              <div class="art-image">
                <img src="/public/images/art/art03.jpg" style="max-height: 430px; width: auto" alt="书画作品3" />
              </div>
            </div>

            <div class="art-item" data-art-id="4">
              <div class="art-image">
                <img src="/public/images/art/art04.jpg" style="max-height: 430px; width: auto" alt="书画作品4" />
              </div>
            </div>

            <div class="art-item" data-art-id="5">
              <div class="art-image">
                <img src="/public/images/art/art05.jpg" style="max-height: 430px; width: auto" alt="书画作品5" />
              </div>
            </div>

            <!-- 第二行 - 新增特色作品 -->
            <div class="art-item featured" data-art-id="2">
              <div class="art-image" style="background-color: #e0c8a4">
                <img src="/public/images/art/fangjianguang001.jpeg" style="max-height: 430px; width: auto" alt="书法作品" />
              </div>
              <div class="art-info">
                <h3 class="art-title">书法作品</h3>
                <p class="art-author">方建光</p>
                <p class="art-desc">
                  笔法流畅自然，字形大小错落，墨色浓淡变化丰富，整体布局疏密有致，展现了书写者对传统书法的继承与个人风格的融合。传承了“二王”书法的艺术精髓。
                </p>
              </div>
            </div>

            <div class="art-item" data-art-id="6">
              <div class="art-image">
                <img src="/public/images/art/art12.jpg" style="max-height: 430px; width: auto" alt="书画作品6" />
              </div>
            </div>

            <div class="art-item" data-art-id="7">
              <div class="art-image">
                <img src="/public/images/art/art13.jpg" style="max-height: 430px; width: auto" alt="书画作品7" />
              </div>
            </div>

            <div class="art-item" data-art-id="8">
              <div class="art-image">
                <img src="/public/images/art/art16.jpg" style="max-height: 430px; width: auto" alt="书画作品8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 友情链接 -->
      <section id="friendly-links" class="friendly-links-section full-width">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">友情链接</h2>
          </div>
          <div class="links-list">
            <a href="https://www.sdzx.gov.cn/" target="_blank" class="link-item">
              山东省政协
            </a>

            <a href="https://www.lcszx.gov.cn" target="_blank" class="link-item">
              聊城市政协
            </a>

            <a href="https://www.sdzx.gov.cn/sdszxwsg/" target="_blank" class="link-item">
              山东政协文史馆
            </a>

            <a href="http://www.zbszx.gov.cn/html/list_724_1.html" target="_blank" class="link-item">
              淄博政协文史馆
            </a>

            <a href="http://zx.weihai.gov.cn/col/col162656/index.html" target="_blank" class="link-item">
              威海政协文史馆
            </a>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import "/public/css/common.css";
@import "/public/css/culture.css";
@import "/public/css/home.css";
</style>
