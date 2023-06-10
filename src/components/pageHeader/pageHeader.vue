<template>
  <div class="c-page-header">
    <h2 class="title">{{ title }}</h2>
    <div class="counter">{{ qty }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Items'
    },
    qty: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style src="./pageHeader.scss" lang="scss" scoped></style>
