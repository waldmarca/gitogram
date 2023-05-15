<template>
  <div class="header">
    <Header>
      <template #headline>
        <div class="logo">
          <a href="https://loftschool.com" target="_blank" rel="noopener noreferrer">
          <Icon name="logo" />
          </a>
        </div>
        <div class="user-info">
          <div class="home">
            <Icon name="home" />
          </div>
          <div class="user-photo">
            <Icon name="ava" />
          </div>
          <div class="logout">
            <Icon name="logout" />
          </div>
        </div>
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories-item" v-for="story in stories" :key="story.id">
            <story-user-item :avatar="story.avatar" :username="story.username" @onPress="handlePress(story.id)" />
          </li>
        </ul>
      </template>
    </Header>
  </div>
  <div class="user__post-wrapper">
      <div class="user-post-container">
  <userContent>
    <template #userPost>
      <div class="user__post-content">
        <div class="user__post-title">
          Vue.js
        </div>
        <div class="user__post-desc">
          <b>JavaScript</b> framework for building interactive web applications ⚡
        </div>
        <ul class="ratings__list">
          <li class="ratings__item">
            <Icon class="ratings__star" name="star" />
            <div class="ratings__star-title">Star</div>
          </li>
          <li class="ratings__item">
            <div class="ratings__item-title">
              156k
            </div>
          </li>
          <li class="ratings__item">
            <Icon class="ratings__star" name="fork" />
            <div class="ratings__fork-title">Fork</div>
          </li>
          <li class="ratings__item">
            <div class="ratings__item-title">
              4
            </div>
          </li>
        </ul>
      </div>
      <button class="button"></button>
      <div class="c-feed">
      </div>
    </template>
  </userContent>
  </div>
  </div>
    <div class="user__post-wrapper">
      <div class="user-post-container">
  <userContent>
    <template #userPost>
      <div class="user__post-content">
        <div class="user__post-title">
          Vue.js
        </div>
        <div class="user__post-desc">
          <b>JavaScript</b> framework for building interactive web applications ⚡
        </div>
        <ul class="ratings__list">
          <li class="ratings__item">
            <Icon class="ratings__star" name="star" />
            <div class="ratings__star-title">Star</div>
          </li>
          <li class="ratings__item">
            <div class="ratings__item-title">
              156k
            </div>
          </li>
          <li class="ratings__item">
            <Icon class="ratings__star" name="fork" />
            <div class="ratings__fork-title">Fork</div>
          </li>
          <li class="ratings__item">
            <div class="ratings__item-title">
              4
            </div>
          </li>
        </ul>
      </div>
      <button class="button"></button>
      <div class="c-feed">
      </div>
    </template>
  </userContent>
  </div>
  </div>
</template>

<script>
import Header from '../../components/header.vue'
import Icon from '../../icons/icon.vue'
import storyUserItem from '../../components/storyUserItem.vue'
import stories from './data.json'
import userContent from '../../components/userContent.vue'
export default {
  name: 'feeds',
  components: {
    Header,
    Icon,
    storyUserItem,
    userContent
  },
  data () {
    return {
      stories
    }
  },
  methods: {
    handlePress () {
      console.log(1)
    }
  }
}
</script>

<style lang="sass" scoped>
  .user-info
    display: flex
    align-items: center
  .logout
    cursor: pointer
  .home
    cursor: pointer
    margin-right: 28px
  .user-photo
    cursor: pointer
    margin-right: 23.5px
  .stories
    display: flex
    justify-content: space-between
  .user-post-container
    margin: 0 auto
    width: 985px
  .user__post-content
    background: #FFFFFF
    border: 1px solid #F1F1F1
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.07)
    border-radius: 10px
    display: flex
    flex-direction: column
    align-items: flex-start
    padding: 24px 20px
  .user__post-wrapper
    margin-bottom: 30px
  .ratings__list
    display: flex
  .ratings__item
    display: flex
    align-items: center
    padding: 7px 12px
    border-right: 2px solid rgba(27, 31, 35, 0.15)
    &:nth-child(odd)
        background: #FAFBFC
    &:first-child
        border-radius: 10px 0 0 10px
    &:last-child
        border-right: none
  .user__post-title
    font-weight: 700
    font-size: 26px
    line-height: 28px
    margin-bottom: 21px
  .ratings__list
    border-radius: 10px
    border: 1px solid rgba(27,31,35,.15)
  .user__post-desc
    margin-bottom: 35px
  .ratings__star
    margin-right: 6px
</style>
