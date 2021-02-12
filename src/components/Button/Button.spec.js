import { shallowMount } from '@vue/test-utils'
import Button from './Button'

describe('Button', () => {
  const wrapper = shallowMount(Button, {
    props: {
      label: 'test button'
    }
  })

  it('renders a vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('emits a click event when clicked', async () => {
    await wrapper.trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
  })
})
