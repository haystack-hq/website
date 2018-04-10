import Vue from 'vue'
import { shallow } from '@vue/test-utils'
import Base from '@/components/layouts/Base'

describe('Base', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(Base)
  })

  it('should display menu item links', () => {
    // logo link
    Vue.see(wrapper, '<a href="/" title="Haystack - Fast simple development environments" class="ui-variable-logo navbar-brand">')
    // text links
    Vue.see(wrapper, '<a href="/#pricing">Pricing</a>')
    Vue.see(wrapper, '<a href="http://blog.haystackhq.com">Blog</a>')
    Vue.see(wrapper, '<a href="/contact-us">Contact Us</a>')
    // github link
    Vue.see(wrapper, '<a href="https://github.com/haystack-hq" target="_blank"><span class="github"></span></a>')
    // button
    Vue.see(wrapper, '<a href="/early-access" class="btn early-access btn-sm pull-right">Get Early Access</a>')
  })
})
