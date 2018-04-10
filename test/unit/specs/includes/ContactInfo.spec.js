import Vue from 'vue'
import { shallow } from '@vue/test-utils'
import ContactInfo from '@/components/includes/ContactInfo'

describe('ContactInfo', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(ContactInfo)
  })

  it('should display menu item links', () => {
    // title
    Vue.see(wrapper, '<h3 class="heading">Contact Info</h3>')
    // time
    Vue.see(wrapper, '<p>Mon - Fri 9AM to 5PM PT</p>')
    // email
    Vue.see(wrapper, '<p>support@haystackhq.com</p>')
    // address
    Vue.see(wrapper, '107 Spring St.')
    Vue.see(wrapper, 'Seattle, WA 98104')
  })
})
