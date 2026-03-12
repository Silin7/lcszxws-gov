<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useUserStore } from '../stores/user'

// 使用 user store
const userStore = useUserStore()

// 表单数据
const newUserForm = ref({
  name: '',
  email: '',
  avatar: ''
})

// 编辑表单数据
const editUserForm = ref({
  id: 0,
  name: '',
  email: '',
  avatar: ''
})

// 模态框可见性
const showAddModal = ref(false)
const showEditModal = ref(false)

// 组件挂载时获取用户列表
onMounted(() => {
  userStore.fetchUsers()
})

// 打开编辑模态框
const openEditModal = (user: any) => {
  editUserForm.value = { ...user }
  showEditModal.value = true
}

// 保存编辑
const saveEdit = () => {
  userStore.updateUser(editUserForm.value.id, editUserForm.value)
  showEditModal.value = false
}

// 添加用户
const addUser = () => {
  if (newUserForm.value.name && newUserForm.value.email) {
    userStore.addUser(newUserForm.value)
    newUserForm.value = { name: '', email: '', avatar: '' }
    showAddModal.value = false
  }
}

// 设置当前用户
const selectUser = (id: number) => {
  userStore.setCurrentUser(id)
}

// 保存当前用户
const saveCurrentUser = () => {
  userStore.saveCurrentUser()
}
</script>

<template>
  <div class="user-management">
    <h2>用户管理 (User Store)</h2>

    <!-- 加载状态 -->
    <div v-if="userStore.loading" class="loading">
      加载中...
    </div>

    <!-- 错误信息 -->
    <div v-if="userStore.error" class="error">
      {{ userStore.error }}
    </div>

    <!-- 用户操作栏 -->
    <div class="action-bar">
      <button @click="userStore.fetchUsers" :disabled="userStore.loading">
        {{ userStore.loading ? '加载中...' : '刷新用户' }}
      </button>

      <button @click="showAddModal = true">
        添加用户
      </button>

      <button @click="userStore.resetState">
        重置状态
      </button>
    </div>

    <!-- 用户统计 -->
    <div class="stats">
      <p>用户总数: {{ userStore.userCount }}</p>
      <p>活跃用户: {{ userStore.activeUsers.length }}</p>
    </div>

    <!-- 用户列表 -->
    <div v-if="userStore.users.length > 0" class="user-list">
      <div v-for="user in userStore.users" :key="user.id" class="user-item"
        :class="{ active: userStore.currentUser?.id === user.id }">
        <div class="user-info">
          <img v-if="user.avatar" :src="user.avatar" :alt="user.name" class="avatar" />
          <div class="user-details">
            <h4>{{ user.name }}</h4>
            <p>{{ user.email }}</p>
          </div>
        </div>

        <div class="user-actions">
          <button @click="selectUser(user.id)">
            {{ userStore.currentUser?.id === user.id ? '已选中' : '选择' }}
          </button>

          <button @click="openEditModal(user)">
            编辑
          </button>

          <button @click="userStore.deleteUser(user.id)">
            删除
          </button>
        </div>
      </div>
    </div>

    <!-- 无用户提示 -->
    <div v-else-if="!userStore.loading && !userStore.error" class="no-users">
      暂无用户，请点击"添加用户"按钮添加新用户。
    </div>

    <!-- 当前选中用户 -->
    <div v-if="userStore.currentUser" class="current-user">
      <h3>当前选中用户</h3>
      <div class="user-info">
        <img v-if="userStore.currentUser.avatar" :src="userStore.currentUser.avatar" :alt="userStore.currentUser.name"
          class="avatar" />
        <div class="user-details">
          <h4>{{ userStore.currentUser.name }}</h4>
          <p>{{ userStore.currentUser.email }}</p>
        </div>
      </div>

      <button @click="saveCurrentUser">
        保存当前用户
      </button>
    </div>

    <!-- 添加用户模态框 -->
    <div v-if="showAddModal" class="modal">
      <div class="modal-content">
        <h3>添加新用户</h3>

        <div class="form-group">
          <label>姓名:</label>
          <input v-model="newUserForm.name" type="text" placeholder="请输入姓名" />
        </div>

        <div class="form-group">
          <label>邮箱:</label>
          <input v-model="newUserForm.email" type="email" placeholder="请输入邮箱" />
        </div>

        <div class="form-group">
          <label>头像:</label>
          <input v-model="newUserForm.avatar" type="url" placeholder="请输入头像URL" />
        </div>

        <div class="modal-actions">
          <button @click="addUser">
            保存
          </button>

          <button @click="showAddModal = false">
            取消
          </button>
        </div>
      </div>
    </div>

    <!-- 编辑用户模态框 -->
    <div v-if="showEditModal" class="modal">
      <div class="modal-content">
        <h3>编辑用户</h3>

        <div class="form-group">
          <label>姓名:</label>
          <input v-model="editUserForm.name" type="text" />
        </div>

        <div class="form-group">
          <label>邮箱:</label>
          <input v-model="editUserForm.email" type="email" />
        </div>

        <div class="form-group">
          <label>头像:</label>
          <input v-model="editUserForm.avatar" type="url" />
        </div>

        <div class="modal-actions">
          <button @click="saveEdit">
            保存
          </button>

          <button @click="showEditModal = false">
            取消
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user-management {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 2rem;
  background-color: #f9f9f9;
}

.loading {
  color: #666;
  padding: 1rem;
  text-align: center;
}

.error {
  color: red;
  padding: 1rem;
  background-color: #ffe6e6;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.action-bar {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.stats {
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
}

.user-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.user-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: white;
  border-radius: 4px;
  border: 1px solid #eee;
}

.user-item.active {
  border-color: #42b983;
  background-color: #f0fff4;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.user-details h4 {
  margin: 0 0 0.25rem 0;
  font-size: 1.1rem;
}

.user-details p {
  margin: 0;
  color: #666;
}

.user-actions {
  display: flex;
  gap: 0.5rem;
}

.no-users {
  text-align: center;
  padding: 2rem;
  color: #666;
}

.current-user {
  background-color: white;
  border-radius: 4px;
  padding: 1rem;
  border: 1px solid #eee;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  background-color: #42b983;
  color: white;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #359e6b;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
