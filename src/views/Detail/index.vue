<template>
  <div>
    <div class="post-detail">
      <div class="post-header">
        <h1 class="post-title">{{post.title}}</h1>
        <div class="post-info">
          <span>{{post.author.nickname}}</span><span class="separator"> · </span><span>{{post.views}}</span><span class="separator"> · </span><span>{{post.created}}</span>
        </div>
      </div>
      <div class="post-body">{{post.body}}</div>
    </div>
    <div class="post-comments">
      <div class="comments-info">
          {{post.reply_count}}回复/{{post.participants_count}}人参与
          <div class="reply-author" @click="onClickReply(post.id)">回复楼主</div>
      </div>
      <ul class="comments-list">
        <li v-for="reply in replies" :key="reply.id">
          <p class="user">
            <span><img v-bind:src="reply.user.mugshot" alt=""></span>
            <span>{{reply.user.nickname}}</span>
          </p>
          <p class="comment">{{reply.comment}}</p>
          <ul class="comments-list">
            <li v-for="descendant in reply.descendants" :key="descendant.id">
              <p class="user">
                <span><img v-bind:src="descendant.user.mugshot" alt=""></span>
                <span>{{descendant.user.nickname}}</span>
              </p>
              <p class="comment">{{descendant.comment}}</p>
            </li>
          </ul>
          <p class="operate">
            <span><i class="iconfont">&#xe60c;</i> {{reply.like_count}}</span>
            <span @click="onClickReply(reply.id)"><i class="iconfont">&#xe609;</i> 回复</span>
          </p>
        </li>
      </ul>
    </div>
    <Dialog title="提示信息" :visible.sync="showReplyModal">
      <form >
        <input v-model="newReply.body" type="text" class="form-control" placeholder="写下你的评论...">
      </form>
      <span slot="footer">
        <button type="button" class="btn btn-secondary" @click="showReplyModal = false">取消</button>
        <button type="button" class="btn btn-primary" @click="onSubmitReply()">确定</button>
      </span>
    </Dialog>
    <Footer />
  </div>
</template>
<script>
import Dialog from '@/components/Dialog'
import Card from '@/components/Card'
import Footer from '@/components/Footer'
import { getPostDetail, getPostReplies, publishReply } from '@/api'
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
      replies: [],
      showReplyModal: false,
      newReply: {
        postId: '',
        body: ''
      }
    }
  },
  methods: {
    fetchPostDetail: function () {
      getPostDetail(this.$route.params.id).then(res => {
        this.post = res.data
      }).then(() => {
        getPostReplies(this.post.id).then(res => {
          this.replies = res.data.data
        })
      })
    },
    onClickReply: function (postId) {
      this.newReply = {
        postId,
        body: ''
      }
      this.showReplyModal = true
    },
    onSubmitReply: function () {
      publishReply(this.newReply.postId, this.newReply.body).then(() => {
        this.showReplyModal = false
        this.fetchPostDetail()
      })
    }
  },
  mounted () {
    this.fetchPostDetail()
  }
}
</script>

<style lang="scss" scoped>
  .fl {
    float: left;
  }
  .post-comments {
    width: 765px;
    min-height: 300px;
    margin-top: 20px;
    background: #fff;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.349019607843137);
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
</style>
