<template>
  <button
    :class="[
    'c-button', `theme-${theme}`
    ]"
  >
  <span class="btn-text">
    <slot></slot>
  </span>
  </button>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      default: 'blood-green'
    }
  }
}
</script>
<style src="./button.scss" lang="scss" scoped></style>
