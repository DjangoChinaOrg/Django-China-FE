<template>
  <div>
    <ul class="accnout-list">
      <li>
        <span><i class="iconfont">&#xe677;</i> github</span>
        <span class="badge badge-success">已绑定</span>
      </li>
      <li>
        <span><i class="iconfont">&#xe635;</i> github</span>
        <span class="badge badge-info">未绑定</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Account',
  data () {
    return {
      msg: '账号关联'
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
