<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css');
body {
  background-color: rgba(226, 226, 226, 1);
}
.container {
  padding: 10px 0;
}
</style>
