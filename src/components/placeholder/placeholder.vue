<template>
  <div class="placeholder">
    <div class="img"></div>
    <div
      class="paragraph"
      v-for="p in paragraphs"
      :key="p"
    >
      <div class="line line1"></div>
      <div class="line line2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Placeholder',
  props: {
    paragraphs: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style lang="scss" scoped>
.placeholder {
  .img {
    width: 100%;
    height: 150px;
    background-color: #eaeaea;
  }
  .line {
    height: 30px;
    background-color: #eaeaea;
    margin-top: 20px;
  }
  .line1 {
    width: 100%;
  }
  .line2 {
    width: 80%;
  }
}
</style>
