<template>
  <div>
    <h1>user infomation current userid: {{id}}</h1>
  </div>
</template>
<script>
export default {
  name: 'User',
  data () {
    return {
      msg: 'user page',
      id: this.$route.params.id
    }
  }
}
</script>
<style>

</style>

