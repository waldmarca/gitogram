import infoPanel from './infoPanel.vue'

export default {
  title: 'infoPanel',
  component: {
    infoPanel
  }
}

const template = () => ({
  components: {
    infoPanel
  },
  template: `
  <infoPanel 
  :stars="44" :forks="22"
  />
  `
})

export const Default = template.bind({})