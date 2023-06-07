<template>
  <div class="header">
    <Header>
      <template #headline>
        <logo class="logo logo-stories" />
        <navigation :src="user.avatar_url" :username="user.login" />
      </template>
      <template #content>
        <ul class="stories">
          <li
            class="stories-item"
            v-for="item in trendings"
            :key="item.id"
          >
            <story-user-item
              v-bind="getFeedData(item)"
              @onPress="$router.push({name: 'stories', params: {initialSlide: item.id}})"
            />
          </li>
        </ul>
      </template>
    </Header>
  </div>
  <user-content />
</template>

<script>
import Header from '@/components/header/header.vue'
import storyUserItem from '@/components/storyUserItem/storyUserItem.vue'
import stories from './data.json'
import userContent from '@/components/userContent/userContent.vue'
import navigation from '@/components/navigation/navigation.vue'
import logo from '@/components/logo/logo.vue'
import * as api from '../../components/api'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'feeds',
  components: {
    Header,
    storyUserItem,
    userContent,
    navigation,
    logo
  },
  computed: {
    ...mapState({
      trendings: (state) => state.trendings.data,
      starred: (state) => state.starred.data,
      user: (state) => state.user.data
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
  data () {
    return {
      stories,
      items: []
    }
  },
  methods: {
    handlePress () {
      console.log(1)
    },
    getFeedData (item) {
      return {
        avatar: item.owner.avatar_url,
        username: item.owner.login
      }
    },
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings',
      fetchStarred: 'starred/fetchStarred',
      getUser: 'user/getUser'
    })
  },
  mounted () {
    this.fetchTrendings()
    this.fetchStarred({ limit: 10 })
    this.getUser()
  }
}
</script>

<style src="./feeds.scss" lang="scss" scoped></style>
