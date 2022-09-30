<template>
    <div class="home">
        <img src="../assets/btn.png" alt="" class="btn" @click="toDetail">
    </div>
</template>
<script>
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import wechatConfig from "../utils/wxSdk.js";
export default {
    name: 'myIndex',
    setup() {
        let router = useRouter();

        function toDetail() {
            router.push({ path: '/detail' })
        }
        onBeforeMount(() => {
            //微信分享
            // wechatConfig( 
            //     this,
            //     "分享标题",
            //     "分享描述",
            //     "分享链接",
            //     "分享封面（配图）"
            // ).then((res) => {});
        })

        return { toDetail }
    }
}
</script>
<style scoped>

</style>