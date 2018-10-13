<template>
  <div>
    <ul class="account-list">
      <li v-for="item in providers"
          v-if="item in socialAccounts"
          v-on:click="disconnectSocialAccount(socialAccounts[item].id)"
          class="connected-account"
          :key="item">
        <span><i class="iconfont">&#xe677;</i> {{item}}</span>
        <span class="badge badge-success">已绑定（点击解除绑定）</span>
      </li>
      <li v-else :key="item"
          v-on:click="connectSocialAccount(item)"
          class="unconnected-account"
      >
        <span><i class="iconfont">&#xe677;</i> {{item}}</span>
        <span class="badge badge-info">未绑定（点击绑定）</span>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from 'vue'
import auth from '@/utils/auth'
import { getSocialAccounts, disconnectSocialAccount } from '@/api/users'

export default {
  name: 'Account',
  data () {
    return {
      providers: ['github'], // 我们支持的provider列表
      providerDetails: {
        github: {
          displayName: 'GitHub',
          url: 'https://github.com/login/oauth/authorize?client_id=7c9367c9c71111ec1b6c',
          connectFunction: auth.gitHubConnect
        }
      },
      socialAccounts: {}
    }
  },
  mounted: function () {
    this.getSocialAccounts()
  },
  methods: {
    getQueryParameter (url, name) {
      if (!url) url = window.location.href
      name = name.replace(/[[\]]/g, '\\$&')
      var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
      var results = regex.exec(url)
      if (!results) return null
      if (!results[2]) return ''
      return decodeURIComponent(results[2].replace(/\+/g, ' '))
    },
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
    },
    connectSocialAccount (provider) {
      event.preventDefault()
      var _this = this
      var win = window.open(
        _this.providerDetails[provider].url,
        '连接' + _this.providerDetails[provider].displayName + '账号',
        'width=600, height=400'
      )
      var pollTimer = window.setInterval(function () {
        try {
          console.log(win.document.URL)
          if (win.document.URL.indexOf(
            'social-auth/' + provider + '/loginsuccess'
          ) !== -1) {
            window.clearInterval(pollTimer)
            var url = win.document.URL
            var accessCode = _this.getQueryParameter(url, 'code')
            win.close()
            _this.providerDetails[provider].connectFunction(accessCode).then(() => {
              _this.getSocialAccounts()
            })
          }
        } catch (e) {
          console.log(e)
        }
      }, 100)
    }
  }
}
</script>
<style scoped>
  .account-list {
    padding: 10px;
  }
  .account-list li {
    height: 45px;
    line-height: 45px;
    border-bottom: 1px solid #ccc;
  }
  .account-list li.connected-account, .account-list li.unconnected-account {
    cursor: pointer;
  }
</style>
