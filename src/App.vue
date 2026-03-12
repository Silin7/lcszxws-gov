<script setup lang="ts">
import { useCounterStore } from './stores/counter'

// 使用 counter store
const counterStore = useCounterStore()
</script>

<template>
  <h1>Pinia 状态管理集成示例</h1>

  <!-- 展示 counter store 的功能 -->
  <div class="counter-section">
    <h2>Counter Store</h2>
    <p>当前计数: {{ counterStore.count }}</p>
    <p>双击计数: {{ counterStore.doubleCount }}</p>
    <button @click="counterStore.increment">增加计数</button>
  </div>

  <p style="margin-top: 2rem;">
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
</template>

<style scoped>
.counter-section {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 2rem;
  background-color: #f9f9f9;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #359e6b;
}
</style>
