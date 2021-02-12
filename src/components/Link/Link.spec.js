import { shallowMount } from '@vue/test-utils'
import Link from './Link'

describe('Link', () => {
  const wrapper = shallowMount(Link, {
    attrs: {
      name: 'Test Link',
      target: '_blank'
    }
  })

  it('renders an anchor tag', () => {
    expect(wrapper.find('a').exists()).toBe(true)
  })

  it('passes all attributes to the anchor tag', () => {
    expect(wrapper.attributes('name')).toBe('Test Link')
    expect(wrapper.attributes('target')).toBe('_blank')
  })
})
