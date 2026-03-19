<script setup lang="ts">
import { ref } from 'vue';

// 人物数据
const peopleList = ref([
  {
    id: '1',
    name: '季羡林',
    title: '国际东方学大师',
    desc: '中国山东省聊城市临清人，字希逋，又字齐奘。国际著名东方学大师、语言学家、文学家、国学家、佛学家、史学家、教育家和社会活动家。历任中国科学院哲学社会科学部委员、聊城大学名誉校长、北京大学副校长、中国社会科学院南亚研究所所长，第一批北京大学哲学社会科学资深教授，与饶宗颐并称为"南饶北季"。',
    image: '/public/images/jixianlin01.jpg',
    link: '/people/people-jixianlin.html'
  },
  {
    id: '2',
    name: '傅斯年',
    title: '历史学家、古典文学研究专家',
    desc: '初字梦簪，字孟真，山东聊城人。著名历史学家、古典文学研究专家。五四运动学生领袖之一，曾任北京大学代理校长、台湾大学校长。在历史学、古典文学、考古学等领域均有重要贡献。他提出的"史料即史学"的治学理念，推动了中国现代史学的发展。',
    image: '/public/images/fusinian.jpg',
    link: '/people/people-fusinian.html'
  },
  {
    id: '3',
    name: '杨以增',
    title: '清代藏书家、文学家、目录学家',
    desc: '字益之，号至堂，别号东樵。聊城县城里（今属聊城市东昌府区）人。清代著名藏书家、文学家、目录学家。创建海源阁，藏书二十余万卷，为清代四大私人藏书楼之一。其编纂的《楹书隅录》是研究版本学的重要文献，对中国古代文献的保存和整理作出了重要贡献。',
    image: '/public/images/yangyizeng.jpg',
    link: '/people/people-yangyizeng.html'
  },
  {
    id: '4',
    name: '武训',
    title: '清代教育家、慈善家',
    desc: '原名武七，清末山东堂邑县（今属冠县）人。中国近代群众办学的先驱者，一生行乞兴学，创办义学三所，教育了无数穷家子弟，是中国历史上以乞丐身份被载入正史的唯一一人，被誉为"千古奇丐"。他的无私奉献精神影响深远，陶行知曾发起"新武训运动"。',
    image: '/public/images/wuxun.jpg',
    link: '/people/people-wuxun.html'
  },
  {
    id: '5',
    name: '范筑先',
    title: '抗日英雄、爱国将领',
    desc: '原名金标，又名夺魁，山东馆陶（今属河北）人，后定居聊城。著名抗日将领，曾任山东省第六区行政督察专员、保安司令兼聊城县县长。在聊城保卫战中壮烈殉国，被誉为"抗战楷模"。他坚守鲁西北，开辟抗日根据地，保卫了数十万百姓。',
    image: '/public/images/fanzhuxian.jpg',
    link: '/people/people-fanzhuxian.html'
  },
  {
    id: '6',
    name: '李苦禅',
    title: '国画大师、美术教育家',
    desc: '原名李英杰，山东高唐人。中国近现代大写意花鸟画宗师、美术教育家。曾任杭州艺专教授、中央美术学院教授、中国美术家协会理事。其作品继承中国传统绘画精髓，融中西技法于一炉，形成了独特的艺术风格，享誉海内外。',
    image: '/public/images/likuchan01.jpg',
    link: '/people/people-likuchan.html'
  },
  {
    id: '7',
    name: '孙大石',
    title: '中国美术家协会理事，第六、七、八届全国政协委员',
    desc: '又名孙瑛，山东高唐人，中国美术家协会理事、中央文史研究馆馆员、中国画研究院专业画家。早年从军期间研习绘画，1945年于武汉结识丰子恺。1949年赴台后参与筹建台湾中国现代画学会、四海学会等团体，获台湾中国画学会金爵奖。',
    image: '/public/images/sundashi.jpg',
    link: '/people/people-sundashi.html'
  },
  {
    id: '8',
    name: '孔繁森',
    title: '新时期领导干部的楷模',
    desc: '山东聊城人，中国共产党党员。曾任西藏阿里地委书记，两次进藏工作，历时十载。他勤政为民，无私奉献，把热血和生命献给了西藏建设，被誉为"新时期领导干部的楷模"。他的事迹感动了亿万中国人民，是党员干部学习的榜样。',
    image: '/public/images/kongfansen.jpg',
    link: '/people/people-kongfansen.html'
  }
]);
</script>

<template>
  <div class="people-list-page">
    <!-- 主要内容区域 -->
    <main class="main-content">
      <div class="container">
        <!-- 使用一行一个人物的布局方式 -->
        <div class="people-list-grid">
          <div v-for="(person, index) in peopleList" :key="index" class="people-list-item">
            <a :href="person.link" class="people-list-link">
              <div class="people-list-image">
                <img :src="person.image" :alt="person.name">
              </div>
              <div class="people-list-info">
                <h3 class="people-list-name">{{ person.name }}</h3>
                <p class="people-list-title">{{ person.title }}</p>
                <p class="people-list-desc">{{ person.desc }}</p>
              </div>
            </a>
          </div>
        </div>

        <!-- 分页导航 -->
        <div class="pagination">
          <a href="#" class="page-number active">1</a>
        </div>
      </div>
    </main>

  </div>
</template>

<style lang="scss" scoped>
@import "/public/css/common.css";
@import "/public/css/people.css";

// 人物春秋页面样式
.people-list-page {
  // 可根据需要添加页面特定样式
  background-color: #f5f5f5;
}
</style>