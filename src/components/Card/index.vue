<template>
  <div class="hot-tags">
    <div class="hot-tags-header">
      <h3>{{title}}</h3>
      <span v-if="more">全部>></span>
    </div>
    <div class="tags-box">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    title: String,
    more: Boolean
  },
  data () {
    return {
      mag: '123'
    }
  }
}
</script>
<style lang="scss">
  .hot-tags {
    width: 275px;
    height: 220px;
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
    padding: 10px 15px;
    margin: 0 5px 5px 0;
    border-radius: 5px;
    background: #e3e3e3;
  }
  }
</style>
