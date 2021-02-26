import { shallowMount } from '@vue/test-utils'
import Caret from './Caret'

describe('Caret', () => {
  it('Gets the .caret-up class when order is ascending', () => {
    const wrapper = shallowMount(Caret, {
      props: {
        order: 'ascending'
      },
      global: {
        stubs: {
          "icon-uil-angle-down": true
        }
      }
    })
    expect(wrapper.find('.caret').classes('caret-up')).toBe(true)
  })
})
