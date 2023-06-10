import { mount } from '@vue/test-utils'
import comments from '../../src/components/comments/comments.vue'

describe('comments component', () => {
  it('выполняет emit события loadContent', async () => {
    const wrapper = mount(comments)

    await wrapper.find('.toggler button').trigger('click')

    expect(wrapper.emitted().loadContent.length).toBe(1)
  })

  it('отрисует список элементов', async () => {
    const issue = {
      title: 'test-title',
      user: {
        login: 'test-name'
      }
    }

    const wrapper = mount(comments, {
      propsData: {
        issues: Array.from({ length: 6 }).map(x => issue)
      }
    })

    expect(wrapper.find('.comments').exists()).toBe(false)

    await wrapper.find('.toggler button').trigger('click')

    expect(wrapper.findAll('.comments-item').length).toBe(6)
  })

  it('не вызывает событие contentLoaded если внутри есть список issues', async () => {
    const issue = {
      title: 'test-title',
      user: {
        login: 'test-name'
      }
    }

    const wrapper = mount(comments, {
      propsData: {
        issues: Array.from({ length: 6 }).map(x => issue)
      }
    })

    await wrapper.find('.toggler button').trigger('click')

    expect(wrapper.emitted().loadContent).toBeUndefined()
  })
})
