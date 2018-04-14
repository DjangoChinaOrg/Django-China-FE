<template>
  <div>
    <p>以下email地址已关联到您的账号：</p>
    <ul class="email-list">
      <li>
        <input type="checkbox" name="" id="">
        <span>172564615@qq.com</span>
        <span class="badge badge-success">已验证</span>
        <span class="badge badge-primary">首选</span>
      </li>
    </ul>
    <h1 class="title">添加Email</h1>
    <form>
      <div class="form-group">
        <label for="currentPassword">Email</label>
        <input type="email" class="form-control" id="currrentPassword" placeholder="请输入当前密码">
      </div>
      <div class="form-group">
        <label for="newPassword">验证码</label>
        <input type="text" class="form-control" id="newPassword" placeholder="请输入右侧验证码">
      </div>
      <button type="submit" class="btn btn-primary">保存</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'EmailSet',
  data () {
    return {
      msg: '邮箱设置'
    }
  }  
}
</script>
<style scoped>
  .email-list{
    padding: 10px 5px;
    border-bottom: 1px solid #ccc;
  }
  .form-group label {
    margin-bottom: 10px;
  }
  .title {
    height: 30px;
    line-height: 30px;
    font-size: 24px;
    margin-bottom: 10px;
    text-align: center;
  }
</style>
