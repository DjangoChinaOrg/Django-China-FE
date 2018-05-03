<template>
  <ul class="post-list">
    <li v-for="post in post_list" :key="post.id">
      <div class="fl thumb">
        <img :src="post.author.mugshot" alt="">
      </div>
      <div class="fl post-info">
        <p class="post-title"><router-link :to="'/detail/' + post.id">{{post.title}}</router-link></p>
        <p class="post-tag">
          <span class="post-author"><router-link :to="'/user/' + post.author.id">{{post.author.nickname}}</router-link></span>
          <span class="separator">·</span>
          <template v-for="(tag, index) in post.tags">
            <span class="tag" :key="'tag' + tag.id + 1"><router-link :to="'/tag/' + tag.id">{{tag.name}}</router-link></span>
            <span v-if="index !== post.tags.length-1" class="separator" :key="index">·</span>
          </template>
        </p>
      </div>
      <div class="post-view">
        <span>{{post.views}} 点击 </span><span class="separator">·</span><span> {{post.reply_count}} 回复 </span><span class="separator">·</span><span> 三天前</span>
      </div>
    </li>
    <div v-if="lastPage > 1" class="paginator">
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li :class="['page-item', { disabled: currentPage === 1 }]">
            <a v-on:click="changePage(currentPage - 1, $event)" class="page-link" href="#" tabindex="-1">
              上一页
            </a>
          </li>
          <li v-for="pageNumber in lastPage" class="page-item" :key="pageNumber">
            <a v-on:click="changePage(pageNumber, $event)" :class="['page-link', { active: pageNumber === currentPage }]" href="#">
              {{pageNumber}}
            </a>
          </li>
          <li :class="['page-item', { disabled: currentPage === lastPage }]">
            <a v-on:click="changePage(currentPage + 1, $event)" class="page-link" href="#" tabindex="-1">
              下一页
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </ul>
</template>

<script>
import { getPostList } from '@/api'
export default {
  name: 'HomeChild',
  data () {
    return {
      post_list: [],
      pupolarPosts: [],
      currentPage: 1,
      lastPage: 1
    }
  },
  methods: {
    fetchPosts: function (pageNumber) {
      getPostList(this.currentPage).then(res => {
        this.post_list = res.data.data
        this.lastPage = res.data.last_page
      })
    },
    changePage: function (pageNumber, event) {
      event.preventDefault()
      this.currentPage = pageNumber
      this.fetchPosts(pageNumber)
    }
  },
  created: function () {
    this.fetchPosts(this.currentPage)
  }
}
</script>

<style>

</style>
