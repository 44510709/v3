<template>
    <div class="about">
        <button @click="increment">点击了：{{ count }} 次</button>
        <h3>{{token}}</h3>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
// 响应式状态
const count = ref(0)

// 更改状态、触发更新的函数
function increment() {
    count.value++
}
//使用vuex
let store = useStore()
console.log(store)

// 生命周期钩子
onMounted(() => {
    console.log(`计数器初始值为 ${count.value}。`)
})
</script>