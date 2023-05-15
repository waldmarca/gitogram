<template>
  <button
    :class="['button', { active: isOpened }]"
    @click="toggle"
  >
    <span class="text">{{ isOpened ? 'Hide' : 'Show' }} issues</span>
    <span class="icon">
      <icon name="triangle" />
    </span>
  </button>
</template>

<script>
import icon from '../icons/variants/triangle.vue'
export default {
  components: {
    icon
  },
  data () {
    return {
      isOpened: false,
      shown: false
    }
  },
  methods: {
    toggle () {
      this.isOpened = !this.isOpened
      this.$emit('onToggle', this.isOpened)
    }
  }
}
</script>

<style lang="sass" scoped>
.button
  display: inline-flex
  align-items: center
  padding: 0
  .icon
    width: 10px
    transform: rotate(180deg)
  &.active
    margin-bottom: 22px
    .icon
      transform: rotate(0deg)
  .text
    font-weight: 500
    font-size: 14px
    line-height: 160%
    margin-right: 7px
</style>
