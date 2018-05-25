<template>
  <div>
    <div class="container">
      <div class="form-box">
        <h1 class="title">注册Django中国</h1>
        <form>
          <div class="form-group row">
            <label for="username" class="col-sm-3 col-form-label">用户名：</label>
            <div class="col-sm-8">
              <input v-model="username" type="text" class="form-control" id="username" placeholder="">
            </div>
          </div>
          <p v-if="'username' in this.msg" class="error-tips">{{msg['username'][0]}}</p>
          <div class="form-group row">
            <label for="email" class="col-sm-3 col-form-label">邮箱：</label>
            <div class="col-sm-8">
              <input v-model="email" type="text" class="form-control" id="email" placeholder="">
            </div>
          </div>
          <p v-if="'email' in this.msg" class="error-tips">{{msg['email'][0]}}</p>
          <div class="form-group row">
            <label for="password1" class="col-sm-3 col-form-label">密码：</label>
            <div class="col-sm-8">
              <input v-model="password1" type="password" class="form-control" id="passwrod1" placeholder="">
            </div>
          </div>
          <p v-if="'password1' in this.msg" class="error-tips">{{msg['password1'][0]}}</p>
          <div class="form-group row">
            <label for="password2" class="col-sm-3 col-form-label">确认密码：</label>
            <div class="col-sm-8">
              <input v-model="password2" type="password" class="form-control" id="passwrod2" placeholder="">
            </div>
          </div>
          <p v-if="'password2' in this.msg" class="error-tips">{{msg['password2'][0]}}</p>
          <p v-if="'non_field_errors' in this.msg" class="error-tips">{{msg['non_field_errors'][0]}}</p>
          <div class="form-group row">
            <div class="col-sm-12 register">
              <button v-on:click="onSubmit($event)" type="submit" class="btn btn-primary btn-sm">注册</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import auth from '@/utils/auth'
import Vue from 'vue'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      email: '',
      password1: '',
      password2: '',
      msg: {
      }
    }
  },
  methods: {
    onSubmit: function (event) {
      event.preventDefault()
      auth.signup({
        username: this.username,
        email: this.email,
        password1: this.password1,
        password2: this.password2
      }).then((res) => {
        Vue.set(this, 'msg', {})
        alert('确认邮件已经发送到您的邮箱。')
      }).catch((error) => {
        Vue.set(this, 'msg', Object.assign({}, JSON.parse(error.request.response)))
      })
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
