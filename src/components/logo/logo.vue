<template>
  <button class="logo" @click="$router.push('/')">
    <Icon name="logo" />
  </button>
</template>

<script>
import Icon from '../../icons/icon.vue'
export default {
  components: {
    Icon
  }
}
</script>

<style src="./logo.scss" lang="scss" scoped></style>
