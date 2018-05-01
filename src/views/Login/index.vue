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
              <input v-model="password" type="password" class="form-control" id="passwrod" placeholder="">
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-12 register">
              <button v-on:click="onSubmit($event)" type="submit" class="btn btn-info">登陆</button>
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
      msg: ''
    }
  },
  methods: {
    onSubmit: function (event) {
      event.preventDefault()
      auth.login({
        username: this.username,
        password: this.password
      }).catch((error) => {
        this.msg = error
        console.log(error)
      })
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
