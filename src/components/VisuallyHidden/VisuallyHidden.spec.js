
import { shallowMount } from '@vue/test-utils'
import VisuallyHidden from './VisuallyHidden'

describe('VisuallyHidden', () => {
  const wrapper = shallowMount(VisuallyHidden, {
    slots: {
      default: () => 'test content'
    }
  })

  it('Utilizes slot content', () => {
    const slotContent = wrapper.find('.visually-hidden')
    expect(slotContent.text()).toBe('test content')
  })
})