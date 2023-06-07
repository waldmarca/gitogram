<template>
  <div class="c-story-post-item" :class="{ active }">
    <div class="stories-container">
      <div class="header">
        <div class="progess">
          <xprogress :active="active" @onFinish="$emit('onFinish')" />
        </div>
        <div class="user">
          <user class="user" :username="data.username" :avatar="data.avatar" />
        </div>
      </div>
      <div class="content">
        <div class="loader" v-if="loading">
          <spinner class="spinner" />
        </div>
        <div class="info" v-else>
          <div v-if="data.content?.length" class="content-text" v-html="data.content"></div>
          <placeholder v-else :paragraphs="2" />
        </div>
      </div>
      <div class="button">
        <xbutton @click="$emit(data.following ? 'onUnFollow' : 'onFollow')" :theme="buttonTheme">
          <template #default>
            <span v-if="data.loading">
              <Icon name="spinnerBtn" />
            </span>
            <span v-else>
              {{data.following ? 'Unfollow': 'Follow'}}
            </span>
          </template>
          </xbutton>
      </div>
    </div>
    <div class="btns" v-if="active">
      <button v-if="btnsShown.includes('prev')" class="btn btn-prev" @click="$emit('prev')">
        <span class="icon">
          <icon class="icon-arrow" name="arrow" />
        </span>
      </button>
      <button v-if="btnsShown.includes('next')" class="btn btn-next" @click="$emit('next')">
        <span class="icon">
          <icon class="icon-arrow" name="arrow" />
        </span>
      </button>
    </div>
  </div>
</template>

<script>
import xbutton from '../button/button.vue'
import xprogress from '../progress/progress.vue'
import spinner from '../spinner/spinner.vue'
import user from '../user/user.vue'
import placeholder from '../placeholder/placeholder.vue'
import Icon from '@/icons/icon.vue'
export default {
  components: {
    xprogress,
    user,
    spinner,
    xbutton,
    placeholder,
    Icon
  },
  props: {
    active: Boolean,
    loading: Boolean,
    following: {
      type: Boolean
    },
    btnsShown: {
      type: Array,
      default: () => ['next', 'prev'],
      validator (value) {
        return value.every((item) => item === 'next' || item === 'prev')
      }
    },
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  computed: {
    buttonTheme () {
      return this.data.following === true ? 'grey' : 'green'
    }
  }
}
</script>

<style src="./storyPostItem.scss" lang="scss" scoped></style>
