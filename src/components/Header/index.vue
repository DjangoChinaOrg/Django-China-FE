<template>
  <div class="header-box">
    <div class="header">
        <div class="float-left">
          <img src="../../assets/common/logo.png" alt="">
          <span class="name">中文社区</span>
        </div>
        <div class="float-right">
          <div class="search-box">
            <input type="text" class="search">
          </div>
          <div class="log-box">
            <span><a href="">注册</a></span>
            |
            <span><a href="">登陆</a></span>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    handleClick: function () {
      alert(1)
    }
  }
}
</script>

<style lang="scss">
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
    .search-box {
      display: inline-block;
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
</style>
