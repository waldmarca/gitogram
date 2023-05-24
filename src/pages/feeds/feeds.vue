<template>
  <div class="header">
    <Header>
      <template #headline>
        <logo />
        <navigation />
      </template>
      <template #content>
        <ul class="stories">
          <li
            class="stories-item"
            v-for="item in items"
            :key="item.id"
          >
            <story-user-item
              v-bind="getFeedData(item)"
              @onPress="handlePress(story.id)"
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
export default {
  name: 'feeds',
  components: {
    Header,
    storyUserItem,
    userContent,
    navigation,
    logo
  },
  async created () {
    try {
      const { data } = await api.trandings.getTrendings()
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
    }
  }
}
</script>

<style src="./feeds.scss" lang="scss" scoped></style>
