<template>
  <div>
    <form>
      <div class="form-group">
        <label for="currentPassword">当前密码</label>
        <input v-model="oldPassword" type="password" class="form-control" id="currentPassword" placeholder="请输入当前密码">
      </div>
      <div class="form-group">
        <label for="newPassword">新密码</label>
        <input v-model="newPassword1" type="password" class="form-control" id="newPassword" placeholder="请输入新密码">
      </div>
      <div class="form-group">
        <label for="repeatPassword">重复密码</label>
        <input v-model="newPassword2" type="password" class="form-control" id="repeatPassword" placeholder="请确认新密码">
      </div>
      <button @click.prevent="handleChangePassword" type="submit" class="btn btn-primary">保存</button>
    </form>
    <div class="dialog-wrapper">
      <Dialog title="提示信息" :visible.sync="dialogVisible">
        <form>
          <span>{{ dialogMessage }}</span>
        </form>
        <span slot="footer">
          <button type="button" class="btn btn-primary" @click.prevent="dialogVisible = false">确定</button>
        </span>
      </Dialog>
    </div>
  </div>
</template>
<script>
import Dialog from '@/components/Dialog'
import { changePassword } from '@/api/users'

export default {
  name: 'ChangePwd',
  data () {
    return {
      msg: '1',
      oldPassword: '',
      newPassword1: '',
      newPassword2: '',
      dialogVisible: false,
      dialogMessage: ''
    }
  },
  methods: {
    handleChangePassword () {
      if (this.oldPassword.length === 0 || this.newPassword1.length === 0 || this.newPassword2.length === 0) {
        this.dialogMessage = '必填字段不能为空'
        this.dialogVisible = !this.dialogVisible
        this.clearVueModel()
        return
      }
      if (this.newPassword1 !== this.newPassword2) {
        this.dialogMessage = '新密码与重复密码不一致'
        this.dialogVisible = !this.dialogVisible
        this.clearVueModel()
        return
      }
      let data = {
        'new_password1': this.newPassword1,
        'new_password2': this.newPassword2,
        'old_password': this.oldPassword
      }
      // console.log(data)
      changePassword(data).then(res => {
        // console.log(res)
        if (res.status === 200) {
          this.dialogMessage = '密码修改成功'
          this.dialogVisible = !this.dialogVisible
          this.clearVueModel()
        } else {
          this.dialogMessage = '密码修改失败'
          this.dialogVisible = !this.dialogVisible
          this.clearVueModel()
        }
      }).catch(() => {
        this.dialogMessage = '密码修改失败'
        this.dialogVisible = !this.dialogVisible
        this.clearVueModel()
      })
    },
    clearVueModel () {
      this.oldPassword = ''
      this.newPassword1 = ''
      this.newPassword2 = ''
    }
  },
  components: {
    Dialog
  }
}
</script>
<style scoped>
  .form-group label {
    margin-bottom: 10px;
  }
</style>
