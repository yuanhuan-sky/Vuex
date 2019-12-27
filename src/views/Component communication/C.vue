<template>
    <div>
        <h1>C页面</h1>
        <D @dEvent="Cevent"></D>
    </div>
</template>

<script>
import D from './D' 
export default {
    props: {

    },
    data() {
        return {

        };
    },
    methods: {
        Cevent(data){
            console.log(data)
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
        D
    },
};
</script>

<style scoped lang="less">

</style>
