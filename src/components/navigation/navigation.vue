<template>
  <div class="user-info">
    <div class="home">
      <Icon name="home" />
    </div>
    <div class="user-photo">
      <img
        src="https://loremflickr.com/300/300"
        class="img-avatar"
        alt="user photo"
      />
    </div>
    <div class="logout">
      <Icon name="logout" />
    </div>
  </div>
</template>

<script>
import Icon from '../../icons/icon.vue'
export default {
  components: {
    Icon
  }
}
</script>

<style src="./navigation.scss" lang="scss" scoped></style>
