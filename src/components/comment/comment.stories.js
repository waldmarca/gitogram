import comments from './comment.vue'

export default {
  title: 'comments',
  component: { comments }
}

const template = () => ({
  components: { comments },
  template: `
  <comments 
  username="Tim"
  text="Lorem"
  />
  `
})

export const Default = template.bind({})
