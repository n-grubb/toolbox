import { shallowMount } from '@vue/test-utils'
import Caret from './Caret'

describe('Caret', () => {
  it('Gets the .caret-up class when order is ascending', () => {
    const wrapper = shallowMount(Caret, {
      props: {
        order: 'ascending'
      }
    })
    expect(wrapper.find('.toolbox-caret').classes('caret-up')).toBe(true)
  })
})
