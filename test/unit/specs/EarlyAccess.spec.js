import Vue from 'vue'
import { mount } from '@vue/test-utils'
import EarlyAccess from '@/components/EarlyAccess'

describe('EarlyAccess', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(EarlyAccess)
  })

  it('has title data specific to the component', () => {
    expect(wrapper.vm.$options.head.title)
      .toEqual({
        inner: 'Haystack',
        separator: '-',
        complement: 'Early Access'
      })
  })

  it('has meta data specific to the component', () => {
    expect(wrapper.vm.$options.head.meta)
      .toEqual([
        { n: 'description', c: 'Get early access to Haystack', id: 'desc' },
        // Twitter
        { n: 'twitter:card', c: 'summary_large_image' },
        { n: 'twitter:title', c: 'Haystack - Early Access' },
        { n: 'twitter:description', c: 'Get early access to Haystack' },
        { n: 'twitter:url', c: 'http://www.haystackhq.com/early-access' },
        { n: 'twitter:site', c: '@haystackdev' },
        { n: 'twitter:image', c: '/static/img/logo/backgroundHaystack.png' },
        // Facebook / Open Graph
        { p: 'og:url', c: 'http://www.haystackhq.com/early-access' },
        { p: 'og:title', c: 'Haystack - Early Access' },
        { p: 'og:description', c: 'Get early access to Haystack' },
        { p: 'og:image', c: '/static/img/logo/backgroundHaystack.png' }
      ])
  })

  it('renders title', () => {
    Vue.see(wrapper, '<h1 class="heading">Get it Early</h1>')
  })

  it('renders form', () => {
    expect(wrapper.contains('input[name="FNAME"]')).toBe(true)
    expect(wrapper.contains('input[name="EMAIL"]')).toBe(true)

    Vue.see(wrapper, '<button type="submit" class="btn btn-block">Submit</button>')
  })
})
