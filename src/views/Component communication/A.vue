<template>
    <div>
        <h1>A页面</h1>
        <button @click="handleClick()">点击跳转到B页面</button>
        <p>{{ this.$route.query.B }}</p>
    </div>
</template>

<script>
    const orderData = { 'orderId': 123, 'price': 88 }
    localStorage.setItem('缓存名称', JSON.stringify(orderData))
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
