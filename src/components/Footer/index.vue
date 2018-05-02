<template>
  <div class="footer">
    <div class="container">
      <div class="links">
        <a href="">关于</a>
        <a href="">联系我们</a>
        <a href="">我们的愿景</a>
        <router-link :to="'/team'">我们的团队</router-link>
      </div>
      <div class="we">
        <p>Django 中国</p>
        <p>做最好的中文教程</p>
      </div>
      <div class="zhihu-weixin">
        <img src="../../assets/common/zhihu.jpg" alt="">
        <img src="../../assets/common/weixin.jpg" alt="">
      </div>
      <p class="copyright">copyright©Django中国</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  data () {
    return {
      msg: '底部'
    }
  }
}
</script>
<style lang="scss" scoped>
  .container {
    padding: 10px 40px;
  }
  .footer {
    background: #fff;
    width: 100%;
    height: 220px;
    .links {
      padding: 10px 0;
      font-weight: bold;
      a {
        margin-left: 10px;
        &:nth-child(1) {
          margin: 0;
        }
      }
    }
  }
  .we {
    color: #666;
    font-size: 14px;
    p {
      line-height: 20px;
    }
  }
  .zhihu-weixin {
    margin-top: 10px;
    img {
      width: 80px;
    }
  }
  .copyright {
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    color: #666;
  }
</style>
