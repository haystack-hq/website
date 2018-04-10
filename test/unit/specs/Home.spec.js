import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Home from '@/components/Home'

describe('Home', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Home)
  })

  it('has title data specific to the component', () => {
    expect(wrapper.vm.$options.head.title)
      .toEqual({
        inner: 'Haystack',
        separator: '-',
        complement: 'Home'
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
        { n: 'twitter:url', c: 'http://haystackhq.com/' },
        { n: 'twitter:site', c: '@haystackdev' },
        { n: 'twitter:image', c: '/static/img/logo/backgroundHaystack.png' },
        // Facebook / Open Graph
        { p: 'og:url', c: 'http://www.haystackhq.com' },
        { p: 'og:title', c: 'Haystack' },
        { p: 'og:description', c: 'Full-stack development environments can be simple, repeatable and reliable. Use our pre-built development environments for any of the most popular stacks, or create your own Haystack file.' },
        { p: 'og:image', c: '/static/img/logo/backgroundHaystack.png' }
      ])
  })

  it('renders catchphrase', () => {
    Vue.see(wrapper, 'Any Stack in Seconds')
  })

  it('renders subtitle', () => {
    Vue.see(wrapper, 'The best way to start developing a full stack application')
  })

  it('renders what is haystack titles', () => {
    Vue.see(wrapper, 'What is Haystack??')

    Vue.see(wrapper, 'Prebuilt Popular Stacks')
    Vue.see(wrapper, 'Your Own Tools')
    Vue.see(wrapper, 'Local or Cloud')
  })

  it('renders sharable title', () => {
    Vue.see(wrapper, 'Sharable URLs, Sharable Environments')
  })

  it('renders prebuilt stacks title', () => {
    Vue.see(wrapper, 'Prebuilt Stacks')
  })

  it('renders build your own title', () => {
    Vue.see(wrapper, 'Build your own stack')
  })

  it('renders develop local or cloud titles', () => {
    Vue.see(wrapper, 'Develop locally or against a cloud environment')

    Vue.see(wrapper, 'Local Environments')
    Vue.see(wrapper, 'Cloud Environments')
  })

  it('renders creating stack titles', () => {
    Vue.see(wrapper, 'Creating Your First Stack')

    Vue.see(wrapper, 'Choose new stack from the menu')
    Vue.see(wrapper, 'Select mode (local, cloud) and click start')
    Vue.see(wrapper, 'Dev against your stack')
  })

  it('renders cli title', () => {
    Vue.see(wrapper, 'Command Line Interface')
  })

  it('renders pricing titles', () => {
    Vue.see(wrapper, 'Pricing')

    Vue.see(wrapper, '<h4 class="heading">Cloud</h4>')
    Vue.see(wrapper, '<h4 class="heading">Open Source</h4>')
    Vue.see(wrapper, '<h4 class="heading">Enterprise</h4>')
  })
})
