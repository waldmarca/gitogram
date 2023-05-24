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

<style src="./header.scss" lang="scss" scoped></style>
