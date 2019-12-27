<template>
  <div>
    {{message}}
    <p v-for="(item,index) in meslist" :key="index">{{item}}</p>
  </div>
</template>

<script>
import bus from '../../utils/eventBus'
export default {
  data () {
    return {
      message: '',
      meslist: []
    }
  },
  created () {
    bus.$on('getDate', (val) => {
      console.log(val)
      this.message = val
      // this.meslist.push(val)
    })
  },
  beforeDestroy () {
    // 组件销毁前需要解绑事件。否则会出现重复触发事件的问题!!!!!!!!!!!!!
    bus.$off('getDate')
  }
}
</script>