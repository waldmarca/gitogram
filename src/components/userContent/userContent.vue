<template>
  <div class="user__post-list">
    <div class="user-post-container" v-for="item in items" :key="item.id">
      <div class="profile-post">
        <user
        v-bind="getFeedData(item)"
        />
        <user-post-content
        v-bind="getFeedData(item)"
        />
        <comments />
        <div class="date">15 may</div>
      </div>
    </div>
  </div>
</template>

<script>
import user from '../../components/user/user.vue'
import comments from '../comments/comments.vue'
import userPostContent from '../userPostContent/userPostContent.vue'
import * as api from '../../components/api'
export default {
  components: {
    user,
    userPostContent,
    comments
  },
  data () {
    return {
      items: {}
    }
  },
  methods: {
    getFeedData (item) {
      return {
        username: item.owner.login,
        title: item.name,
        description: item.description,
        stars: item.stargazers_count,
        forks: item.forks,
        avatar: item.owner.avatar_url
      }
    }
  },
  async created () {
    try {
      const { data } = await api.trendings.getTrendings()
      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style src="./userContent.scss" lang="scss" scoped></style>
