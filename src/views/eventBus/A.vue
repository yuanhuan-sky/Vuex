<template>
  <div>
    {{message}}
    <button @click="handleClick">test</button>
  </div>
</template>

<script>
import bus from '../../utils/eventBus'

export default {
  data () {
    return {
      message: 'this is content here'
    }
  },
  props: {
    con: {
      type: String
    }
  },
  components: {
    // descripe
  },
  methods: {
    handleClick () {
      bus.$emit('getDate', 'brathers!')
    }
  }
}
</script>