<template>
  <div class="profile-post">
    <div class="profile-info">
      <Icon class="profile-img" name="ava"/>
      <div class="profile-name">joshua_l</div>
    </div>
    <div class="user__post-container">
      <slot name="userPost"/>
    </div>
    <div class="reviews">
      <toggler @onToggle="toggle" />
      <div class="comments" v-if="shown">
        <ul class="comments-list">
          <li class="comments-item" v-for="n in 5" :key="n">
            <comment text="Lorem ipsum" username="joshua_l" />
          </li>
        </ul>
      </div>
    </div>
    <div class="date">15 may</div>
  </div>
</template>

<script>
import Icon from '../icons/icon.vue'
import toggler from '../components/toggler.vue'
import Comment from '@/components/comment.vue'
export default {
  components: {
    Icon,
    toggler,
    Comment
  },
  data () {
    return {
      shown: false
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    }
  }
}
</script>

<style lang="sass" scoped>
  .profile-info
    display: flex
    align-items: center
    margin-bottom: 16px
  .profile-img
    margin-right: 14px
  .profile-name
    font-size: 18px
    font-weight: 700
  .date
    display: flex
    text-transform: uppercase
    font-weight: 400
    font-size: 12px
    line-height: 14px
    color: rgba(0, 0, 0, 0.4)
  .reviews
    display: flex
    flex-direction: column
    align-items: flex-start
    margin-bottom: 21px
  .comments-item
    margin-bottom: 15px
    &:last-child
    margin-bottom: 0
</style>
