<template>
  <div>
    <div class="post-detail">
      <div class="post-header">
        <h1 class="post-title">{{post.title}}</h1>
        <div class="post-info">
          <span>{{author.nickname}}</span><span class="separator"> · </span><span>{{post.views}}</span><span class="separator"> · </span><span>{{post.created}}</span>
        </div>
      </div>
      <div class="post-body">{{post.body}}</div>
    </div>
    <div class="post-comments" :style="{maxHeight: expand?'initial':'550px'}">
      <div class="comments-info">
          {{post.reply_count}}回复/{{post.participants_count}}人参与
          <div class="reply-author" @click="handleReply(post.id)">回复楼主</div>
      </div>
      <ul class="comments-list">
        <li v-for="reply in replies" :key="reply.id">
          <p class="user">
            <span><img v-bind:src="reply.user.mugshot" alt=""></span>
            <span>{{reply.user.nickname}}</span>
          </p>
          <p class="comment">{{reply.comment}}</p>
          <ul class="comments-list inner-comment">
            <li v-for="descendant in reply.descendants" :key="descendant.id">
              <p class="user">
                <span><img v-bind:src="descendant.user.mugshot" alt=""></span>
                <span>{{descendant.user.nickname}}</span>
              </p>
              <p class="comment">{{descendant.comment}}</p>
              <p class="operate">
                <span @click="handleLike(descendant)" :style="{color: descendant.is_liked?'#e23232':''}"><i class="iconfont">&#xe60c;</i> {{descendant.like_count}}</span>
                <span @click="handleReply(descendant.id)"><i class="iconfont">&#xe609;</i> 回复</span>
              </p>
            </li>
          </ul>
          <p class="operate">
            <span @click="handleLike(reply)" :style="{color: reply.is_liked?'#e23232':''}"><i class="iconfont">&#xe60c;</i> {{reply.like_count}}</span>
            <span @click="handleReply(reply.id)"><i class="iconfont">&#xe609;</i> 回复</span>
          </p>
        </li>
      </ul>
    </div>
    <div class="see-more" @click="toggleExpand" v-html="more"><span class="iconfont">&#xe629;</span></div>
    <Dialog title="提示信息" :visible.sync="show">
      <form >
        <textarea name="" id="" cols="63" rows="10" v-model="comment"></textarea>
      </form>
      <span slot="footer">
        <button type="button" class="btn btn-secondary" @click="show = false">取消</button>
        <button type="button" class="btn btn-primary" @click="handleSubmit(post.id)">确定</button>
      </span>
    </Dialog>
  </div>
</template>
<script>
import Dialog from '@/components/Dialog'
import Card from '@/components/Card'
import Footer from '@/components/Footer'
import { getPostDetail, getPostReplies, replies, repliesLike } from '@/api'
export default {
  name: 'Detail',
  components: {
    Dialog,
    Card,
    Footer
  },
  data () {
    return {
      post: {},
      author: {},
      replies: [],
      show: false,
      comment: '',
      currentCommentId: null,
      expand: false
    }
  },
  methods: {
    handleReply: function (id) {
      this.currentCommentId = id
      this.show = !this.show
    },
    handleSubmit: function (id) {
      this.postComment(id)
    },
    postComment: function (postId) {
      replies({object_pk: postId, comment: this.comment, parent: this.currentCommentId}).then(res => {
        this.show = !this.show
      })
    },
    toggleExpand: function () {
      this.expand = !this.expand
    },
    handleLike: function (reply) {
      repliesLike(reply.id).then(res => {
        this.$set(reply, 'is_liked', true)
        this.$set(reply, 'like_count', reply.like_count + 1)
      })
    }
  },
  computed: {
    more: function () {
      return this.expand ? '<span>收起<i class="iconfont">&#xe748;</i></span>' : '<span>展开<i class="iconfont">&#xe629;</i></span>'
    }
  },
  mounted () {
    getPostDetail(this.$route.params.id).then(res => {
      this.post = res.data
      // 单独拿出来的目的是避免vue的一个bug，如果不拿出来会出现一个vue的警告，比较烦人
      this.author = res.data.author
    })
    getPostReplies(this.$route.params.id).then(res => {
      this.replies = res.data.data
    })
  }
}
</script>

<style lang="scss" scoped>
  .fl {
    float: left;
  }
  .modal-dialog {
    max-width: 900px;
  }
  .post-comments {
    width: 765px;
    max-height: 550px;
    overflow: hidden;
    margin-top: 20px;
    background: #fff;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.349019607843137);
  }
  .inner-comment {
    margin-left: 10px;
  }
  .comments-info {
    height: 45px;
    line-height: 45px;
    padding: 0 10px;
    border-bottom: 1px solid #ccc;
    font-size: 14px;
    .reply-author {
      float: right;
      cursor: pointer;
    }
  }
  .comments-list {
    font-size: 14px;
    padding: 10px;
    li {
      padding-bottom: 5px;
      border-bottom: 1px solid #ccc;
      margin-bottom: 5px;
    }
    img {
      width: 30px;
      height: 30px;
      border-radius: 2px;
      vertical-align: middle;
    }
    .user {
      height: 30px;
      line-height: 30px;
    }
    .comment {
      line-height: 24px;
      margin-bottom: 5px;
    }
    .operate {
      color: #666;
      span {
        margin-right: 10px;
        cursor: pointer;
      }
    }
  }
  .post-detail {
    width: 765px;
    min-height: 450px;
    background: #fff;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.349019607843137);
    .post-header {
      padding: 10px 20px 15px;
      border-bottom: 1px solid #ccc;
      .post-info {
        font-size: 14px;
        color: #999;
      }
    }
    .post-body {
      padding: 10px 20px;
      line-height: 25px;
      font-size: 14px;
      img {
        width: 100%;
      }
    }
  }
  .post-title {
    font-weight: bolder;
    height: 40px;
    line-height: 40px;
    margin-bottom: 10px;
    font-size: 20px;
  }
  .post-author {
    font-weight: bolder;
    color: #666;
  }
  .post-view {
    color: #666;
    width: 220px;
    height: 30px;
    line-height: 30px;
    text-align: right;
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -15px;
  }
  .see-more {
    width: 100%;
    height: 35px;
    line-height: 35px;
    background: #fff;
    text-align: center;
    cursor: pointer;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.349019607843137);
  }
</style>
