<template>
  <div>
    <Header/>
    <div class="container clearfix">
      <div class="left-box">
        <ul>
          <li><router-link to="/profile/basic" active-class="active"><i class="iconfont">&#xe679;</i> 基本资料</router-link></li>
          <li><router-link to="/profile/basic"><i class="iconfont">&#xe611;</i> 修改密码</router-link></li>
          <li><router-link to="/profile/basic"><i class="iconfont">&#xe600;</i> 邮箱设置</router-link></li>
          <li><router-link to="/profile/basic"><i class="iconfont">&#xe675;</i> 账号关联</router-link></li>
        </ul>
      </div>
      <div class="right-box">
        <div class="profile">
          <div class="thumb">
            <div class="img-box">
              <img src="../../assets/logo.png" alt="">
            </div>
            <p class="username">Django 中国</p>
          </div>
          <div class="profile-box">
            <div class="profile-item">
              昵称: <input type="text" name="" id="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header'
export default {
  name: 'Profile',
  components: {
    Header
  },
  data () {
    return {
      msg: '你好'
    }
  }
}
</script>
<style scoped lang="scss">
  .container {
    padding: 60px 20px;
  }
  .left-box {
    float: left;
    width: 275px;
    background: #fff;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.349019607843137);
    ul {
      li {
        border-bottom: 1px solid #ccc;
        &:last-child {
            border: none
          }
        a {
          display: block;
          height: 50px;
          line-height: 50px;
          padding: 0 10px;
          color: #000;
          &.active {
            background: #f2f2f2;
          }
          &:hover {
            text-decoration: none;
          }
        }
      }
    }
  }
  .right-box {
    float: left;
    width: 765px;
    height: 800px;
    margin-left: 20px;
    background: #fff;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.349019607843137);
    padding: 20px 10px;
  }
  .thumb {
    text-align: center;
    border-bottom: 1px solid #ccc;
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
    .username {
      padding: 10px 0;
      font-weight: bold;
    }
  }
  .profile-box {
    padding: 20px 10px;
  }
</style>
