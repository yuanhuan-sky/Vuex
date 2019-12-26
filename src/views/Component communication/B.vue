<template>
    <div>
        <h1>B页面</h1>
        <button @click="handleClick()">点击跳转到A页面</button>
        <p>{{ this.$route.query.A }}</p>
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
            this.$router.push({ path: '/A', query:{ B: '我是来自B页面的数据'+456 } })
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
