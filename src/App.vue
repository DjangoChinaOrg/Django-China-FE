<template>
  <div id="app">
    <Header v-bind:user="this.user"/>
    <div class="content">
      <router-view v-bind:user="this.user"/>
    </div>
  </div>
</template>

<script>
import auth from '@/utils/auth'
import Header from '@/components/Header'

export default {
  name: 'App',
  data: function () {
    return {
      user: auth.user
    }
  },
  components: {
    Header
  }
}
</script>

<style>
@import url('https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css');
@import "styles/reset.css";
body {
  background-color: rgba(226, 226, 226, 1);
}
.content {
  padding-top: 50px;
}
.container {
  padding: 10px 40px;
}
</style>
