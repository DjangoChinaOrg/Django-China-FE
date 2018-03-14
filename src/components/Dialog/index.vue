<template>
  <transition name="fade">
    <div v-show="visible" style="overflow: hidden">
      <div :class="[{'show': visible}, 'modal', 'fade']" style="display: block" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">{{title}}</h5>
              <button type="button" class="close" @click="handleClose()" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <slot></slot>
            </div>
            <div class="modal-footer">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </div>
      <div class="show modal-backdrop fade"></div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    visible: Boolean,
    title: String
  },
  data () {
    return {
      show: this.visible
    }
  },
  methods: {
    handleCancel: function () {
      this.show = !this.show
      this.hide()
    },
    handleSure: function () {
      this.show = !this.show
      this.hide()
    },
    handleClose: function () {
      this.show = !this.show
      this.hide()
    },
    hide: function () {
      this.$emit('update:visible', false)
      document.body.removeChild(this.$refs.modal)
    }
  },
  computed: {
    styleObj: function () {
      return {
        display: this.visible ? 'block' : 'none'
      }
    }
  },
  watch: {
    visible (val) {
      console.log(val)
      if (val) {
        //document.body.appendChild(this.$el)
      } else {
        this.hide()
      }
    }
  },
  mounted: function () {
    console.log(this)
    document.body.appendChild(this.$el)
  },
  destroyed: function () {
    document.body.removeChild(this.$el)
  }
}
</script>
<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
