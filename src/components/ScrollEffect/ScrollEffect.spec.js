import { shallowMount } from '@vue/test-utils'
import BfScrollEffect from './BfScrollEffect'

describe('BfScrollEffect', () => {
  const wrapper = shallowMount(BfScrollEffect)

  it('renders a vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('When no effect is set, displays the "fade" effect', () => {
    expect(wrapper.find('.fade').exists()).toBeTruthy()
    expect(wrapper.find('.shadow').exists()).toBeFalsy()
  })

  it('When the effect is set to shadow, displays the "shadow" effect', async () => {
    await wrapper.setProps({ effect: 'shadow' })
    expect(wrapper.find('.shadow').exists()).toBeTruthy()
    expect(wrapper.find('.fade').exists()).toBeFalsy()
  })

  // There really isn't a great way to test the height/width detection.
  // We could use a tool like Cypress for further testing in the future.
})
