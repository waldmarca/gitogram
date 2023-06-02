<template>
  <div class="slider">
    <div class="header">
      <Xprogress />
      <user
      avatar="https://loremflickr.com/300/300"
      username="Josh"
      />
    </div>
    <div class="content">
      <div class="img" v-if="pic">
        <img :src="pic" :alt="title">
      </div>
      <p>{{text}}</p>
    </div>
    <div class="footer">
      <Xbutton :hoverText="hoverText">Follow</Xbutton>
    </div>
  </div>
</template>

<script>
import Xbutton from '../button/button.vue'
import user from '../user/user.vue'
import Xprogress from '../progress/progress.vue'
export default {
  components: {
    Xbutton,
    user,
    Xprogress
  },
  props: {
    text: {
      type: String,
      required: true
    },
    pic: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      required: true
    },
    hoverText: {
      type: String
    }
  }
}
</script>

<style src="./slider.scss" lang="scss" scoped></style>
