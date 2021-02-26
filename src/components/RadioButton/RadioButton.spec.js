import { shallowMount } from '@vue/test-utils'
import RadioButton from './RadioButton.vue'

describe('RadioButton', () => {
  const wrapper = shallowMount(RadioButton, {
    props: {
      label: 'test radio',
      name: 'test',
      value: 'on'
    }
  })

  it('emits a click event when clicked', async () => {
    await wrapper.trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
  })
})
