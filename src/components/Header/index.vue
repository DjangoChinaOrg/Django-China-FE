<template>
  <div class="header-box">
    <div class="header">
        <div class="float-left logo">
          <router-link to="/">
            <img src="../../assets/common/logo.png" alt="">
            <span class="name">中文社区</span>
          </router-link>
        </div>
        <div class="right-box">
          <div class="search-box">
            <input type="text" class="search">
            <button class="btn btn-primary btn-sm search-btn"><i class="iconfont">&#xe63d;</i></button>
          </div>
          <button type="button" class="btn btn-primary btn-sm">
            <router-link to="/add">+ 发帖</router-link>
          </button>
          <div class="notice">
            <router-link to="/notification"><i class="iconfont">&#xe634;</i><span class="badge badge-danger">5</span></router-link>
          </div>
          <div class="avatar">
              <img src="../../assets/logo.png" alt="">
              <div class="dropdown">
                <div><router-link to="/homepage"><i class="iconfont">&#xe679;</i> 我的主页</router-link></div>
                <div><router-link to="/profile/basic"><i class="iconfont">&#xe675;</i> 设置</router-link></div>
                <div><a href=""><i class="iconfont">&#xe6e3;</i> 退出</a></div>
              </div>
          </div>
          <template v-if="this.user.authenticated && this.user.details">
            <div class="log-box">
              <h2>{{ this.user.details.nickname }}</h2>
            </div>
            <span><a href="" v-on:click="onLogout">登出</a></span>
          </template>
          <template v-else>
            <div class="log-box">
              <span><router-link to="/signup">注册</router-link></span>
              |
              <span><router-link to="/login">登陆</router-link></span>
            </div>
          </template>
        </div>
    </div>
  </div>
</template>

<script>
import auth from '@/utils/auth'

export default {
  name: 'Header',
  props: {
    user: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      auth: auth.user.authenticated
    }
  },
  methods: {
    handleClick: function () {
      alert(1)
    },
    onLogout: function () {
      auth.logout()
    }
  }
}
</script>

<style lang="scss" scoped>
  .name {
      font-weight: bolder;
  }
  .header-box {
      width: 100%;
      height: 45px;
      background: #fff;
      position: absolute;
      left: 0;
      top: 0;
      .header {
          display: flex;
          width: 1120px;
          height: 100%;
          align-items: center;
          justify-content: space-between;
          line-height: 45px;
          margin: 0 auto;
      }
  }
  .right-box {
    height: 45px;
    line-height: 45px;
  }
  .right-box > div {
    display: inline-block;
  }
  .avatar {
    width: 40px;
    height: 100%;
    cursor: pointer;
    position: relative;
    img {
      width: 80%;
      vertical-align: middle;
    }
    &:hover {
      .dropdown {
        display: block;
      }
    }
  }
  .dropdown {
    display: none;
    position: absolute;
    left: -30px;
    top: 45px;
    width: 110px;
    padding: 5px 0;
    background: #fff;
    box-shadow: 0 2px 20px rgba(26,26,26,.1);
    border-radius: 2px;
    &>div {
      height: 30px;
      line-height: 30px;
      padding: 0px 10px;
      transition: all 0.3s ease;
      &:hover {
        background: #ccc;
      }
    }
  }
  .search {
    width: 300px;
    height: 30px;
    background: inherit;
    background-color: rgba(242, 242, 242, 1);
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(204, 204, 204, 1);
    border-radius: 5px;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .search-box {
    position: relative;
  }
  .search-btn {
    position: absolute;
    height: 30px;
    right: 1px;
    top: 7px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .log-box {
    display: inline-block;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-weight: 700;
    font-size: 14px;
    color: #092D1F;
  }
  .logo {
    img {
      vertical-align: -9px;
    }
  }
  a:hover {
    text-decoration: none;
  }
  .notice .badge {
    position: relative;
    top: -10px;
    left: -6px;
  }
  .btn {
    vertical-align: 1px;
  }
  .btn a {
    color: #fff;
  }
</style>
