<template>
  <div>
      <h1>GitHub登陆成功</h1>
  </div>
</template>
<script>
export default {
  name: 'github-login-success',
  methods: {
    getQueryParameter (url, name) {
      name = name.replace(/[[]/,"\[").replace(/[]]/,"\]");
      var regexS = "[\?&]"+name+"=([^&#]*)";
      var regex = new RegExp( regexS );
      var results = regex.exec( url );
      if( results == null )
        return "";
      else
        return results[1];
    }
  },
  created () {
    console.log(this.getQueryParameter(document.URL, 'code'))
  }
}
</script>
<style>

</style>
