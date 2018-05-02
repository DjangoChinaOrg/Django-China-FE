<template>
  <div class="container card">
    <div>
      <p class="h4 font-weight-bold">后端开发</p>
      <div class="row">
        <div class="col-md-3 mt-3" v-for="member in backEnd" :key="member.name">
          <img class="rounded-circle photo" :src="member.photo" alt="">
          <div class="font-weight-bold small mt-1">
            {{member.name}}<span v-if="member.organization">@{{member.organization}}</span>
          </div>
          <div v-if="member.email" class="small mt-1">Email: {{member.email}}</div>
          <div class="small mt-2">
            <a :href="member.website" target="_blank">
              <button class="btn btn-primary btn-sm small">个人网站</button>
            </a>
            <router-link :to="member.forumURL">
              <button class="btn btn-primary btn-sm small">社区资料</button>
            </router-link>
          </div>
        </div>
      </div>
      <hr>
      <p class="h4 font-weight-bold">前端开发</p>
      <div class="row">
        <div class="col-md-3 mt-3" v-for="member in fontEnd" :key="member.name">
          <img class="rounded-circle photo" :src="member.photo" alt="">
          <div class="font-weight-bold small mt-1">
            {{member.name}}<span v-if="member.organization">@{{member.organization}}</span>
          </div>
          <div v-if="member.email" class="small mt-1">Email: {{member.email}}</div>
          <div class="small mt-2">
            <a :href="member.website" target="_blank">
              <button class="btn btn-primary btn-sm small">个人网站</button>
            </a>
            <router-link :to="member.forumURL">
              <button class="btn btn-primary btn-sm small">社区资料</button>
            </router-link>
          </div>
        </div>
      </div>
      <hr>
      <p class="h4 font-weight-bold">产品</p>
      <div class="row">
        <div class="col-md-3 mt-3" v-for="member in pe" :key="member.name">
          <img class="rounded-circle photo" :src="member.photo" alt="">
          <div class="font-weight-bold small mt-1">
            {{member.name}}<span v-if="member.organization">@{{member.organization}}</span>
          </div>
          <div v-if="member.email" class="small mt-1">Email: {{member.email}}</div>
          <div class="small mt-2">
            <a :href="member.website" target="_blank">
              <button class="btn btn-primary btn-sm small">个人网站</button>
            </a>
            <router-link :to="member.forumURL">
              <button class="btn btn-primary btn-sm small">社区资料</button>
            </router-link>
          </div>
        </div>
      </div>
      <hr>
      <p class="h4 font-weight-bold">运维</p>
      <div class="row">
        <div class="col-md-3 mt-3" v-for="member in ops" :key="member.name">
          <img class="rounded-circle photo" :src="member.photo" alt="">
          <div class="font-weight-bold small mt-1">
            {{member.name}}<span v-if="member.organization">@{{member.organization}}</span>
          </div>
          <div v-if="member.email" class="small mt-1">Email: {{member.email}}</div>
          <div class="small mt-2">
            <a :href="member.website" target="_blank">
              <button class="btn btn-primary btn-sm small">个人网站</button>
            </a>
            <router-link :to="member.forumURL">
              <button class="btn btn-primary btn-sm small">社区资料</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      backEnd: [
        {
          photo: require('../../assets/team/AaronZhao.jpg'),
          name: 'Aaron Zhao',
          organization: 'University of Waterloo',
          email: 'zhruyao@163.com',
          website: 'aaron-zhao.com',
          forumURL: 'users/1'
        },
        {
          photo: require('../../assets/team/黄杜立.jpg'),
          name: '黄杜立',
          organization: null,
          email: 'rinka0414@163.com',
          website: 'http://www.cnblogs.com/rinka/',
          forumURL: 'users/1'
        },
        {
          photo: require('../../assets/team/yangxg.jpg'),
          name: '追梦人物',
          organization: 'UESTC',
          email: 'zmrenwu@163.com',
          website: 'https://www.zmrenwu.com/',
          forumURL: 'users/1'
        },
        {
          photo: require('../../assets/team/omit.png'),
          name: '熊翼韬',
          organization: 'BitSight Technology',
          email: null,
          website: 'www.linkedin.com/in/yitao-xiong',
          forumURL: 'users/1'
        },
        {
          photo: require('../../assets/team/yhs.jpg'),
          name: 'YuHosi',
          organization: '温州商学院',
          email: 'yuyuyuhaoshi@163.com',
          website: null,
          forumURL: 'users/1'
        }
      ],

      fontEnd: [
        {
          photo: require('../../assets/team/omit.png'),
          name: '刘祥麟',
          organization: '湖南科技学院',
          email: null,
          website: 'www.superbx.cn',
          forumURL: 'users/1'
        },
        {
          photo: require('../../assets/team/omit.png'),
          name: '熊翼韬',
          organization: 'BitSight Technology',
          email: null,
          website: 'www.linkedin.com/in/yitao-xiong',
          forumURL: 'users/1'
        },
        {
          photo: require('../../assets/team/yangxg.jpg'),
          name: '追梦人物',
          organization: 'UESTC',
          email: 'zmrenwu@163.com',
          website: 'https://www.zmrenwu.com/',
          forumURL: 'users/1'
        },
        {
          photo: require('../../assets/team/yhs.jpg'),
          name: 'YuHosi',
          organization: '温州商学院',
          email: 'yuyuyuhaoshi@163.com',
          website: null,
          forumURL: 'users/1'
        }
      ],
      ops: [
        {
          photo: require('../../assets/team/小宇哥.jpg'),
          name: '小宇哥',
          organization: null,
          email: null,
          website: 'furthergazer.top',
          forumURL: 'users/1'
        }
      ],

      pe: [
        {
          photo: require('../../assets/team/张子铮.jpg'),
          name: '张子铮',
          organization: '触脉（北京）咨询有限公司',
          email: null,
          website: 'furthergazer.top',
          forumURL: 'users/1'
        }
      ]
    }
  }
}
</script>
<style>
  .photo {
    width: 100px;
  }
</style>
