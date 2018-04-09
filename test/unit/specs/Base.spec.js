import Vue from 'vue'
import router from '@/routes'
import { shallow } from '@vue/test-utils'
import Base from '@/components/layouts/Base'
import http from 'http'
//import sinon from 'sinon'

describe('Base', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(Base, {
        router
    })
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

  //it('should redirect to the homepage when the logo is clicked', (done) => {
  //  Vue.click(wrapper, '.ui-variable-logo.navbar-brand')
  //
  //  Vue.nextTick(() => {
  //    expect(wrapper.vm.$route.path).toBe('/')
  //
  //    done()
  //  })
  //})
  //
  //it('should redirect to the blog when the blog link is clicked', (done) => {
  //  var spy = sinon.spy(wrapper.vm.$router, 'push')
  //
  //  Vue.click(wrapper, '.menu-link.blog a')
  //
  //  Vue.nextTick(() => {
  //    expect(spy.calledWith('/blog')).toBe(true)
  //
  //    done()
  //
  //    wrapper.vm.$router.push.restore()
  //  })
  //})
  //
  //it('should redirect to the contact-us page when the contact us link is clicked', (done) => {
  //  Vue.click(wrapper, '.menu-link.contact a')
  //
  //  Vue.nextTick(() => {
  //    expect(wrapper.vm.$route.path).toBe('/contact-us')
  //
  //    done()
  //  })
  //})
  //
  //it('should redirect to github when the github link is clicked', (done) => {
  //  var spy = sinon.spy(wrapper.vm.$router, 'push')
  //
  //  Vue.click(wrapper, '.menu-link.git a')
  //
  //  Vue.nextTick(() => {
  //    expect(spy.calledWith('/github')).toBe(true)
  //
  //    done()
  //
  //    wrapper.vm.$router.push.restore()
  //  })
  //})
  //
  //it('should redirect to the early-access page when the get early access link is clicked', (done) => {
  //  Vue.click(wrapper, '.btn.early-access')
  //
  //  Vue.nextTick(() => {
  //    expect(wrapper.vm.$route.path).toBe('/early-access')
  //
  //    done()
  //  })
  //})
})
