<template>
  <div class="hot-tags">
    <div class="hot-tags-header">
      <h3>{{title}}</h3>
      <router-link :to="moreUrl" v-if="more">全部>></router-link>
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
    more: Boolean,
    moreUrl: {
      type: String,
      required: false
    }
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
    min-height: 220px;
    margin-top: 20px;
    background: #fff;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.349019607843137);
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
    span,a{
      float: right;
    }
  }
</style>
