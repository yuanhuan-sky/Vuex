<template>
    <div class="box">
        <input type="checkbox" v-model="isAllChecked" @change="handleChange">全选
        <ul>
            <li v-for="data in datalist" :key="data.id">
                <!-- {{ data }} -->
                <!-- <input type="checkbox" v-model="checkgroup" :value="data" @change="handleChange"> -->
                <input type="checkbox" v-model="checkgroup" :value="data" @change="handleItemChange">
                {{ data }}
                <button @click="data.number++">add</button>
                <!-- <span>{{ data.number }}</span> -->
                <span><input type="number" v-model="data.number"></span>
                <!-- <button @click="data.number--">reduce</button> -->
                <button @click="handleReaduce(data)">reduce</button>
            </li>
        </ul>
        {{ checkgroup }}
        <p>总金额价值: {{ getSum() }}</p>
        <h1>计算属性总金额{{ getComputedSum }}</h1>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
              message: 'Hello',
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
        handleItemChange () {
          console.log('handleItemChange')
          if(this.checkgroup.length===this.datalist.length){
            this.isAllChecked = true;
          }else {
            this.isAllChecked = false;
          }
        },
        handleReaduce(data){
          data.number--
          if(data.number===0){
            data.number=1
          }
        },
        handleChange () {
            console.log('handleChange',this.isAllChecked)
            if(this.isAllChecked){
              this.checkgroup=this.datalist
            }else {
              this.checkgroup = [];
            }
        },
        getSum() {
            var mysum = 0;
            for(var i=0;i<this.checkgroup.length;i++){
              mysum += this.checkgroup[i].number*this.checkgroup[i].price;
            }
            return mysum; 
        }
    },
    computed: {
      reversedMessage: function () {
        return this.message.split('').reverse().join('')
      },
      getComputedSum() {
            var mysum = 0;
            for(var i=0;i<this.checkgroup.length;i++){
              mysum += this.checkgroup[i].number*this.checkgroup[i].price;
            }
            return mysum; 
        }
    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    components: {

    },
}
</script>

<style scoped lang="less">

</style>
