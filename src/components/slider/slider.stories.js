import slider from './slider.vue'

export default {
  title: 'slider',
  component: {
    slider
  },
  argTypes: {
    text: {
      control: {
        type: 'text'
      }
    },
    pic: {
      control: {
        type: 'text'
      }
    },
    title: {
      control: {
        type: 'text'
      }
    },
    hoverText: {
      control: {
        type: 'text'
      }
    }
  }
}

const template = (args) => ({
  components: {
    slider
  },
  data () {
    return {
      args
    }
  },
  template: `
  <slider v-bind="args" />
  `
})

export const Default = template.bind({})

Default.args = {
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ratione harum tenetur necessitatibus, inventore eaque at consequatur perferendis. Officiis aliquid voluptatibus tenetur sint autem laboriosam suscipit porro mollitia fugit atque!',
  pic: 'https://loremflickr.com/300/300',
  hoverText: 'Unfollow'
}
