<template>
  <ul class="post-list">
    <li v-for="post in postList" :key="post.id">
      <div class="fl thumb">
        <router-link :to="'/user/' + post.author.id"><img :src="post.author.mugshot" alt=""></router-link>
      </div>
      <div class="fl post-info">
        <p class="post-title">
          <router-link :to="'/detail/' + post.id">{{post.title}}</router-link>
          <span class="badge badge-primary" v-if="post.highlighted">精</span>
          <span class="badge badge-info" v-if="post.pinned">顶</span>
        </p>
        <p class="post-tag">
          <span class="post-author"><router-link :to="'/user/' + post.author.id">{{post.author.nickname}}</router-link></span>
          <span class="separator">·</span>
          <template v-for="(tag, index) in post.tags">
            <span class="tag" :key="'tag' + tag.id + 1"><router-link :to="'/tags/' + tag.id">{{tag.name}}</router-link></span>
            <span v-if="index !== post.tags.length-1" class="separator" :key="index">·</span>
          </template>
        </p>
        <p v-if="user.details&&user.details.isSuperuser" class="post-operation">
          <span @click="handlePinPost(post)">
            <span v-if="post.pinned">取消置顶</span>
            <span v-else>置顶</span>
          </span>
          <span @click="handleHighlightPost(post)">
            <span v-if="post.highlighted">取消加精</span>
            <span v-else>加精</span>
          </span>
          <span @click="handleHidePost(post)">
            <span>隐藏</span>
          </span>
        </p>
      </div>
      <div class="post-view">
        <span>{{post.views}} 点击 </span>
        <span class="separator">·</span>
        <span> {{post.reply_count}} 回复 </span>
        <p> {{post.created.split('.')[0].replace('T', ' ')}}</p>
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
import auth from '@/utils/auth'
import { getPostList, managePost } from '@/api'
export default {
  name: 'HomeChild',
  data () {
    return {
      postList: [],
      currentPage: 1,
      lastPage: 1,
      user: auth.user
    }
  },
  methods: {
    sortPosts: function compare (a, b) {
      if (a.latest_reply_time === null && b.latest_reply_time === null) {
        return new Date(b.created) - new Date(a.created)
      } else {
        return new Date(b.latest_reply_time) - new Date(a.latest_reply_time)
      }
    },
    fetchPosts: function (pageNumber) {
      getPostList(this.currentPage).then(res => {
        this.postList = res.data.data
        this.lastPage = res.data.last_page
      })
    },
    changePage: function (pageNumber, event) {
      event.preventDefault()
      this.currentPage = pageNumber
      this.fetchPosts(pageNumber)
    },
    handlePinPost: function (post) {
      let vm = this
      let isPinned = !post.pinned
      managePost(post.id, {'pinned': isPinned}).then(res => {
        post.pinned = isPinned
        /** 对某个帖子进行"置顶/取消置顶"操作后，按照"置顶、-最近回复时间、-创建时间"对帖子进行排序
            实现如下：1.对于"置顶"操作，成功后将所有置顶的帖子按照"-最近回复时间、-创建时间"排序后，其后面拼接所有未置顶帖子
                    2.对于"取消置顶"操作，成功后将所有未置顶帖子按照"-最近回复时间、-创建时间"排序后，其前面拼接所有置顶帖子
         **/
        let index = vm.postList.indexOf(post)
        if (index > -1) {
          vm.postList.splice(index, 1)
        }
        if (isPinned) {
          vm.postList.unshift(post)
          let allPinned = vm.postList.filter(function (val) {
            return val.pinned
          })
          allPinned.sort(vm.sortPosts)
          vm.postList = allPinned.concat(vm.postList.slice(allPinned.length))
        } else {
          vm.postList.push(post)
          let allUnpinned = vm.postList.filter(function (val) {
            return !val.pinned
          })
          allUnpinned.sort(vm.sortPosts)
          vm.postList = vm.postList.slice(0, vm.postList.length - allUnpinned.length).concat(allUnpinned)
        }
      })
    },
    handleHighlightPost: function (post) {
      let isHighlighted = !post.highlighted
      managePost(post.id, {'highlighted': isHighlighted}).then(res => {
        post.highlighted = isHighlighted
      })
    },
    handleHidePost: function (post) {
      let vm = this
      managePost(post.id, {'hidden': false}).then(res => {
        let index = vm.postList.indexOf(post)
        if (index > -1) {
          vm.postList.splice(index, 1)
        }
      })
    }
  },
  created: function () {
    this.fetchPosts(this.currentPage)
  }
}
</script>

<style>
.post-operation span {
  cursor: pointer;
}
</style>
