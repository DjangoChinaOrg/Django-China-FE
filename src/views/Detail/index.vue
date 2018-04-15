<template>
  <div class="wrapper">
    <div class="container clearfix">
      <div class="float-left">
        <div class="post-detail">
          <div class="post-header">
            <h1 class="post-title">Django-中文社区，开发团队介绍</h1>
            <div class="post-info">
              <span >Django中文社区</span><span class="separator"> · </span><span>1000点击</span><span class="separator"> · </span><span>1个月前</span>
            </div>
          </div>
          <div class="post-body"></div>
        </div>
        <div class="post-comments"></div>
      </div>
      <div class="fl side-right">
        <div class="sign">
          <span class="icon gold">金</span>999
          <span class="icon silver">银</span>999
          <span class="icon copper">铜</span>999
          <a href="" class="sign-btn">签到</a>
        </div>
        <Card title="热门标签" :more="true">
          <a href="">Python</a>
          <a href="">Django</a>
          <a href="">深度学习</a>
          <a href="">操作系统</a>
          <a href="">前端</a>
          <a href="">Git</a>
          <a href="">区块链</a>
          <a href="">Java</a>
        </Card>
        <Card title="热门文章" :more="true">
          <ul>
            <li>
              <p><router-link to="/detail/1">你的加密货币有价值吗？这里有一个深度学习ICO诈骗鉴别系统</router-link></p>
            </li>
            <li>
              <p><router-link to="/detail/2">你的加密货币有价值吗？这里有一个深度学习ICO诈骗鉴别系统</router-link></p>
            </li>
            <li>
              <p><router-link to="/detail/3">你的加密货币有价值吗？这里有一个深度学习ICO诈骗鉴别系统</router-link></p>
            </li>
            <li>
              <p><router-link to="/detail/4">你的加密货币有价值吗？这里有一个深度学习ICO诈骗鉴别系统</router-link></p>
            </li>
            <li>
              <p><router-link to="/detail/5">你的加密货币有价值吗？这里有一个深度学习ICO诈骗鉴别系统</router-link></p>
            </li>
            <li>
              <p><router-link to="/detail/6">你的加密货币有价值吗？这里有一个深度学习ICO诈骗鉴别系统</router-link></p>
            </li>
            <li>
              <p><router-link to="/detail/7">你的加密货币有价值吗？这里有一个深度学习ICO诈骗鉴别系统</router-link></p>
            </li>
          </ul>
        </Card>
      </div>
    </div>
    <!-- <div @click="handleClick()">显示modal</div>
    <Dialog title="提示信息" :visible.sync="show">
      <span>{{msg}}</span>
      <span slot="footer">
        <button type="button" class="btn btn-secondary" @click="show = false">取消</button>
        <button type="button" class="btn btn-primary" @click="show = false">确定</button>
      </span>
    </Dialog> -->
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
      post_list: ['1', '2'],
      show: false,
      msg: '确定删除当前数据吗'
    }
  },
  methods: {
    handleClick: function () {
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss" scoped>
  .fl {
    float: left;
  }
  .post-comments {
    width: 765px;
    min-height: 300px;
    margin-top: 20px;
    background: #fff;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.349019607843137);
  }
  .post-detail {
    width: 765px;
    min-height: 450px;
    background: #fff;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.349019607843137);
    .post-header {
      padding: 10px 20px 15px;
      border-bottom: 1px solid #ccc;
      .post-info {
        font-size: 14px;
        color: #999;
      }
    }
    .post-body {
      padding: 10px 20px;
      line-height: 25px;
      font-size: 14px;
      img {
        width: 100%;
      }
    }
  }
  .post-title {
    font-weight: bolder;
    height: 40px;
    line-height: 40px;
    margin-bottom: 10px;
    font-size: 20px;
  }
  .post-author {
    font-weight: bolder;
    color: #666;
  }
  .tag {
    padding: 0 3px;
    background: #f5f5f5;
    border-radius: 3px;
    a {
      color: #999;
    }
  }
  .tag:hover {
    background: #e2e2e2;
    color: #666;
  }
  .post-view {
    color: #666;
    width: 220px;
    height: 30px;
    line-height: 30px;
    text-align: right;
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -15px;
  }
  /*右侧边栏*/
  .side-right {
    margin-left: 20px;
  }
  /*签到*/
  .sign {
    width: 275px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    background: inherit;
    background-color: rgba(255, 255, 255, 1);
    border: none;
    border-radius: 0px;
    -moz-box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.349019607843137);
    -webkit-box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.349019607843137);
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3490196078);
  }
  .icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 5px;
    font-size: 14px;
    color: #fff;
    text-align: center;
    border-radius: 50%;
  }
  .gold {
    background: gold;
  }
  .silver {
    background: #8e8e8e;
  }
  .copper {
    background: orangered;
  }
  .sign-btn {
    display: inline-block;
    width: 60px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: rgba(30,144,255,.8);
    color: #fff;
    border-radius: 5px;
    &:hover {
      color: #fff;
      background: rgba(30,144,255,1);
    }
  }
  .hot-tags {
    width: 275px;
    min-height: 220px;
    margin-top: 20px;
    background: #fff;
  }
  .hot-tags-header {
    height: 35px;
    line-height: 35px;
    padding: 0 10px;
    border-bottom: 1px solid #ccc;
    overflow: hidden;
    h3 {
      font-weight: bolder;
      float: left;
    }
    span {
      float: right;
    }
  }
  .tags-box {
    padding: 10px 12px;
    a {
      display: inline-block;
      padding: 5px 10px;
      margin: 0 5px 5px 0;
      border-radius: 5px;
      background: #fff;
      font-size: 12px;
    }
  }
  .contact-us {
    text-align: center;
    padding-bottom: 10px;
    img {
      width: 50px;
      height: 50px;
    }
  }
</style>
