<template>
  <div class="wrapper">
    <div class="container clearfix">
      <div class="fl left-content">
        <div class="tab">
          <div :class="{active: (currentTab==0)}" @click="handleTabChange(0)">帖子</div>
          <div :class="{active: (currentTab==1)}" @click="handleTabChange(1)">回复</div>
        </div>
        <ul v-show="currentTab == 0" class="content-list">
          <li>
            <h3><router-link to="/detail/3">帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题</router-link></h3>
            <p>138点击<span class="separator">·</span>6回复<span class="separator">·</span>3月前<span class="tags">区块链</span></p>
          </li>
          <li>
            <h3><router-link to="/detail/3">帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题</router-link></h3>
            <p>138点击<span class="separator">·</span>6回复<span class="separator">·</span>3月前<span class="tags">区块链</span></p>
          </li>
          <li>
            <h3><router-link to="/detail/3">帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题</router-link></h3>
            <p>138点击<span class="separator">·</span>6回复<span class="separator">·</span>3月前<span class="tags">区块链</span></p>
          </li>
          <li>
            <h3><router-link to="/detail/3">帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题</router-link></h3>
            <p>138点击<span class="separator">·</span>6回复<span class="separator">·</span>3月前<span class="tags">区块链</span></p>
          </li>
        </ul>
        <ul v-show="currentTab == 1" class="content-list">
          <li>
            <h3 class="title">帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题帖子标题</h3>
            <p>说的有点道理，但是跟实际的差远了</p>
          </li>
        </ul>
      </div>
      <div class="fl side-right">
        <div class="user-info">
          <div class="clearfix avatar-wrap">
            <div class="avatar">
              <img src="../../assets/logo.png" alt="">
            </div>
            <div class="detail">
              <p>Django中国</p>
              <p>第 566 号会员</p>
              <p>2018年3月15日加入</p>
            </div>
          </div>
          <div class="count">
            <span>33 帖子</span>
            <span>|</span>
            <span>56 回复</span>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Dialog from '@/components/Dialog'
import Card from '@/components/Card'
import Footer from '@/components/Footer'
export default {
  name: 'Home',
  components: {
    Dialog,
    Card,
    Footer
  },
  data () {
    return {
      currentTab: 0
    }
  },
  methods: {
    handleTabChange: function (cur) {
      this.currentTab = cur
    }
  }
}
</script>

<style lang="scss" scoped>
  .fl {
    float: left;
  }
  /*右侧边栏*/
  .side-right {
    margin-left: 20px;
  }
  .left-content {
    width: 700px;
    min-height: 600px;
    padding: 10px;
    background: #fff;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.349019607843137);
    .tab {
      height: 35px;
      line-height: 35px;
      border-bottom: 1px solid #ccc;
      cursor: pointer;
      &>div{
        display: inline-block;
        height: 35px;
        padding: 0 15px;
        box-sizing: border-box;
      }
      .active {
        border: 1px solid #ccc;
        background:#fff;
        border-top-right-radius: 3px;
        border-top-left-radius: 3px;
        border-bottom: none;
      }
    }
  }
  .content-list {
    li {
      height: 60px;
      border-bottom: 1px solid #ccc;
    }
    h3 {
      line-height: 30px;
      margin-bottom: 5px;
      a {
        color: #473f3f;
        &:hover {
          text-decoration: none;
          color: rgb(47, 46, 46);
        }
      }
    }
    p {
      color: #473f3f;
    }
    .title {
      font-size: 16px;
      font-weight: bold;
    }
    padding: 10px 0;
    .tags {
      color: #666;
      margin-left: 10px;
    }
  }
  .user-info {
    width: 300px;
    height: 300px;
    padding: 5px 10px;
    background: #fff;
    color: #666;
    box-shadow: border-box;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.349019607843137);
    .avatar-wrap {
      border-bottom: 1px solid #ccc;
      padding-bottom: 5px;
      margin-bottom: 5px;
    }
    .detail {
      height: 100px;
      margin-left: 10px;
      float: left;
      font-size: 14px;
      p {
        line-height: 24px;
      }
    }
    .avatar {
      width: 100px;
      border: 1px solid #ccc;
      float: left;
      img {
        width: 100%;
      }
    }
    .count {
      height: 100px;
      line-height: 100px;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }
  }
</style>
