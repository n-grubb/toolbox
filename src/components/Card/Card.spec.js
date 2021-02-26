import { shallowMount } from '@vue/test-utils'
import Card from './Card'

describe('Card', () => {
  const wrapper = shallowMount(Card, {
    slots: {
      default: () => 'Card content.'
    }
  })

  it('Utilizes slot content', () => {
    const slotContent = wrapper.find('.card')
    expect(slotContent.text()).toBe('Card content.')
  })
})