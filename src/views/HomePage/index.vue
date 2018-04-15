<template>
  <div class="wrapper">
    <div class="container clearfix">
      <div class="fl left-content">
        <div class="tab">
          <div>帖子</div>
          <div>回复</div>
        </div>
        <ul>
          <li>1</li>
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
  /*右侧边栏*/
  .side-right {
    margin-left: 20px;
  }
  .left-content {
    width: 700px;
    height: 600px;
    background: #fff;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.349019607843137);
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
