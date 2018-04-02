<template>
  <div>
    <h1>current post is {{id}}</h1>
  </div>
</template>
<script>
export default {
  name: 'Detail',
  data () {
    return {
      id: this.$route.params.id
    }
  }
}
</script>
<style>

</style>

