import Vue from 'vue'

Vue.config.productionTip = false

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
