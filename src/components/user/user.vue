<template>
  <div class="profile-info">
    <div class="profile-img">
      <img
      :src="avatar"
      alt="avatar"
      class="profile-avatar-img">
    </div>
    <div class="profile-name">{{ username }}</div>
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
}
</script>

<style src="./user.scss" lang="scss" scoped></style>
