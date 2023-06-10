<template>
  <div class="c-repos">
    <div class="loader" v-if="loading">
      <spinner />
    </div>
    <template v-else>
      <div class="header">
        <page-header :title="pageTitle" :qty="repos.length" />
      </div>
      <ul class="posts">
        <li class="post-item" v-for="repo in repos" :key="repo.id">
          <user-post-content
          :title="repo.name"
          :description="repo.description"
          :forks="repo.forks"
          :stars="repo.stargazers_count"
          />
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import spinner from '@/components/spinner/spinner.vue'
import pageHeader from '../../components/pageHeader/pageHeader.vue'
import UserPostContent from '@/components/userPostContent/userPostContent.vue'
import { useStore } from 'vuex'
import { onMounted, computed, ref } from 'vue'
export default {
  components: {
    spinner,
    pageHeader,
    UserPostContent
  },
  props: {
    pageTitle: String
  },
  setup () {
    const { dispatch, state } = useStore()
    const loading = ref(false)
    onMounted(() => {
      loading.value = true
      try {
        dispatch('repos/fetchRepos')
      } catch (e) {
        console.log(e)
      } finally {
        loading.value = false
      }
    })
    return {
      repos: computed(() => state.repos.data),
      loading
    }
  }
}
</script>

<style src="./repos.scss" lang="scss" scoped></style>
