<template>
  <div :class="{active: startProgress}" class="c-progress">
    <div ref="indicator" class="indicator"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      startProgress: false
    }
  },
  props: {
    active: {
      type: Boolean
    }
  },
  emits: ['onFinish'],
  methods: {
    emitOnFinish () {
      this.$emit('onFinish')
    }
  },
  mounted () {
    setTimeout(() => {
      this.startProgress = this.active
    }, 0)
    this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
  },
  beforeUnmount () {
    this.$refs.indicator.removeEventListener('transitionend', this.emitOnFinish)
  },
  watch: {
    active () {
      this.startProgress = !this.startProgress
    }
  }
}
</script>

<style src="./progress.scss" lang="scss" scoped></style>
