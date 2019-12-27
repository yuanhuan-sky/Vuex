<template>
    <div>
        <h1>我是子组件</h1>
        <button @click="handleClick()">点击跳往父组件</button>
        <p>我是来自父组件的数据：{{number}}</p>
        <p>我是来自父组件的动态数据：{{word}}</p>
    </div>
</template>

<script>
export default {
    props: ["number","word"],
    data() {
        return {
        };
    },
    methods: {
        handleClick(){
            this.$router.push({ path: '/parent'})
        },
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
