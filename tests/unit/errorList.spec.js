import { shallowMount } from '@vue/test-utils'
import ErrorList from '@/components/ErrorList.vue'

describe('ErrorList.vue', () => {
  it('renders props.errors when passed', () => {
    const errors = ['Error1', 'Error2'];
    const wrapper = shallowMount(ErrorList, {
      propsData: { errors }
    })
    expect(wrapper.findAll('li').length).toBe(2)
  }),
  it('does not show with zero errors', () => {
    const errors = [];
    const wrapper = shallowMount(ErrorList, {
      propsData: { errors }
    })
    expect(wrapper.find('ul').isVisible()).toBe(false)
  }),
  it('is visible with errors', () => {
    const errors = ['Error1', 'Error2'];
    const wrapper = shallowMount(ErrorList, {
      propsData: { errors }
    })
    expect(wrapper.find('ul').isVisible()).toBe(true)
  })
})
