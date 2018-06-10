<template>
  <div class="wrapper">
    <div class="container clearfix">
      <div class="fl left-content">
        <div class="tab">
          <div :class="{active: (currentTab==0)}" @click="handleTabChange(0)">帖子</div>
          <div :class="{active: (currentTab==1)}" @click="handleTabChange(1)">回复</div>
        </div>
        <ul v-show="currentTab == 0" class="content-list">
          <li v-for="post in posts" :key="post.id">
            <h3 class="title"><router-link :to="'/detail/' + post.id">{{ post.title }}</router-link></h3>
            <p>{{post.views}}点击<span class="separator">·</span>{{ post.reply_count }}回复<span class="separator">·</span>3月前
              <router-link v-for="tag in post.tags" :key="tag.id" :to="'/tags/' + tag.id"><span class="tag mr-2">{{tag.name}}</span></router-link>
            </p>
          </li>
          <li class="text-center" v-if="postHasMore">
            <a class="btn btn-link" @click="loadMorePosts(userId)">加载更多</a>
          </li>
        </ul>
        <ul v-show="currentTab == 1" class="mt-2">
          <li v-for="reply in replies" :key="reply.id">
            <h3 class="font-weight-bold"><router-link :to='"/detail/" + reply.post.id'>{{reply.post.title}}</router-link></h3>
            <p class="mark p-2">{{reply.comment}}</p>
            <hr>
          </li>
          <li class="text-center" v-if="replyHasMore">
            <a class="btn btn-link" @click="loadMoreReplies(userId)">加载更多</a>
          </li>
        </ul>
      </div>
      <div class="fl side-right">
        <div class="user-info">
          <div class="clearfix avatar-wrap">
            <div class="avatar">
              <img src="../../assets/logo.png" alt="">
            </div>
            <div class="detail">
              <p>{{nickname}}</p>
              <p>第 {{userId}} 号会员</p>
              <p>{{dateJoined.split('.')[0].replace('T', ' ')}}加入</p>
            </div>
          </div>
          <div class="count">
            <span>{{ postCount }} 帖子</span>
            <span>|</span>
            <span>{{ replyCount }} 回复</span>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Dialog from '@/components/Dialog'
import Card from '@/components/Card'
import Footer from '@/components/Footer'
import { getUserDetails, getUserPosts, getUserReplies } from '@/api/users'
export default {
  name: 'User',
  data () {
    return {
      currentTab: 0,
      userId: '',
      'username': '',
      'nickname': '',
      'email': '',
      'dateJoined': '',
      'mugshotUrl': '',
      'ipJoined': null,
      'lastLoginIp': null,
      'isSuperuser': false,
      'isStaff': false,
      'postCount': 0,
      'replyCount': 0,
      posts: [],
      replies: [],
      replyCurrentPage: 1,
      replyLastPage: 1,
      postCurrentPage: 1,
      postLastPage: 1
    }
  },
  components: {
    Dialog,
    Card,
    Footer
  },
  computed: {
    replyHasMore: function () {
      return this.replyCurrentPage < this.replyLastPage
    },
    postHasMore: function () {
      return this.postCurrentPage < this.postLastPage
    }
  },
  methods: {
    handleTabChange: function (cur) {
      this.currentTab = cur
      if (cur === 1) {
        this.fetchUserReplies(this.$route.params.id)
      }
    },
    loadMoreReplies: function (userId) {
      getUserReplies(userId, this.replyCurrentPage + 1).then(res => {
        this.replies.push(...res.data.data)
        this.replyCurrentPage = this.replyCurrentPage + 1
      })
    },
    loadMorePosts: function (userId) {
      getUserPosts(userId, this.postCurrentPage + 1).then(res => {
        this.posts.push(...res.data.data)
        this.postCurrentPage = this.postCurrentPage + 1
      })
    },
    fetchUserDetails: function (userId) {
      getUserDetails(userId).then(res => {
        this.userId = res.data.id
        this.username = res.data.username
        this.nickname = res.data.nickname
        this.email = res.data.email
        this.dateJoined = res.data.date_joined
        this.mugshotUrl = res.data.mugshotUrl
        this.ipJoined = res.data.ipJoined
        this.lastLoginIp = res.data.last_login_ip
        this.isSuperuser = res.data.is_superuser
        this.isStaff = res.data.is_staff
        this.postCount = res.data.post_count
        this.replyCount = res.data.reply_count
      })
    },
    fetchUserPosts: function (userId) {
      getUserPosts(userId, this.postCurrentPage).then(res => { this.posts = res.data.data })
    },
    fetchUserReplies: function (userId) {
      getUserReplies(userId, this.replyCurrentPage).then(res => {
        this.replies = res.data.data
        this.replyCurrentPage = res.data.current_page
        this.replyLastPage = res.data.last_page
      })
    }
  },
  mounted: function () {
    this.fetchUserPosts(this.$route.params.id)
    this.fetchUserDetails(this.$route.params.id)
  }
}
</script>

<style lang="scss" scoped>
  .fl {
    float: left;
  }
  /*右侧边栏*/
  .side-right {
    margin-left: 20px;
  }
  .left-content {
    width: 700px;
    min-height: 600px;
    padding: 10px;
    background: #fff;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.349019607843137);
    .tab {
      height: 35px;
      line-height: 35px;
      border-bottom: 1px solid #ccc;
      cursor: pointer;
      &>div{
        display: inline-block;
        height: 35px;
        padding: 0 15px;
        box-sizing: border-box;
      }
      .active {
        border: 1px solid #ccc;
        background:#fff;
        border-top-right-radius: 3px;
        border-top-left-radius: 3px;
        border-bottom: none;
      }
    }
  }
  .content-list {
    li {
      height: 60px;
      border-bottom: 1px solid #ccc;
    }
    h3 {
      line-height: 30px;
      margin-bottom: 5px;
      a {
        color: #473f3f;
        &:hover {
          text-decoration: none;
          color: rgb(47, 46, 46);
        }
      }
    }
    p {
      color: #473f3f;
    }
    .title {
      font-size: 16px;
      font-weight: bold;
    }
    padding: 10px 0;
    .tags {
      color: #666;
      margin-left: 10px;
    }
  }
  .user-info {
    width: 300px;
    height: 300px;
    padding: 5px 10px;
    background: #fff;
    color: #666;
    box-shadow: border-box;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.349019607843137);
    .avatar-wrap {
      border-bottom: 1px solid #ccc;
      padding-bottom: 5px;
      margin-bottom: 5px;
    }
    .detail {
      height: 100px;
      margin-left: 10px;
      float: left;
      font-size: 14px;
      p {
        line-height: 24px;
      }
    }
    .avatar {
      width: 100px;
      border: 1px solid #ccc;
      float: left;
      img {
        width: 100%;
      }
    }
    .count {
      height: 100px;
      line-height: 100px;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }
  }
</style>
