<template>
  <div>
    <h1>ID: {{this.id}}</h1>
    <h1>Username: {{this.username}}</h1>
    <h1>Nickname: {{this.nickname}}</h1>
    <h1>Email: {{this.email}}</h1>
  </div>
</template>
<script>
import { getUserDetails } from '@/api/users'
export default {
  name: 'User',
  data () {
    return {
      'id': '',
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
      'replyCount': 0
    }
  },
  methods: {
    fetchUserDetails: function (userId) {
      getUserDetails(userId).then(res => {
        this.id = res.data.id
        this.username = res.data.username
        this.nickname = res.data.nickname
        this.email = res.data.email
        this.dateJoined = res.data.dateJoined
        this.mugshotUrl = res.data.mugshotUrl
        this.ipJoined = res.data.ipJoined
        this.lastLoginIp = res.data.last_login_ip
        this.isSuperuser = res.data.is_superuser
        this.isStaff = res.data.is_staff
        this.postCount = res.data.post_count
        this.replyCount = res.data.reply_count
      })
    }
  },
  mounted: function () {
    this.fetchUserDetails(this.$route.params.id)
  }
}
</script>
<style>

</style>
