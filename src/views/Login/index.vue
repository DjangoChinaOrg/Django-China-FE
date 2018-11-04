<template>
  <div>
    <div class="container">
      <div class="form-box">
        <h1 class="title">登陆Django中国</h1>
        <form>
          <div class="form-group row">
            <label for="username" class="col-sm-3 col-form-label">用户名：</label>
            <div class="col-sm-8">
              <input v-model="username" type="text" class="form-control" id="username" placeholder="">
            </div>
          </div>
          <div class="form-group row">
            <label for="password" class="col-sm-3 col-form-label">密码：</label>
            <div class="col-sm-8">
              <input v-model="password" type="password" class="form-control" id="password" placeholder="">
            </div>
          </div>
          <p class="error-tips">{{msg['non_field_errors'][0]}}</p>
          <div class="form-group row">
            <div class="col-sm-12 register">
              <button v-on:click="onSubmit($event)" type="submit" class="btn btn-primary btn-sm">账号登陆</button>
              <button v-on:click="gitHubLogin($event)" class="btn btn-info btn-sm">GitHub 登陆</button>
              <a :href="forgetPasswordUrl" class="btn btn-danger btn-sm">忘记密码</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import auth from '@/utils/auth'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      msg: {
        non_field_errors: []
      },
      forgetPasswordUrl: 'http://api.dj-china.org/accounts/password/reset/'
    }
  },
  methods: {
    onSubmit: function (event) {
      event.preventDefault()
      auth.login({
        username: this.username,
        password: this.password
      }).catch((error) => {
        this.msg = error.response.data
      })
    },
    getQueryParameter (url, name) {
      if (!url) url = window.location.href
      name = name.replace(/[[\]]/g, '\\$&')
      var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
      var results = regex.exec(url)
      if (!results) return null
      if (!results[2]) return ''
      return decodeURIComponent(results[2].replace(/\+/g, ' '))
    },
    gitHubLogin (event) {
      event.preventDefault()
      var _this = this
      var win = window.open(
        'https://github.com/login/oauth/authorize?client_id=7c9367c9c71111ec1b6c',
        'GitHub登陆',
        'width=600, height=400'
      )
      var pollTimer = window.setInterval(function () {
        try {
          console.log(win.document.URL)
          if (win.document.URL.indexOf('social-auth/github/loginsuccess') !== -1) {
            window.clearInterval(pollTimer)
            var url = win.document.URL
            var accessCode = _this.getQueryParameter(url, 'code')
            win.close()
            auth.gitHubLogin(accessCode)
          }
        } catch (e) {
          console.log(e)
        }
      }, 100)
    }
  }
}
</script>
<style scoped lang="scss">
  .container {
    padding-top: 60px;
    .error-tips {
      height: 20px;
      line-height: 20px;
      text-align: center;
      margin-top: -10px;
      margin-bottom: 10px;
      color: #dc1616;
    }
    .form-box {
      width: 400px;
      margin: auto;
      padding: 10px 20px;
      border-radius: 5px;
      background: #fff;
      .register {
        text-align: left;
      }
    }
    .title {
      height: 50px;
      line-height: 50px;
      text-align: center;
    }
  }
</style>
