import { shallowMount } from '@vue/test-utils'
import Icon from './Icon'

describe('Icon', () => {
  const wrapper = shallowMount(Icon, {
    props: {
      name: 'arrow-right'
    },
    global: {
      stubs: ['font-awesome-icon']
    }
  })
  it('renders an icon', () => {
    expect(wrapper.find('font-awesome-icon-stub').exists()).toBe(true)
  })
})
