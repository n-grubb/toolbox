import { shallowMount } from '@vue/test-utils'
import Checkbox from './Checkbox.vue'

describe('Checkbox', () => {
  const wrapper = shallowMount(Checkbox, {
    props: {
      label: 'test checkbox'
    },
    global: {
      stubs: ['icon-uil-check']
    }
  })

  it('emits a "check" event when clicked', async () => {
    await wrapper.trigger('click')
    expect(wrapper.emitted().check).toBeTruthy()
  })
})
