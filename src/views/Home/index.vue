<template>
  <div class="wrapper">
    <div class="container clearfix">
      <ul class="post-list float-left">
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
                <span class="tag" :key="'tag' + tag.id + 1"><router-link to="/tag/1">{{tag.name}}</router-link></span>
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
              <li v-bind:key="pageNumber" v-for="pageNumber in lastPage" class="page-item">
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
      <div class="fl side-right">
        <BalanceBoard v-if="this.user.authenticated" v-bind:userId="this.user.details.id"/>
        <Card title="热门标签" :more="true">
          <router-link v-for="(tag, index) in tags" :to="'tag' + tag.id" :key="index">{{tag.name}}</router-link>
        </Card>
        <Card title="热门文章" :more="true">
          <ul>
            <li v-for="post in pupolarPosts" :key="post.id">
              <p><router-link :to="'/detail/' + post.id">{{post.title}}</router-link></p>
            </li>
          </ul>
        </Card>
      </div>
    </div>
    <!-- <div @click="handleClick()">显示modal</div>
    <Dialog title="提示信息" :visible.sync="show">
      <span>{{msg}}</span>
      <span slot="footer">
        <button type="button" class="btn btn-secondary" @click="show = false">取消</button>
        <button type="button" class="btn btn-primary" @click="show = false">确定</button>
      </span>
    </Dialog> -->
    <Footer />
  </div>
</template>
<script>
import Dialog from '@/components/Dialog'
import Card from '@/components/Card'
import Footer from '@/components/Footer'
import BalanceBoard from '@/components/Balanceboard'
import { getPostList, getPopularTags, getPopularPosts } from '@/api'
export default {
  name: 'Home',
  components: {
    Dialog,
    Card,
    Footer,
    BalanceBoard
  },
  props: {
    user: Object
  },
  data () {
    return {
      post_list: [],
      tags: [],
      pupolarPosts: [],
      currentPage: 1,
      lastPage: 1,
      show: false
    }
  },
  methods: {
    handleClick: function () {
      this.show = !this.show
    },
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
  mounted: function () {
    this.fetchPosts(this.currentPage)
    getPopularTags().then(res => {
      this.tags = res.data
    })
    getPopularPosts().then(res => {
      this.pupolarPosts = res.data.data
    })
  }
}
</script>

<style lang="scss">
  .fl {
    float: left;
  }
  .post-list {
    width: 765px;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.349019607843137);
    li {
      position: relative;
      height: 70px;
      padding: 5px 10px;
      background-color: rgba(255, 255, 255, 1);
      border-bottom: 1px solid #ccc;
      .thumb {
        width: 50px;
        height: 50px;
        margin-right: 10px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .paginator {
    height: 45px;
    line-height: 45px;
    padding-left: 20px;
    background: #fff;
    font-size: 14px;
    ul li {
      height: initial;

      .active {
        background: #efefef;
      }
    }
  }
  .post-title {
    font-weight: bolder;
    height: 25px;
    line-height: 25px;
    margin-bottom: 10px;
  }
  .post-author {
    font-weight: bolder;
    color: #666;
  }
  .tag {
    padding: 0 3px;
    background: #f5f5f5;
    border-radius: 3px;
    a {
      color: #999;
    }
  }
  .tag:hover {
    background: #e2e2e2;
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
  /*右侧边栏*/
  .side-right {
    margin-left: 20px;
  }
  .icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 5px;
    font-size: 14px;
    color: #fff;
    text-align: center;
    border-radius: 50%;
  }
  .hot-tags {
    width: 275px;
    min-height: 220px;
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
      padding: 5px 10px;
      margin: 0 5px 5px 0;
      border-radius: 5px;
      background: #fff;
      font-size: 12px;
    }
  }
  .contact-us {
    text-align: center;
    padding-bottom: 10px;
    img {
      width: 50px;
      height: 50px;
    }
  }
</style>
