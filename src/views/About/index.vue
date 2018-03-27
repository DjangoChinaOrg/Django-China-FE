<template>
  <div>
      <h1>关于我们 {{msg}}</h1>
  </div>
</template>
<script>
import Card from '@/components/Card'
export default {
 name: 'About',
  components: {
    Card
  },
  data () {
    return {
      msg: 'Django中文社区'
    }
  },
  methods: {
    
  }
}
</script>
<style>

</style>
