<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">全部标签</div>
          <div class="card-body">
            <router-link :to="'/tags/' + tag.id" v-for="tag in tagList" :key="tag.id" class="badge badge-primary mt-3 mr-3 p-1">{{tag.name}}</router-link>
          </div>
          <div class="card-footer text-center" v-if="hasMore" @click="loadMore">
             加载更多
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getTagList } from '@/api'
export default {
  name: 'tags',
  data () {
    return {
      tagList: []
    }
  },
  methods: {
    fetchTags: function () {
      getTagList().then(res => {
        this.tagList = res.data.data
        this.currentPage = res.data.current_page
        this.lastPage = res.data.last_page
        this.prevURL = res.data.previous
        this.nextURL = res.data.next
      })
    },
    loadMore: function () {
      if (!this.hasMore()) return
      getTagList(this.currentPage + 1).then(res => {
        this.tagList.push(res.data.data)
        this.currentPage = res.data.current_page
        this.prevURL = res.data.previous
        this.nextURL = res.data.next
      })
    }
  },
  computed: {
    hasMore: function () {
      return this.currentPage < this.lastPage
    }
  },
  created: function () {
    this.fetchTags()
  }
}
</script>
<style>

</style>
