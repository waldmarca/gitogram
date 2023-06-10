<template>
  <div class="c-user">
    <div class="user-info">
      <avatar
      :avatar="userAvatar"
      :username="login"
      />
    </div>
    <div class="info">
      <div class="header">
        <div class="username">{{ login }}</div>
        <ul class="stats">
          <li class="stats-item">
            <router-link :to="{name: 'user'}" class="watchers">
            <span class="stats-int">{{ repos }}</span>
            <span class="stats-title">reposts</span>
            </router-link>
          </li>
          <li class="stats-item">
            <router-link :to="{name: 'following'}" class="watchers">
                <span class="stats-int">{{ following }}</span>
                <span class="stats-title">watchers</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="data">
        <p>
          {{ username }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from '../avatar/avatar.vue'
export default {
  components: {
    Avatar
  },
  props: {
    userAvatar: {
      type: String,
      required: true
    },
    login: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    repos: {
      type: Number,
      required: true
    },
    following: {
      type: Number,
      required: true
    }
  }
}
</script>

<style src="./about.scss" lang="scss" scoped></style>
