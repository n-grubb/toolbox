import { shallowMount } from '@vue/test-utils'
import Toggle from './Toggle.vue'

describe('Toggle', () => {
  const wrapper = shallowMount(Toggle, {
    props: {
      mode: 'switch',
      labels: ['On', 'Off']
    }
  })

  it('emits a toggle event', async () => {
    console.log(wrapper.html())
    await wrapper.trigger('click')
    expect(wrapper.emitted().toggle).toBeTruthy()
  })
})
