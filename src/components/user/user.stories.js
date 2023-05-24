import user from './user.vue'

export default {
  title: 'user',
  component: { user }
}

const template = () => ({
  components: { user },
  template: `<user
  avatar="https://loremflickr.com/300/300"
  username="Tim"
  />`
})

export const Default = template.bind({})