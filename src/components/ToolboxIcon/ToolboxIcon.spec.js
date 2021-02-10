import { shallowMount } from '@vue/test-utils'
import ToolboxIcon from './ToolboxIcon'

describe('ToolboxIcon', () => {
  const wrapper = shallowMount(ToolboxIcon, {
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
