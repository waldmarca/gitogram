<template>
  <div class="user__post-wrap">
    <div class="user__post-content">
      <div class="user__post-title">{{ title }}</div>
      <div class="user__post-desc">{{ description }}</div>
      <info-panel :stars="stars" :forks="forks" />
    </div>
    <button class="button"></button>
    <div class="c-feed">
    </div>
  </div>
</template>

<script>
import infoPanel from '../infoPanel/infoPanel.vue'
export default {
  name: 'userPostContent',
  components: {
    infoPanel
  },
  props: ['title', 'description', 'stars', 'forks']
}
</script>

<style src="./userPostContent.scss" lang="scss" scoped></style>
