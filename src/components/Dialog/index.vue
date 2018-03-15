<template>
  <transition name="fade">
    <div v-show="visible">
      <div :class="['modal', 'fade', {'show': show}]" style="display: block" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
      <div class="modal-backdrop fade show"></div>
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
      show: false
    }
  },
  methods: {
    handleCancel: function () {
      this.hide()
    },
    handleSure: function () {
      this.hide()
    },
    handleClose: function () {
      this.hide()
    },
    hide: function () {
      this.show = !this.show
      this.$emit('update:visible', false)
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
      if (val) {
        // document.body.appendChild(this.$el)
        this.timer = setTimeout(() => {
          this.show = true
        }, 300)
      } else {
        this.hide()
        clearTimeout(this.timer)
      }
    }
  },
  mounted: function () {
    document.body.appendChild(this.$el)
  },
  destroyed: function () {
    document.body.removeChild(this.$el)
  }
}
</script>
<style lang="scss">
  .fade-leave-active {
    display: block;
    transition: opacity .5s;
  }
  .fade-enter-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
