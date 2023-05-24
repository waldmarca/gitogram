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
import icon from '../../icons/variants/triangle.vue'
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

<style src="./toggler.scss" lang="scss" scoped></style>
