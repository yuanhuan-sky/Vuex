<template>
    <div class="box">
        <ul>
            <li v-for="data in datalist" :key="data.id">
                <!-- {{ data }} -->
                <input type="checkbox" v-model="checkgroup" :value="data" @change="handleClick">
                {{ data }}
                <button @click="data.number++">add</button>
                <span>{{ data.number }}</span>
                <button @click="data.number--">reduce</button>
            </li>
        </ul>
        {{ checkgroup }}
        <p>总金额价值: {{ getSum() }}</p>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
              checkgroup:[],
              isAllChecked:false,
              sum:0,
              datalist:[
                {
                  name:"商品1",
                  price:10,
                  number:1,
                  id:"1",
                  // url:"https://www.baidu.com/img/bd_logo1.png?qua=high"
                },
                {
                  name:"商品2",
                  price:20,
                  number:2,
                  id:"2",
                  // url:"https://www.baidu.com/img/bd_logo1.png?qua=high"
                },
                {
                  name:"商品3",
                  price:30,
                  number:3,
                  id:"3",
                  // url:"https://www.baidu.com/img/bd_logo1.png?qua=high"
                }

              ]
        };
    },
    methods: {
        handleClick () {
            console.log('handleClick')
        },
        getSum() {
            // var sum = 0;
            // for(var i in this.checkgroup){
            //     sum+=this.checkgroup[i].number*this.checkgroup[i].price;
            // }
            // return sum;
            var mysum = 0;
            for(var i=0;i<this.checkgroup.length;i++){
              mysum += this.checkgroup[i].number*this.checkgroup[i].price;
            }

            // this.sum = mysum;
            return mysum; 

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
