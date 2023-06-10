<template>
  <div class="c-following">
    <div class="loader" v-if="loading">
      <spinner />
    </div>
    <template v-else>
      <div class="header">
        <page-header
        :title="pageTitle"
        :qty="subscriptions.length"
        />
      </div>
      <ul class="subscriptions">
        <li
        v-for="subscription in subscriptions"
        :key="subscription.id"
        class="subscription-item"
        >
        <subscription
        :username="subscription.full_name"
        :avatar="subscription.owner.avatar_url"
        :following="subscription.following"
        :type="subscription.owner.type"
        @press="changeSubscription(subscription.id)"
        />
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import spinner from '../../components/spinner/spinner.vue'
import pageHeader from '../../components/pageHeader/pageHeader.vue'
import { useStore } from 'vuex'
import { onMounted, computed, ref } from 'vue'
import subscription from '../../components/subscription/subscription.vue'
export default {
  components: {
    spinner,
    pageHeader,
    subscription
  },
  props: {
    pageTitle: String
  },
  setup () {
    const loading = ref(false)
    const { dispatch, state, getters } = useStore()
    const changeSubscription = (id) => {
      const { following } = getters['starred/getStarredRepo'](id)
      if (following) {
        dispatch('starred/unStarRepo', id)
      } else {
        dispatch('starred/starRepo', id)
      }
    }
    onMounted(() => {
      loading.value = true
      try {
        dispatch('starred/fetchStarred')
      } catch (e) {
        console.log(e)
      } finally {
        loading.value = false
      }
    })
    return {
      subscriptions: computed(() => state.starred.data),
      changeSubscription,
      getStarredRepo: computed(() => getters['starred/getStarredRepo']),
      loading
    }
  }
}
</script>

<style src="./following.scss" lang="scss" scoped></style>
