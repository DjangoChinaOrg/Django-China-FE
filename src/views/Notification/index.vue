<template>
  <div class="container">
    <div class="notice-wrap">
      <div class="notice-title">消息列表</div>
      <ul class="notice-list">
        <li>
          <span><router-link to="/user/123">隔壁老王</router-link></span>
          <span> 回复了 </span>
          <span><router-link to="/detail/2">你的加密货币有价值吗？这里有一个深度学习ICO诈骗鉴别系统</router-link></span>
          <!-- <span class="down"><i class="iconfont">&#xe629;</i></span> -->
          <span class="reply-content">Re: 讲的确实很不错</span>
          <span class="date">14:35</span>
        </li>
        <li>
          <span><router-link to="/user/123">隔壁老王</router-link></span>
          <span> 回复了 </span>
          <span><router-link to="/detail/2">你的加密货币有价值吗？这里有一个深度学习ICO诈骗鉴别系统</router-link></span>
          <!-- <span class="down"><i class="iconfont">&#xe629;</i></span> -->
          <span class="reply-content">Re: 讲的确实很不错</span>
          <span class="date">14:35</span>
        </li>
        <li>
          <span><router-link to="/user/123">隔壁老王</router-link></span>
          <span> 回复了 </span>
          <span><router-link to="/detail/2">你的加密货币有价值吗？这里有一个深度学习ICO诈骗鉴别系统</router-link></span>
          <!-- <span class="down"><i class="iconfont">&#xe629;</i></span> -->
          <span class="reply-content">Re: 讲的确实很不错讲的确实很不错讲的确实很不错讲的确实很不错讲的确实很不错讲的确实很不错讲的确实很不错</span>
          <span class="date">14:35</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getNoticeList, deleteNotice, makeSingleNoticeAsRead, makeAllNoticesAsRead } from '@/api'
export default {
  name: 'Notification',
  data () {
    return {
      msg: 111,
      notifications: []
    }
  },
  mounted () {
    this.getNotifications()
  },
  methods: {
    getNotifications (parms) {
      getNoticeList().then(res => {
        // console.log(res)
        this.notifications = res.data.data
        // console.log(this.notifications)
      })
    },
    deleteNotification (id) {
      deleteNotice(id).then(res => {
        console.log(res.status)
      })
    },
    mekeAllNotificationAsRead () {
      makeAllNoticesAsRead().then(res => {
        console.log(res.status)
      })
    },
    mekeSingleNotificationsAsRead (id) {
      makeSingleNoticeAsRead(id).then(res => {
        console.log(res.status)
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .notice-wrap {
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.349019607843137);
  }
  .notice-list {
    background: #fff;
    padding: 0 10px;
    li {
      height: 45px;
      line-height: 45px;
      border-bottom: 1px solid #ccc;
      &:last-child {
        border-bottom: none;
      }
    }
    span {
      display: inline-block;
      overflow: hidden;
    }
    .down {
      float: right;
      margin-right: 10px;
      height: 100%;
      cursor: pointer;
    }
    .date {
      color: #777;
      float: right;
      margin-right: 10px;
      font-size: 12px;
    }
    .reply-content {
      display: inline-block;
      font-size: 14px;
      color: #999;
      width: 400px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .notice-title {
    height: 45px;
    line-height: 45px;
    padding-left: 10px;
    font-weight: bold;
    background: #ccc;
  }
</style>
