<template>
  <div class="wrapper">
    <header class="header">
      <div class="x-container">
        <button class="logo" @click="$router.push('/')">
          <logo />
        </button>
        <button class="close-btn" @click="$router.push('/')">
          <icon name="close-btn" />
        </button>
      </div>
    </header>
    <div class="content">
      <storiesSlider :initialSlide="Number($route.params.initialSlide)"/>
    </div>
  </div>
</template>

<script>
import icon from '@/icons/icon.vue'
import logo from '../logo/logo.vue'
import storiesSlider from '../storiesSlider/storiesSlider.vue'
export default {
  components: {
    icon,
    logo,
    storiesSlider
  }
}
</script>

<style src="./stories.scss" lang="scss" scoped></style>
