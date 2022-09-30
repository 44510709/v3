<template>
    <div class="page">
        <tab v-if="show" />
        <test :list="[1,2,3]" />
    </div>
</template>
<script setup>
import { ref,nextTick } from 'vue'
import tab from '../components/tab.vue'
import test from '../components/test.vue'
import { geek } from '../api'
import emitter from '../utils/eventbus';
import { useStore } from 'vuex'


const store = useStore();
console.log(store)

const show = ref(false)
setTimeout(async () => {
    show.value = true
    // emitter.off('geeks')
    await nextTick()
    emitter.emit('geeks', 111)
}, 1000)
</script>
<style lang="scss" scoped>
:deep(.vant) {}
</style>