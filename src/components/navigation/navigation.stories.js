import navigation from './navigation.vue'

export default {
  title: 'navigation',
  component: {
    navigation
  }
}

const template = () => ({
  components: {
    navigation
  },
  template: `
  <navigation />
  `
})

export const Default = template.bind({})