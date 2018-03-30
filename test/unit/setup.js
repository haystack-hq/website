import Vue from 'vue'
import VueForm from '@/packages/VueForm/index'
import moment from "moment/moment";

Vue.use(VueForm)

Vue.config.productionTip = false
window.axiosConfig = {
  headers: {
    Authorization: ''
  }
}

// helper functions
Vue.see = (wrapper, text, selector) => {
  let wrap = selector ? wrapper.find(selector) : wrapper

  expect(wrap.html()).toContain(text)
}

Vue.type = (wrapper, text, selector) => {
  let node = wrapper.find(selector)

  node.element.value = text
  node.trigger('input')
}

Vue.click = (wrapper, selector) => {
  wrapper.find(selector).trigger('click')
}

// Filters
Vue.filter('formatDate', function (value) {
  if (value) {
    return moment.utc(value).local().format('l LTS')
  }
})
