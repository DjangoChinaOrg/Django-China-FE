<template>
  <div>
    <ul class="accnout-list">
      <li v-for="item in providers"
          v-if="item in socialAccounts"
          v-on:click="disconnectSocialAccount(socialAccounts[item].id)"
          :key="item">
        <span><i class="iconfont">&#xe677;</i> {{item}}</span>
        <span class="badge badge-success">已绑定</span>
      </li>
      <li v-else :key="item">
        <span><i class="iconfont">&#xe677;</i> {{item}}</span>
        <span class="badge badge-info">未绑定</span>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from 'vue'
import { getSocialAccounts, disconnectSocialAccount } from '@/api/users'

export default {
  name: 'Account',
  data () {
    return {
      providers: ['github'], // 我们支持的provider列表
      socialAccounts: {}
    }
  },
  mounted: function () {
    this.getSocialAccounts()
  },
  methods: {
    getSocialAccounts () {
      getSocialAccounts().then(res => {
        const data = res.data.data
        const newSocialAccounts = {}
        for (let accountIndex in data) {
          newSocialAccounts[data[accountIndex].provider] = data[accountIndex]
        }
        Vue.set(this, 'socialAccounts', newSocialAccounts)
      })
    },
    disconnectSocialAccount (socialAccountId) {
      disconnectSocialAccount(socialAccountId).then(() => {
        this.getSocialAccounts()
      })
    }
  }
}
</script>
<style scoped>
  .accnout-list {
    padding: 10px;
  }
  .accnout-list li {
    height: 45px;
    line-height: 45px;
    border-bottom: 1px solid #ccc;
  }
</style>
