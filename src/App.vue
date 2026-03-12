<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useCounterStore } from './stores/counter'

// 使用 counter store
const counterStore = useCounterStore()

// Element Plus 测试数据
const inputValue = ref('')
const selectValue = ref('')
const options = [
  { value: 'Option1', label: '选项一' },
  { value: 'Option2', label: '选项二' },
  { value: 'Option3', label: '选项三' }
]
const switchValue = ref(false)

const showMessage = () => {
  ElMessage.success('这是一个成功消息')
}
</script>

<template>
  <div class="app-container">
    <h1>Pinia 状态管理集成示例</h1>

    <!-- Element Plus 组件测试区域 -->
    <div class="element-plus-section">
      <h2>Element Plus 组件测试</h2>

      <div class="component-grid">
        <!-- Button 组件 -->
        <div class="component-item">
          <h3>Button 按钮</h3>
          <el-button type="primary">主要按钮</el-button>
          <el-button type="success">成功按钮</el-button>
          <el-button type="warning">警告按钮</el-button>
          <el-button type="danger">危险按钮</el-button>
          <el-button type="info">信息按钮</el-button>
        </div>

        <!-- Input 组件 -->
        <div class="component-item">
          <h3>Input 输入框</h3>
          <el-input v-model="inputValue" placeholder="请输入内容" />
          <p>输入值: {{ inputValue }}</p>
        </div>

        <!-- Select 组件 -->
        <div class="component-item">
          <h3>Select 选择器</h3>
          <el-select v-model="selectValue" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
          <p>选择值: {{ selectValue }}</p>
        </div>

        <!-- Switch 组件 -->
        <div class="component-item">
          <h3>Switch 开关</h3>
          <el-switch v-model="switchValue" active-text="开" inactive-text="关" />
          <p>开关状态: {{ switchValue ? '开' : '关' }}</p>
        </div>

        <!-- Message 消息提示 -->
        <div class="component-item">
          <h3>Message 消息提示</h3>
          <el-button @click="showMessage">显示成功消息</el-button>
        </div>

        <!-- Card 卡片 -->
        <div class="component-item">
          <h3>Card 卡片</h3>
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <span>卡片标题</span>
              </div>
            </template>
            <div>卡片内容</div>
            <p>这是一个卡片示例，可以展示各种内容</p>
          </el-card>
        </div>
      </div>
    </div>

    <!-- 展示 counter store 的功能 -->
    <div class="counter-section">
      <h2>Counter Store</h2>
      <p>当前计数: {{ counterStore.count }}</p>
      <p>双击计数: {{ counterStore.doubleCount }}</p>
      <el-button type="primary" @click="counterStore.increment">增加计数</el-button>
    </div>

    <p style="margin-top: 2rem;">
      Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
      documentation
    </p>
  </div>
</template>

<style scoped>
.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.element-plus-section {
  border: 1px solid #e4e7ed;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.component-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.component-item {
  border: 1px solid #ebeef5;
  border-radius: 6px;
  padding: 1rem;
  background-color: #fafafa;
}

.component-item h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  color: #303133;
}

.component-item>* {
  margin-bottom: 0.5rem;
}

.counter-section {
  border: 1px solid #e4e7ed;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
