<template>
    <div class="list">
         <h1>{{list}}</h1>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { Dialog,Toast } from 'vant';
import 'vant/es/dialog/style';
import 'vant/es/toast/style';
//props
const props = defineProps({
    list: Array
})

Toast('成功', 2000);


</script>
<style lang="scss" scoped>

</style>