<script setup lang="ts">
import { ref, computed } from 'vue';

// 分类数据
const categories = ref([
  {
    id: 'all',
    name: '全部作品'
  },
  {
    id: 'painting',
    name: '国画作品'
  },
  {
    id: 'calligraphy',
    name: '书法作品'
  },
  {
    id: 'landscape',
    name: '山水题材'
  },
  {
    id: 'flower',
    name: '花鸟题材'
  }
]);

// 当前选中的分类
const currentCategory = ref('all');

// 作品数据
const artworkList = ref([
  {
    id: 1,
    image: '/public/images/art/art12.jpg',
    category: ['painting', 'landscape']
  },
  {
    id: 2,
    image: '/public/images/art/art13.jpg',
    category: ['painting', 'landscape']
  },
  {
    id: 3,
    image: '/public/images/art/art14.jpg',
    category: ['painting', 'landscape']
  },
  {
    id: 4,
    image: '/public/images/art/art15.jpg',
    category: ['painting', 'landscape']
  },
  {
    id: 5,
    image: '/public/images/art/art16.jpg',
    category: ['painting', 'landscape']
  },
  {
    id: 6,
    image: '/public/images/art/art01.jpg',
    category: ['painting', 'landscape']
  },
  {
    id: 7,
    image: '/public/images/art/fangjianguang001.jpeg',
    category: ['painting', 'landscape']
  },
  {
    id: 8,
    image: '/public/images/art/art03.jpg',
    category: ['painting', 'landscape']
  },
  {
    id: 9,
    image: '/public/images/art/art04.jpg',
    category: ['painting', 'landscape']
  },
  {
    id: 10,
    image: '/public/images/art/art05.jpg',
    category: ['painting', 'landscape']
  },
  {
    id: 11,
    image: '/public/images/art/art06.jpg',
    category: ['painting', 'landscape']
  },
  {
    id: 12,
    image: '/public/images/art/art07.jpg',
    category: ['painting', 'landscape']
  },
  {
    id: 13,
    image: '/public/images/art/art08.jpg',
    category: ['painting', 'landscape']
  },
  {
    id: 14,
    image: '/public/images/art/art09.jpg',
    category: ['painting', 'landscape']
  },
  {
    id: 15,
    image: '/public/images/art/art10.jpg',
    category: ['painting', 'landscape']
  }
]);

// 模态框相关
const isModalVisible = ref(false);
const currentArtwork = ref(0);

// 加载更多
const showLoadMore = ref(true);

// 切换分类
const switchCategory = (categoryId: string) => {
  currentCategory.value = categoryId;
};

// 筛选后的作品列表
const filteredArtworks = computed(() => {
  if (currentCategory.value === 'all') {
    return artworkList.value;
  }
  return artworkList.value.filter(item => item.category.includes(currentCategory.value));
});

// 打开模态框
const openModal = (artworkId: number) => {
  currentArtwork.value = artworkId;
  isModalVisible.value = true;
};

// 关闭模态框
const closeModal = () => {
  isModalVisible.value = false;
};

// 上一个作品
const showPrevArtwork = () => {
  const filtered = filteredArtworks.value;
  const currentIndex = filtered.findIndex(art => art.id === currentArtwork.value);
  if (currentIndex > 0) {
    currentArtwork.value = filtered[currentIndex - 1].id;
  }
};

// 下一个作品
const showNextArtwork = () => {
  const filtered = filteredArtworks.value;
  const currentIndex = filtered.findIndex(art => art.id === currentArtwork.value);
  if (currentIndex < filtered.length - 1) {
    currentArtwork.value = filtered[currentIndex + 1].id;
  }
};

// 加载更多
const loadMore = () => {
  // 在实际应用中，这里应该从服务器加载更多数据
  // 现在先隐藏按钮
  showLoadMore.value = false;
};

// 键盘事件处理
const handleKeydown = (e: KeyboardEvent) => {
  if (!isModalVisible.value) return;

  if (e.key === 'Escape') {
    closeModal();
  } else if (e.key === 'ArrowLeft') {
    showPrevArtwork();
  } else if (e.key === 'ArrowRight') {
    showNextArtwork();
  }
};

