import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// 定义用户类型
interface User {
  id: number
  name: string
  email: string
  avatar?: string
}

// 模拟用户数据
const mockUsers: User[] = [
  { id: 1, name: '张三', email: 'zhangsan@example.com', avatar: 'https://via.placeholder.com/100' },
  { id: 2, name: '李四', email: 'lisi@example.com', avatar: 'https://via.placeholder.com/100' },
  { id: 3, name: '王五', email: 'wangwu@example.com', avatar: 'https://via.placeholder.com/100' }
]

export const useUserStore = defineStore('user', () => {
  // State - 状态
  const users = ref<User[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  const currentUser = ref<User | null>(null)

  // Getters - 计算属性
  const userCount = computed(() => users.value.length)
  const activeUsers = computed(() => users.value.filter(user => !!user.email))
  const userById = (id: number) => computed(() => users.value.find(user => user.id === id))

  // Actions - 方法（同步和异步）

  // 同步操作：添加用户
  function addUser(user: Omit<User, 'id'>) {
    const newUser: User = {
      ...user,
      id: Date.now() // 使用时间戳作为临时ID
    }
    users.value.push(newUser)
  }

  // 同步操作：删除用户
  function deleteUser(id: number) {
    users.value = users.value.filter(user => user.id !== id)
    if (currentUser.value?.id === id) {
      currentUser.value = null
    }
  }

  // 同步操作：更新用户
  function updateUser(id: number, updates: Partial<User>) {
    const index = users.value.findIndex(user => user.id === id)
    if (index !== -1) {
      users.value[index] = { ...users.value[index], ...updates }
      if (currentUser.value?.id === id) {
        currentUser.value = users.value[index]
      }
    }
  }

  // 异步操作：获取用户列表（模拟API请求）
  async function fetchUsers() {
    loading.value = true
    error.value = null

    try {
      // 模拟网络延迟
      await new Promise(resolve => setTimeout(resolve, 1000))

      // 模拟API成功响应
      users.value = [...mockUsers]
    } catch (err) {
      error.value = '获取用户列表失败'
      console.error('获取用户列表失败:', err)
    } finally {
      loading.value = false
    }
  }

  // 异步操作：设置当前用户
  async function setCurrentUser(id: number) {
    loading.value = true
    error.value = null

    try {
      // 模拟网络延迟
      await new Promise(resolve => setTimeout(resolve, 500))

      const user = users.value.find(user => user.id === id)
      if (user) {
        currentUser.value = user
      } else {
        error.value = '用户不存在'
      }
    } catch (err) {
      error.value = '设置当前用户失败'
      console.error('设置当前用户失败:', err)
    } finally {
      loading.value = false
    }
  }

  // 异步操作：保存当前用户到服务器（模拟API请求）
  async function saveCurrentUser() {
    if (!currentUser.value) {
      error.value = '没有选中要保存的用户'
      return
    }

    loading.value = true
    error.value = null

    try {
      // 模拟网络延迟
      await new Promise(resolve => setTimeout(resolve, 800))

      // 模拟API成功响应
      console.log('用户已保存:', currentUser.value)
      // 可以在这里添加成功提示
    } catch (err) {
      error.value = '保存用户失败'
      console.error('保存用户失败:', err)
    } finally {
      loading.value = false
    }
  }

  // 重置状态
  function resetState() {
    users.value = []
    loading.value = false
    error.value = null
    currentUser.value = null
  }

  return {
    // State
    users,
    loading,
    error,
    currentUser,
    // Getters
    userCount,
    activeUsers,
    userById,
    // Actions
    addUser,
    deleteUser,
    updateUser,
    fetchUsers,
    setCurrentUser,
    saveCurrentUser,
    resetState
  }
})
