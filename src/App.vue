<template>
  <router-view/>
</template>
<script>
import { onMounted, getCurrentInstance } from 'vue'
import wechatConfig from "./utils/wxSdk.js";
export default {
    setup(props) {
        // vu3没有this 使用getCurrentInstance 获取global
        const { appContext: { config: { globalProperties: global } } } = getCurrentInstance();
        const _this = global;
        onMounted(() => {
            //微信分享
            wechatConfig(
                _this,
                '2022数字营销精英大赛',
                '奇瑞汽车经销商“一垂定音”三大平台，联合作战，多重激励，邀你来战',

            ).then((res) => {
                console.log(res)
            });

        })

        return {}
    }
}
</script>
<style>
  *{
    padding: 0;
    margin: 0;
  }
</style>
