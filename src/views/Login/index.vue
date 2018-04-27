<template>
  <div>
    <div class="container">
      <div class="form-box">
        <h1 class="title">登陆Django中国</h1>
        <form>
          <div class="form-group row">
            <label for="username" class="col-sm-3 col-form-label">用户名：</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="username" placeholder="">
            </div>
          </div>
          <div class="form-group row">
            <label for="password" class="col-sm-3 col-form-label">密码：</label>
            <div class="col-sm-8">
              <input type="password" class="form-control" id="passwrod" placeholder="">
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-12 register">
              <button type="submit" class="btn btn-info">登陆</button>
              <button v-on:click="gitHubLogin($event)">GitHub 登陆</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Register',
  data () {
    return {
      msg: '123'
    }
  },
  methods: {
    gitHubLogin (event) {
      event.preventDefault()
      window.open(
      'https://github.com/login/oauth/authorize?client_id=7c9367c9c71111ec1b6c',
      'GitHub登陆',
      'width=600, height=400'
      )
    }
  }
}
</script>
<style scoped lang="scss">
  .container {
    padding-top: 60px;
    .form-box {
      width: 400px;
      margin: 200px auto;
      padding: 10px 20px;
      border-radius: 5px;
      background: #fff;
      .register {
        text-align: center;
      }
    }
    .title {
      height: 50px;
      line-height: 50px;
      text-align: center;
    }
  }
</style>
