<template>
  <div class="container">
    <div class="form-inline">
      <label for="title">标题：</label>
      <input type="text" id="title" class="form-control title" v-model="post.title">
    </div>
    <label>正文：</label>
    <mavon-editor ref="md"></mavon-editor>
    <!-- <div class="form-inline mt-10">
      <label class="tag" for="inlineFormInputName2">标签：</label>
      <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="给帖子添加标签" v-model="tag" @keydown.enter="handleEnter">
      <button type="submit" class="btn btn-primary mb-2" @click="handleClick">+</button>
    </div>
    <ul class="tag-list">
      <li v-for="(tag, index) in post.tags" :key="index">{{tag}} <span @click="handleClose(index)">×</span></li>
    </ul> -->
    <div class="form-group">
      <label for="title">标签：</label>
      <select class="custom-select custom-select-sm" multiple v-model="post.tags">
        <option v-for="tag in tagList.data" :key="tag.id">{{tag.name}}</option>
      </select>
    </div>
    <div class="form-group">
      <button class="btn btn-primary" @click="handleSubmit">发布帖子</button>
    </div>
  </div>
</template>

<script>
import { publishPost, getTagList } from '@/api'
export default {
  name: 'Publish',
  data () {
    return {
      tag: '',
      post: {
        title: '',
        body: '',
        tags: []
      },
      tagList: []
    }
  },
  methods: {
    handleEnter: function (e) {
      this.addTag(this.tag)
      this.tag = ''
    },
    handleClose: function (i) {
      this.post.tags.splice(i, 1)
    },
    handleSubmit: function () {
      // console.log(this.$refs.md.d_render)
      this.post.body = this.$refs.md.d_render
      if (!this.post.title) {
        alert('请填写标题')
        return
      }
      if (!this.post.body) {
        alert('请填写正文')
        return
      }
      if (!this.post.tags.length) {
        alert('请填写标签')
        return
      }
      publishPost(this.post).then(res => {
        if (res.status === 201) {
          console.log(res)
          this.$router.push({name: 'detail', params: {id: res.data.id}})
        } else {
          alert('发表文章失败')
        }
      })
    },
    handleClick: function () {
      this.addTag(this.tag)
      this.tag = ''
    },
    addTag: function (str) {
      let pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*%（）——|{}【】‘；：”“'。，、？]")
      if (pattern.test(str)) {
        alert('禁止使用特殊字符')
        return
      }
      if (!str) {
        return
      }
      if (this.post.tags.includes(str)) {
        alert('请勿重复添加')
        return
      }
      this.post.tags.push(str)
    }
  },
  mounted: function () {
    getTagList().then(res => {
      this.tagList = res.data
    })
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
  }
</style>
