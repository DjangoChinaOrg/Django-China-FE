<template>
  <div class="wrapper">
    <Header></Header>
    <div @click="handleClick()">显示modal</div>
    <Dialog title="提示信息" :visible.sync="show">
      <span>{{msg}}</span>
      <span slot="footer">
        <button type="button" class="btn btn-secondary" @click="show = false">取消</button>
        <button type="button" class="btn btn-primary" @click="show = false">确定</button>
      </span>
    </Dialog>
  </div>
</template>
<script>
import Header from '@/components/Header'
import Dialog from '@/components/Dialog'
export default {
  name: 'Home',
  components: {
    Header,
    Dialog
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

<style>
  .wrapper {
    padding-top: 45px;
  }
</style>
