<template>
  <div class="container">
    <div class="form-inline">
      <label for="title">标题：</label>
      <input type="text" id="title" class="form-control title" v-model="post.title">
    </div>
    <label>正文：</label>
    <mavon-editor v-model="post.body"></mavon-editor>
    <div class="form-inline mt-10">
      <label class="tag" for="inlineFormInputName2">标签：</label>
      <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="给帖子添加标签" @keydown.enter="handleEnter">
      <button type="submit" class="btn btn-primary mb-2">+</button>
    </div>
    <ul class="tag-list">
      <li v-for="(tag, index) in post.tags" :key="tag">{{tag}} <span @click="handleClose(index)">×</span></li>
    </ul>
    <div class="form-group">
      <button class="btn btn-primary" @click="handleSubmit">发布帖子</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Publish',
  data () {
    return {
      post: {
        title: '',
        body: '',
        tags: ['php', 'java', 'python']
      }
    }
  },
  methods: {
    handleEnter: function (e) {
      let pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*%（）——|{}【】‘；：”“'。，、？]")
      if (pattern.test(e.target.value)) {
        alert('禁止使用特殊字符')
        return
      }
      this.post.tags.push(e.target.value)
      e.target.value = ''
    },
    handleClose: function (i) {
      this.post.tags.splice(i, 1)
    },
    handleSubmit: function () {
      console.log(this.post)
    }
  }
}
</script>

<style scoped lang="scss">
  .container {
    background: #fff;
    padding: 20px;
  }
  label {
    margin-bottom: 10px;
  }
  label[for=tag] {
    margin-top: 10px;
  }
  .form-control {
    margin-bottom: 10px;
  }
  .title {
    width: 95%;
  }
  .mt-10{
    margin-top: 10px;
  }
  .tag-list li {
    display: inline-block;
    position: relative;
    padding: 5px 15px;
    margin-right: 10px;
    background: #ccc;
    border-radius: 3px;
    span {
      position: absolute;
      top: 0;
      right: 0;
      cursor: pointer;
      display: none;
    }
    &:hover span {
      display: block;
    }
  }
  .form-group {
    margin-top: 20px;
    text-align: center;
  }
</style>
