<template>
    <div>
        <h1>D页面</h1>
        <button @click="emitToC">点击传值给父组件C页面</button>
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
        emitToC(){
            this.$emit('dEvent','我是来自C页面的数据')
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
