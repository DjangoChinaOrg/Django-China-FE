<template>
  <div>
    <p>以下email地址已关联到您的账号：</p>
    <ul class="email-list">
      <li v-for="item in emailList" :key="item.email">
        <input type="radio" name="radio" :id="item.id" :value="item.id" v-model="picked">
        <span class="email-text">{{item.email}}</span>
        <span v-if="item.verified === true" class="badge badge-success">已验证</span>
        <span v-if="item.primary === true" class="badge badge-primary">首选</span>
      </li>
      <div class="button-group">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li v-if="lastPage > 1" :class="['page-item', { disabled: currentPage === 1 }]">
              <span class="page-link" @click="getPrePageEmails" tabindex="-1">
                上一页
              </span>
            </li>
            <li v-if="lastPage > 1" :class="['page-item', { disabled: currentPage === lastPage }]">
              <span class="page-link" @click="getNextPageEmails" tabindex="-1">
                下一页
              </span>
            </li>
            <button @click.prevent="handleSetPrimaryEmail" type="submit" class="btn btn-primary">设置主邮箱</button>
            <button @click.prevent="handleDeleteEmail" type="submit" class="btn btn-danger">删除邮箱</button>
          </ul>
        </nav>
      </div>
    </ul>
    <h1 class="title">添加Email</h1>
    <form>
      <div class="form-group">
        <label for="newEmail">Email</label>
        <input v-model="newEmail" type="email" class="form-control" id="newEmail" placeholder="请输入新的邮箱地址">
      </div>
      <div class="form-group">
        <label for="verificationCode">验证码</label>
        <input v-model="verificationCode" type="text" class="form-control" id="verificationCode" placeholder="请输入右侧验证码">
      </div>
      <button @click.prevent="handleAddEmail" type="submit" class="btn btn-primary">保存</button>
    </form>
  </div>
</template>
<script>
import { getEmailList, addEmail, setPrimaryEmail, deleteEmail } from '@/api'
// import auth from '@/utils/auth'

export default {
  name: 'EmailSet',
  data () {
    return {
      emailList: [],
      currentPage: 1,
      lastPage: 1,
      targetPage: 1,
      newEmail: '',
      verificationCode: '',
      userId: '',
      picked: ''
    }
  },
  mounted: function () {
    this.userId = localStorage.getItem('userId')
    // console.log(this.userId)
    this.getEmails()
  },
  methods: {
    getEmails () {
      let params = {
        // page_size: 1,
        page: this.targetPage
      }
      getEmailList(params).then(res => {
        this.currentPage = res.data.current_page
        this.lastPage = res.data.last_page
        this.emailList = res.data.data
        // console.log(res.data)
      })
    },
    handleAddEmail () {
      if (this.newEmail.length === 0) {
        return
      }
      let reg = new RegExp('^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$')
      if (!reg.test(this.newEmail)) {
        return
      }
      // TODO 验证码
      let data = {
        'email': this.newEmail
      }
      // TODO 403
      addEmail(data).then(res => {
        console.log(res)
      })
    },
    handleSetPrimaryEmail () {
      if (this.picked.length === 0) {
        return
      }
      // console.log(this.picked)
      setPrimaryEmail(this.picked).then(res => {
        console.log(res)
      })
    },
    handleDeleteEmail () {
      if (this.picked.length === 0) {
        return
      }
      // console.log(this.picked)
      deleteEmail(this.picked).then(res => {
        console.log(res)
      })
    },
    getPrePageEmails () {
      this.targetPage = this.currentPage - 1
      this.getEmails()
    },
    getNextPageEmails () {
      this.targetPage = this.currentPage + 1
      this.getEmails()
    }
  }
}
</script>
<style scoped>
  .email-list {
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
  .button-group {
    margin-top: 1rem;
  }
  .btn-primary{
    margin-left: 0.35rem;
  }
  .email-text {
    font-size: 1.2rem;
    line-height: 1;
  }
</style>
