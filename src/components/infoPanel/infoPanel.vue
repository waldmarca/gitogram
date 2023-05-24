<template>
  <ul class="ratings__list">
    <li class="ratings__item">
      <Icon
        class="ratings__star"
        name="star"
      />
      <div class="ratings__star-title">Star</div>
    </li>
    <li class="ratings__item">
      <div class="ratings__item-title">{{ stars }}</div>
    </li>
    <li class="ratings__item">
      <Icon
        class="ratings__star"
        name="fork"
      />
      <div class="ratings__fork-title">Fork</div>
    </li>
    <li class="ratings__item">
      <div class="ratings__item-num">{{ forks }}</div>
    </li>
  </ul>
</template>

<script>
import Icon from '../../icons/icon.vue'
export default {
  components: {
    Icon
  },
  props: {
    stars: Number,
    forks: Number
  }
}
</script>

<style src="./infoPanel.scss" lang="scss" scoped></style>
