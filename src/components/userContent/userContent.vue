<template>
  <div class="user__post-list">
    <div class="user-post-container" v-for="item in starred" :key="item.id">
      <div class="profile-post">
        <user
        v-bind="getFeedData(item)"
        />
        <user-post-content
        v-bind="getFeedData(item)"
        />
        <comments
        :issues="item.issues?.data"
        :loading="item.issues?.loading"
        :date="new Date(item.created_at)"
        @loadContent="loadIssues({ id: item.id, owner: item.owner.login, repo: item.name })"
        />
      </div>
    </div>
  </div>
</template>

<script>
import user from '../../components/user/user.vue'
import comments from '../comments/comments.vue'
import userPostContent from '../userPostContent/userPostContent.vue'
import * as api from '../../components/api'
import { mapActions, mapState } from 'vuex'
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
    },
    ...mapActions({
      fetchStarred: 'starred/fetchStarred',
      fetchIssues: 'starred/fetchIssuesForRepo'
    }),
    loadIssues ({ id, owner, repo }) {
      this.fetchIssues({ id, owner, repo })
    }
  },
  computed: {
    ...mapState({
      starred: (state) => state.starred.data
    })
  },
  async created () {
    try {
      const { data } = await api.trendings.getTrendings()
      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  },
  mounted () {
    this.fetchStarred({ limit: 10 })
  }
}
</script>

<style src="./userContent.scss" lang="scss" scoped></style>
