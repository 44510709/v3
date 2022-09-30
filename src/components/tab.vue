<template>
    <h1>tab</h1>
</template>
<script>
import { ref, onMounted } from 'vue';
import emitter from '../utils/eventbus';
export default {
    props: {

    },
    setup(props, { emit }) {

        emitter.on('geeks', res => {
            console.log(111)
        })

        return {};
    },
};
</script>
<style lang="scss" scoped>
</style>