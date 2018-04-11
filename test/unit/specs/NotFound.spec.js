import Vue from 'vue'
import { mount } from '@vue/test-utils'
import NotFound from '@/components/NotFound'

describe('NotFound', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(NotFound)
  })

  it('has title data specific to the component', () => {
    expect(wrapper.vm.$options.head.title)
      .toEqual({
        inner: 'Haystack',
        separator: '-',
        complement: 'Not Found'
      })
  })

  it('has meta data specific to the component', () => {
    expect(wrapper.vm.$options.head.meta)
      .toEqual([
        { n: 'description', c: 'Full-stack development environments can be simple, repeatable and reliable. Use our pre-built development environments for any of the most popular stacks, or create your own Haystack file.', id: 'desc' },
        // Twitter
        { n: 'twitter:card', c: 'summary_large_image' },
        { n: 'twitter:title', c: 'Haystack' },
        { n: 'twitter:description', c: 'Full-stack development environments can be simple, repeatable and reliable. Use our pre-built development environments for any of the most popular stacks, or create your own Haystack file.' },
        { n: 'twitter:url', c: 'http://www.haystackhq.com' },
        { n: 'twitter:site', c: '@haystackdev' },
        { n: 'twitter:image', c: '/static/img/logo/backgroundHaystack.png' },
        // Facebook / Open Graph
        { p: 'og:url', c: 'http://www.haystackhq.com' },
        { p: 'og:title', c: 'Haystack' },
        { p: 'og:description', c: 'Full-stack development environments can be simple, repeatable and reliable. Use our pre-built development environments for any of the most popular stacks, or create your own Haystack file.' },
        { p: 'og:image', c: '/static/img/logo/backgroundHaystack.png' }
      ])
  })

  it('renders 404 image', () => {
    Vue.see(wrapper, '<img src="/static/img/404/404.svg" alt="Haystack">')
  })

  it('renders text', () => {
    Vue.see(wrapper, '<h1 class="heading">Dead End!</h1>')

    Vue.see(wrapper, '<p class="lead mb-3">The page you are looking for doesn\'t exist.</p>')
  })

  it('renders link to homepage', () => {
    Vue.see(wrapper, '<a href="/" class="btn">Home Page</a>')
  })
})
