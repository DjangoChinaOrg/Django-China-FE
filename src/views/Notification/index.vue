<template>
  <div class="container">
    <div class="notice-wrap">
      <div class="notice-title">
        消息列表
        <span class="button-box">
          <span class="notice-make-all-as-read-button" @click="markAllNotificationAsRead()">全部标记已读</span>
        </span>
        <span class="button-box classification">
            <span :class="{ active: unread === 'all' }" @click="getAllNotifications">全部</span><span :class="{ active: unread === 'false' }" @click="getReadNotifications">已读</span><span :class="{ active: unread === 'true' }" @click="getUnreadNotifications">未读</span>
        </span>
      </div>
      <ul class="notice-list">
        <li v-for="item in notifications" :key="item.id">
          <span><router-link :to="userLink(item.actor.id)">{{ item.actor.nickname }}</router-link></span>
          <span> {{ formatVerbLike(item.verb) }} </span>
          <span><router-link :to="detailLink(item.post.post_id)">{{ item.post.post_title }}</router-link></span>
          <span> {{ formatVerbComment(item.verb) }} </span>
          <!-- <span class="down"><i class="iconfont">&#xe629;</i></span> -->
          <span class="reply-content" :title="item.reply.comment">Re: {{ item.reply.comment }}</span>
          <span class="button-box" v-if="item.unread === true">
            <span @click="markSingleNotificationsAsRead(item.id)">标记已读</span><span @click="showDeleteDialog(item.id)">删除</span>
          </span>
          <span class="button-box" v-if="item.unread === false">
            <span @click="showDeleteDialog(item.id)">删除</span>
          </span>
          <span class="date">{{ getNotificationTime(item.timestamp) }}</span>
        </li>
        <li v-if="lastPage > 1"></li>
        <!--<li>-->
          <!--<span><router-link to="/user/123">隔壁老王</router-link></span>-->
          <!--<span> 回复了 </span>-->
          <!--<span><router-link to="/detail/2">你的加密货币有价值吗？这里有一个深度学习ICO诈骗鉴别系统</router-link></span>-->
          <!--&lt;!&ndash; <span class="down"><i class="iconfont">&#xe629;</i></span> &ndash;&gt;-->
          <!--<span class="reply-content">Re: 讲的确实很不错讲的确实很不错讲的确实很不错讲的确实很不错讲的确实很不错讲的确实很不错讲的确实很不错</span>-->
          <!--<span class="date">14:35</span>-->
        <!--</li>-->
      </ul>
      <div class="paginator" v-if="lastPage > 1">
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li :class="['page-item', { disabled: currentPage === 1 }]">
              <span class="page-link" @click="getPrePageNotifications" tabindex="-1">
                上一页
              </span>
            </li>
            <li :class="['page-item', { disabled: currentPage === lastPage }]">
              <span class="page-link" @click="getNextPageNotifications" tabindex="-1">
                下一页
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="dialog-wrapper">
      <Dialog title="提示信息" :visible.sync="confirmDeleteDialogVisible">
        <form>
          <span>是否删除</span>
        </form>
        <span slot="footer">
          <button type="button" class="btn btn-secondary" @click="confirmDeleteDialogVisible = false">取消</button>
          <button type="button" class="btn btn-primary" @click="sureDelete">确定</button>
        </span>
      </Dialog>
    </div>
    <div class="dialog-wrapper">
      <Dialog title="提示信息" :visible.sync="messageDialogVisible">
        <form>
          <span>{{ dialogMessage }}</span>
        </form>
        <span slot="footer">
          <button type="button" class="btn btn-primary" @click.prevent="messageDialogVisible = false">确定</button>
        </span>
      </Dialog>
    </div>
  </div>
</template>

<script>
import Dialog from '@/components/Dialog'
import { getNoticeList, deleteNotice, markSingleNoticeAsRead, markAllNoticesAsRead } from '@/api'

