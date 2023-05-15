<template>
  <div class="header">
    <div class="x-container">
      <div class="headline">
        <slot name="headline" />
      </div>
      <div
        class="content"
        v-if="$slots.content"
      >
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
.header
  margin-bottom: 32px
  background: #FAFAFA
  border-bottom: 1px solid #C6C6C8
  padding: 42px 0px 32px

.content
  margin-top: 44px

.headline
  display: flex
  justify-content: space-between
</style>
