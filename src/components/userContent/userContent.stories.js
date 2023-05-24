import userContent from './userContent.vue'
import infoPanel from '../infoPanel/infoPanel.vue'

export default {
  title: 'userContent',
  component: { userContent, infoPanel }
}

const template = () => ({
  components: { userContent, infoPanel },
  template: `
  <userContent>
  <template #userPost>
    <div class="user__post-content">
      <div class="user__post-title">
        Vue.js
      </div>
      <div class="user__post-desc">
        <b>JavaScript</b> framework for building interactive web applications ⚡
      </div>
      <info-panel />
    </div>
    <button class="button"></button>
    <div class="c-feed">
    </div>
  </template>
  </userContent>
  `
})

export const Default = template.bind({})