export default {
  name: 'Notification',
  data () {
    return {
      msg: 111,
      notifications: [],
      deleteNotificationId: -1,
      confirmDeleteDialogVisible: false,
      unread: 'all',
      currentPage: 1,
      lastPage: 1,
      targetPage: 1,
      messageDialogVisible: false,
      dialogMessage: ''
    }
  },
  mounted () {
    this.getNotifications()
  },
  methods: {
    getNotificationTime (time) {
      let notificationDate = time.substring(0, 10)
      let notificationYear = notificationDate.split('-')[0]
      let notificationMonth = notificationDate.split('-')[1]
      let notificationDay = notificationDate.split('-')[2]
      let date = new Date()

      if (date.getFullYear() - notificationYear === 0 && (date.getMonth() + 1) - notificationMonth === 0 && date.getDate() - notificationDay === 0) {
        return time.substring(11, 15)
      } else {
        return notificationDate
      }
    },
    getNotifications () {
      let params = {
        unread: this.unread,
        page: this.targetPage
      }
      getNoticeList(params).then(res => {
        console.log(res.data)
        this.notifications = res.data.data
        this.currentPage = res.data.current_page
        this.lastPage = res.data.last_page
        // console.log(this.currentPage)
        // console.log(this.lastPage)
      })
    },
    getAllNotifications () {
      this.unread = 'all'
      this.getNotifications()
    },
    getUnreadNotifications () {
      this.unread = 'true'
      this.getNotifications()
    },
    getReadNotifications () {
      this.unread = 'false'
      this.getNotifications()
    },
    getPrePageNotifications () {
      this.targetPage = this.currentPage - 1
      this.getNotifications()
    },
    getNextPageNotifications () {
      this.targetPage = this.currentPage + 1
      this.getNotifications()
    },
    deleteNotification (id) {
      deleteNotice(id).then(res => {
        if (res.status === 204) {
          // this.getNotifications()
          this.deleteFromArray(this.notifications, (item) => {
            return item.id === id
          })
        } else {
          this.dialogMessage = '删除失败'
          this.messageDialogVisible = !this.messageDialogVisible
        }
      }).catch(() => {
        this.dialogMessage = '删除失败'
        this.messageDialogVisible = !this.messageDialogVisible
      })
    },
    markAllNotificationAsRead () {
      markAllNoticesAsRead().then(res => {
        if (res.status === 200) {
          // this.getNotifications()
          this.notifications = []
        } else {
          this.dialogMessage = '全部标记已读失败'
          this.messageDialogVisible = !this.messageDialogVisible
        }
      }).catch(() => {
        this.dialogMessage = '全部标记已读失败'
        this.messageDialogVisible = !this.messageDialogVisible
      })
    },
    markSingleNotificationsAsRead (id) {
      if (this.unread === 'false') {
        return
      }
      markSingleNoticeAsRead(id).then(res => {
        // console.log(res)
        if (res.status === 200) {
          // this.getNotifications()
          this.deleteFromArray(this.notifications, (item) => {
            return item.id === id
          })
        } else {
          this.dialogMessage = '标记已读失败'
          this.messageDialogVisible = !this.messageDialogVisible
        }
      }).catch(() => {
        this.dialogMessage = '标记已读失败'
        this.messageDialogVisible = !this.messageDialogVisible
      })
    },
    formatVerbLike (verb) {
      if (verb === 'like') {
        return '赞了你在文章'
      } else {
        return '在'
      }
    },
    formatVerbComment (verb) {
      if (verb === 'like') {
        return '的评论'
      } else {
        return '文章下评论了你'
      }
    },
    userLink (id) {
      return `/user/${id}`
    },
    detailLink (id) {
      return `/detail/${id}`
    },
    showDeleteDialog (id) {
      this.deleteNotificationId = id
      this.confirmDeleteDialogVisible = !this.confirmDeleteDialogVisible
    },
    sureDelete () {
      this.confirmDeleteDialogVisible = false
      this.deleteNotification(this.deleteNotificationId)
    },
    deleteFromArray (arr, compare) {
      const index = arr.findIndex(compare)
      if (index > -1) {
        arr.splice(index, 1)
      }
    }
  },
  components: {
    Dialog
  }
}
</script>

<style scoped lang="scss">
  .notice-wrap {
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.349019607843137);
    .button-box {
      float: right;
      display: inline-block;
      padding: 0 10px;
      margin-top: 7px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border-radius: 5px;
      font-weight: 700;
      font-size: 14px;
      color: #0056b3;
    }
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
      width: 200px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .button-box {
      border: 1px solid #ccc;
      span:nth-child(2) {
        margin-left: 10px;
        padding-left: 10px;
        border-left: 1px solid #ccc;
      }
      .disabled {
        color: #212529;
      }
    }
  }
  .notice-title {
    height: 45px;
    line-height: 45px;
    padding-left: 10px;
    font-weight: bold;
    background: #ccc;
    .button-box {
      margin-right: 10px;
      border: 1px solid #ccc;
      background: #fff;
      padding: 0 10px;
      .active {
        color: #212529;
      }
    }
    .classification>span {
      margin-right: 10px;
      padding-right: 10px;
      border-right: 1px solid #ccc;
      &:last-child {
        margin-right: 0;
        padding-right: 0;
        border-right: none;
      }
    }
  }
</style>
