<template>
  <div>
    <form>
      <div class="form-group">
        <label for="currentPassword">当前密码</label>
        <input type="password" class="form-control" id="currrentPassword" placeholder="请输入当前密码">
      </div>
      <div class="form-group">
        <label for="newPassword">新密码</label>
        <input type="password" class="form-control" id="newPassword" placeholder="请输入新密码">
      </div>
      <div class="form-group">
        <label for="repeatPassword">重复密码</label>
        <input type="password" class="form-control" id="repeatPassword" placeholder="请确认新密码">
      </div>
      <button type="submit" class="btn btn-primary">保存</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'ChangePwd',
  data () {
    return {
      msg: '1'
    }
  }
}
</script>
<style scoped>
  .form-group label {
    margin-bottom: 10px;
  }
</style>
