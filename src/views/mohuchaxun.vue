<template>
    <div>
        <input type="text" @input="handleInput()" v-model="myText">
        <ul>
            <li v-for="(data,index) in dataList" :key=index>
                {{ data }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            dataList: ["aaa","bbb","ccc","ddd","eee","add"],
            list: ["aaa","bbb","ccc","ddd","eee","add"],
            myText: ''
        }
    },
    methods: {
        handleInput () {
            // console.log(this.myText)
            this.dataList = this.list.filter((item)=>{
                return item.indexOf(this.myText) >-1
            })
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
    // var arr = [1,2,3,4,5];
    // var newArr = arr.filter((value)=>{
    //     return item.indexOf("a") > -1
    // })
    // console.log(arr)
    // console.log(newArr)
</script>

<style scoped lang="less">

</style>
