<template>
  <div class="profile-img">
    <img
      :src="avatar"
      :alt="`${username}'s profile picture`"
      class="profile-avatar-img">
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

<style src="./avatar.scss" lang="scss" scoped></style>
