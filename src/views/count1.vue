<template>
  <div class="home">
    <h1>我是count1页面</h1>
    <h1>我是页面上直接获取的值：{{ this.$store.state.count }}</h1>
    <h1>我是从getters获取的计算后的值：{{ this.$store.getters.getStateCount }}</h1>
    <!-- <h1>我是从getters获取的计算后的值：{{ count }}</h1> -->
    <button @click="add">点击+1</button>
    <button @click="reduce">点击-1</button>
    <h1>我是...mapState的值: {{ count }} </h1>
    <h1>我是...mapGetters的值: {{ getStateCount }}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState,mapGetters,mapActions } from 'vuex';
export default {
  name: 'home',
  data () {
    return {

    }
  },
  computed: {
    ...mapState (['count']),
    ...mapGetters (['getStateCount'])
  },
  methods: {
    ...mapActions (['addFun','reduceFun']),
    add () {
      // this.$store.commit("add")
      // this.$store.dispatch("addFun")
      this.addFun()

    },
    reduce () {
      // this.$store.commit("reduce")
      var n = 10;
      // this.$store.dispatch("reduceFun",n)
      this.reduceFun(n)
    }
  }
}

  var arr = [1,2,3,4,5];
  var arr2 = ['aaa','bbb','add'];
  // var newArr = arr.filter(item=> item>3)
  var newArr = arr2.filter(item=> item.indexOf('a')!=-1)
  console.log(newArr)
</script>
