<template>
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
</template>

<script>
import toggler from '../../components/toggler/toggler.vue'
import Comment from '../../components/comment/comment.vue'
export default {
  components: {
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
