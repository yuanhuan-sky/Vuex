<template>
    <div>
        <h1>watch：监听某个状态的值发生改变</h1>
        <p>单价：<input type="text" v-model="price"></p>
        <p>数量：<input type="text" v-model="number"></p>
        <!-- <p>总金额(watch)：{{ sum }}</p> -->
        <p>计算属性总金额：{{ computedSum }}</p>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            price: 100,
            number: 1,
            // sum: 0
        };
    },
    
    // watch和computed各自处理的数据关系场景不同

    // 1.watch擅长处理的场景：一个数据影响多个数据

    // 2.computed擅长处理的场景：一个数据受多个数据影响
    // watch: {
    //     price(){
    //         console.log('价格发生变化')
    //         if(this.price*this.number<1000){
    //             this.sum = this.price*this.number+100;
    //         } else {
    //             this.sum = this.price*this.number;
    //         }
    //     },
    //     number(){
    //         console.log('数量发生变化')
    //         if(this.price*this.number<1000){
    //             this.sum = this.price*this.number+100;
    //         } else {
    //             this.sum = this.price*this.number;
    //         }
    //     },
    // },
    computed: {
        // 存在复杂计算，难以维护的情况下使用计算属性
        computedSum () {
            var sum = 0;
            if(this.price*this.number<1000){
                sum = this.price*this.number+100;
            } else {
                sum = this.price*this.number;
            }
            return sum;
        }
    },
    methods: {

    },
    created() {

    },
    mounted() {

    },
    components: {

    },
};
</script>

<style scoped lang="less">

</style>
