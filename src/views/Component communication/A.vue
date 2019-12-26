<template>
    <div>
        <h1>A页面</h1>
        <button @click="handleClick()">点击跳转到B页面</button>
        <p>{{ this.$route.query.B }}</p>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {

        };
    },
    methods: {
        handleClick(){
            this.$router.push({ path: '/B', query: { A: '我是来自A页面的数据'+123 } }) // 跳转到B
        }
    },
    created() {

    },
    mounted() {

    },
    computed: {

    },
    watch: {

    },
    components: {

    },
};
</script>

<style scoped lang="less">

</style>