// 监听键盘事件
window.addEventListener('keydown', handleKeydown);
</script>

<template>
  <div class="art-list-page">
    <!-- 主要内容区域 -->
    <main class="main-content art-main">
      <div class="container">
        <!-- 作品分类导航 -->
        <div class="art-category-nav">
          <button v-for="category in categories" :key="category.id" class="category-btn"
            :class="{ active: category.id === currentCategory }" @click="switchCategory(category.id)">{{ category.name
            }}</button>
        </div>

        <!-- 作品展示区（网格视图） -->
        <div class="art-grid-view active">
          <div class="art-grid">
            <div v-for="artwork in filteredArtworks" :key="artwork.id" class="art-item"
              :data-category="artwork.category.join(' ')">
              <div class="art-image-container">
                <div class="art-image">
                  <img :src="artwork.image" alt="书画作品" class="art-image-real">
                </div>
                <div class="art-overlay">
                  <button class="zoom-btn" @click="openModal(artwork.id)">+</button>
                </div>
              </div>
            </div>
          </div>

          <!-- 查看更多 -->
          <div class="art-load-more" v-if="showLoadMore">
            <button class="load-more-btn" @click="loadMore">加载更多作品</button>
          </div>
        </div>
      </div>
    </main>

    <!-- 图片放大模态框 -->
    <div class="modal-overlay" :class="{ active: isModalVisible }" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeModal">&times;</button>
        <div class="modal-image-container">
          <div class="modal-image">
            <img v-if="currentArtwork" :src="artworkList.find(art => art.id === currentArtwork)?.image" alt="书画作品"
              class="modal-image-real">
          </div>
        </div>
        <div class="modal-nav">
          <button class="modal-prev" @click="showPrevArtwork"
            :disabled="filteredArtworks.findIndex(art => art.id === currentArtwork) <= 0">上一个</button>
          <button class="modal-next" @click="showNextArtwork"
            :disabled="filteredArtworks.findIndex(art => art.id === currentArtwork) >= filteredArtworks.length - 1">下一个</button>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
@import "/public/css/common.css";
@import "/public/css/art.css";

// 书画作品页面样式
.art-list-page {
  // 可根据需要添加页面特定样式
  background-color: #f5f5f5;
}

// 自定义样式
.art-image {
  height: 350px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
}

.art-image-real {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}

.art-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.art-item {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.art-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}

.art-category-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.category-btn {
  padding: 8px 20px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
}

.category-btn:hover {
  background: #f0f0f0;
}

.category-btn.active {
  background: #2a6e8b;
  color: white;
  border-color: #2a6e8b;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-overlay.active {
  display: flex;
}

.modal-content {
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  background: white;
  border-radius: 8px;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  color: #333;
  font-size: 28px;
  cursor: pointer;
  z-index: 1001;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.9);
  transition: background-color 0.3s ease;
}

.modal-close:hover {
  background-color: white;
}

.modal-image-container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
}

.modal-image-real {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  object-position: center;
}

.modal-nav {
  display: flex;
  justify-content: space-between;
  padding: 0 20px 20px;
}

.modal-prev,
.modal-next {
  padding: 10px 20px;
  background-color: #2a6e8b;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.modal-prev:hover,
.modal-next:hover {
  background-color: #1d4f63;
}

.modal-prev:disabled,
.modal-next:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.zoom-btn {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  background-color: rgba(42, 110, 139, 0.8);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  z-index: 10;
}

.zoom-btn:hover {
  background-color: #2a6e8b;
}

.art-image-container {
  position: relative;
}

.art-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 10px;
}

.art-item:hover .art-overlay {
  opacity: 1;
}

.art-load-more {
  text-align: center;
  margin-top: 30px;
}

.load-more-btn {
  padding: 10px 30px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
}

.load-more-btn:hover {
  background-color: #e0e0e0;
}
</style>