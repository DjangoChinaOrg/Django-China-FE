<template>
  <div>
    <div class="profile">
      <div class="thumb">
        <div class="img-box">
          <img :src="formatMugshotUrl" alt="">
        </div>
        <p class="err-message text text-danger" v-if="mugshotErrMessage">{{ mugshotErrMessage }}</p>
        <p class="username" v-html="user.nickname"></p>
        <form>
          <label for="mugshot" class="upload-btn"><i class="iconfont">&#xe618;</i>上传头像</label>
          <input type="file" class="upload" id="mugshot" accept="image/*" @change="handleChangeMugShot">
        </form>
      </div>
      <div class="profile-box">
        <form>
          <div class="form-group">
            <label for="username">用户名</label>
            <input :placeholder="user.username" type="email" class="form-control" disabled id="username">
          </div>
          <div class="form-group">
            <label for="nickname">昵称</label>
            <input v-model="user.nickname" type="text" class="form-control" id="nickname">
          </div>
          <button @click.prevent="handleChangeNickname" type="submit" class="btn btn-primary">修改</button>
        </form>
      </div>
    </div>
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
import { getUserDetails, changeNickname, changeMugShot } from '@/api/users'
import Dialog from '@/components/Dialog'

export default {
  name: 'Basic',
  data () {
    return {
      userId: '',
      user: '',
      dialogVisible: false,
      dialogMessage: '',
      mugshotErrMessage: ''
    }
  },
  mounted: function () {
    this.userId = localStorage.getItem('userId')
    getUserDetails(this.userId).then(res => {
      this.user = res.data
    })
  },
  computed: {
    formatMugshotUrl: function () {
      return `http://api.dj-china.org${this.user.mugshot_url}`
    }
  },
  methods: {
    handleChangeNickname () {
      if (this.user.nickname.length === 0) {
        this.dialogMessage = '昵称不能为空'
        this.dialogVisible = !this.dialogVisible
        return
      }
      let data = {
        'nickname': this.user.nickname
      }
      changeNickname(this.userId, data).then(res => {
        if (res.status === 200) {
          this.dialogMessage = '昵称修改成功'
          this.dialogVisible = !this.dialogVisible
          this.user = res.data
        } else {
          this.dialogMessage = '昵称修改失败'
          this.dialogVisible = !this.dialogVisible
        }
      }).catch(() => {
        this.dialogMessage = '昵称修改失败'
        this.dialogVisible = !this.dialogVisible
      })
    },

    handleChangeMugShot (e) {
      let curFile = e.target.files[0]
      let formData = new FormData()
      formData.append('mugshot', curFile)
      changeMugShot(formData, this.userId).then(res => {
        console.log(res.data)
        this.user.mugshot_url = res.data.mugshot_url
        this.mugshotErrMessage = ''
      }).catch(err => {
        console.log(err.response.data.mugshot)
        this.mugshotErrMessage = err.response.data.mugshot[0]
      })
    }
  },
  components: {
    Dialog
  }
}
</script>
<style lang="scss" scoped>
  .thumb {
    text-align: center;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    .img-box {
      width: 150px;
      height: 150px;
      margin: 0 auto;
      border: 2px solid rgba(0,0,0,.3);
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .err-message {
      margin-top: 15px;
    }
    .username {
      padding: 10px 0;
      font-weight: bold;
    }
  }
  .profile-box {
    padding: 20px 10px;
  }
  .form-group label {
    margin-bottom: 10px;
  }
  .upload {
    appearance: none;
    display:none;
  }
  .upload-btn {
    padding: 5px 10px;
    border: 1px solid #ccc;
  }
</style>
