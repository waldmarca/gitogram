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
        <div class="reviews">
          <toggler @onToggle="toggle" />
          <div
            class="comments"
            v-if="shown"
          >
            <ul class="comments-list">
              <li
                class="comments-item"
                v-for="n in 8"
                :key="n"
              >
                <comment
                  class="some-comment"
                  text="Lorem ipsum"
                  username="joshua_l"
                />
              </li>
            </ul>
          </div>
        </div>
        <div class="date">15 may</div>
      </div>
    </div>
  </div>
</template>

<script>
import user from '../../components/user/user.vue'
import toggler from '../../components/toggler/toggler.vue'
import Comment from '../../components/comment/comment.vue'
import userPostContent from '../userPostContent/userPostContent.vue'
import * as api from '../../components/api'
export default {
  components: {
    toggler,
    Comment,
    user,
    userPostContent
  },
  data () {
    return {
      shown: false,
      items: {}
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    },
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
      const { data } = await api.trandings.getTrendings()
      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style src="./userContent.scss" lang="scss" scoped></style>
