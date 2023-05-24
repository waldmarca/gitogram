import header from './header.vue'

export default {
  title: 'header',
  component: {
    header
  }
}

const template = () => ({
  components: {
    header
  },
  template: `
  <header />
  `
})

export const Default = template.bind({})