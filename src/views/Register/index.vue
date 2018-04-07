<template>
  <div>
    <Header></Header>
    <div class="container">
      <div class="form-box">
        <form>
          <div class="form-group row">
            <label for="username" class="col-sm-3 col-form-label">用户名：</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="username" placeholder="">
            </div>
          </div>
          <div class="form-group row">
            <label for="email" class="col-sm-3 col-form-label">邮箱：</label>
            <div class="col-sm-9">
              <input type="email" class="form-control" id="email" placeholder="">
            </div>
          </div>
          <div class="form-group row">
            <label for="password" class="col-sm-3 col-form-label">密码：</label>
            <div class="col-sm-9">
              <input type="password" class="form-control" id="passwrod" placeholder="">
            </div>
          </div>
          <div class="form-group row">
            <label for="repassword" class="col-sm-3 col-form-label">确认密码：</label>
            <div class="col-sm-9">
              <input type="password" class="form-control" id="repassword" placeholder="">
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-12 register">
              <button type="submit" class="btn btn-info">注册</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'Register',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      msg: '123'
    }
  }
}
</script>
<style scoped lang="scss">
  .container {
    padding-top: 60px;
    .form-box {
      width: 500px;
      height: 300px;
      margin: 200px auto;
      padding: 20px;
      border-radius: 5px;
      background: #fff;
      .register {
        text-align: center;
      }
    }
  }
</style>
