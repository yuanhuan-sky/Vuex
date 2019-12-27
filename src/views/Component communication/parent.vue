<template>
    <div>
        <h1>我是父组件</h1>
        <button @click="handleClick()">点击跳往子组件</button>
        <children :number=12345678 :word="a"></children>
            
    </div>
</template>

<script>
import children from './children' 
export default {
    props: {
    },
    data() {
        return {
            a: '动态数据'+123
        };
    },
    methods: {
        handleClick(){
            this.$router.push({ path: '/children'})
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
        children
    },
};
</script>

<style scoped lang="less">

</style>
