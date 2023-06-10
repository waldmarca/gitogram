<template>
  <div class="header">
    <Header>
      <template #headline>
        <logo class="logo logo-stories"/>
        <navigation :src="user.avatar_url" :username="user.login" />
      </template>
    </Header>
  </div>
  <div class="x-container container">
    <div class="wrapper">
      <div class="user">
        <div class="title">My profile</div>
        <about
        v-if="user.login"
        :username="user.name"
        :login="user.login"
        :userAvatar="user.avatar_url"
        :repos="repos.length"
        :following="followingQty"
        />
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { onMounted, computed } from 'vue'
import Header from '../../components/header/header.vue'
import logo from '../../components/logo/logo.vue'
import navigation from '../../components/navigation/navigation.vue'
import about from '../../components/about/about.vue'
export default {
  components: {
    Header,
    logo,
    navigation,
    about
  },
  setup () {
    const { dispatch, state, getters } = useStore()
    onMounted(() => {
      dispatch('user/getUser')
      dispatch('starred/fetchStarred')
      dispatch('repos/fetchRepos')
    })
    return {
      user: computed(() => state.user.data),
      repos: computed(() => state.repos.data),
      followingQty: computed(() => getters['starred/getFollowingQty'])
    }
  }
}
</script>

<style src="./user.scss" lang="scss" scoped></style>
