<template>
  <div class="wrapper">
    <div class="container clearfix">
      <div class="float-left">
        <router-view></router-view>
      </div>
      <div class="fl side-right">
        <BalanceBoard v-if="this.user.authenticated && this.user.details" v-bind:userId="this.user.details.id"/>
        <Card title="热门标签" :more="true" :moreUrl="'/tags'">
          <router-link v-for="(tag, index) in tags" :to="'/tags/' + tag.id" :key="index">{{tag.name}}</router-link>
        </Card>
        <Card title="热门文章">
          <ul>
            <li v-for="post in popularPosts" :key="post.id">
              <p><router-link :to="'/detail/' + post.id">{{post.title}}</router-link></p>
            </li>
          </ul>
        </Card>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Card from '@/components/Card'
import Footer from '@/components/Footer'
import BalanceBoard from '@/components/Balanceboard'
import { getPopularTags, getPopularPosts } from '@/api'
export default {
  name: 'Home',
  components: {
    Card,
    Footer,
    BalanceBoard
  },
  props: {
    user: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      tags: [],
      popularPosts: [],
      show: false
    }
  },
  methods: {
    handleClick: function () {
      this.show = !this.show
    }
  },
  created: function () {
    getPopularTags().then(res => {
      this.tags = res.data
    })
    getPopularPosts().then(res => {
      this.popularPosts = res.data.data
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
    min-height: 500px;
    background: #fff;
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
    width: 170px;
    height: 30px;
    line-height: 30px;
    text-align: right;
    position: absolute;
    right: 10px;
    top: 30%;
    margin-top: -15px;
  }
  .post-operation-tag{
    padding: 0 3px;
    border-radius: 3px;
  }
  .green-bg{
    background-color: #227a77;
    color: #fff;
    padding: 5px;
  }
  .blue-bg{
    background-color: #3dbbbf;
    color: #fff;
    padding: 5px;
  }
  .post-operation {
    color: #666;
    width: 210px;
    height: 25px;
    text-align: right;
    position: absolute;
    right: 180px;
    top: 60%;
  }
  .post-operation>span{
    border: 1px solid #1a8aeb;
    border-radius: 5px;
    padding: 3px 5px;
    cursor: pointer;
    line-height: 20px;
    color: #1a8aeb;
  }
  .post-operation>span:hover{
    color: #32d6fe;
    border-color: #32d6fe;
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
