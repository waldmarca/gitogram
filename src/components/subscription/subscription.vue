<template>
  <div class="c-subscription">
    <div class="user">
      <user size="medium" :type="type" :avatar="avatar" :username="username" />
    </div>
    <div class="button">
      <x-button class="x-button"
      :theme="following ? 'grey' : 'green'"
      @click="$emit('press')"
      >
        {{ following ? 'Unfollowed' : 'Following' }}
      </x-button>
    </div>
  </div>
</template>

<script>
import button from '../button/button.vue'
import user from '../user/user.vue'
export default {
  components: {
    user,
    xButton: button
  },
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    following: {
      type: Boolean
    },
    type: {
      type: String,
      default: ''
    }
  }
}
</script>

<style src="./subscription.scss" lang="scss" scoped></style>
