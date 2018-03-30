import Vue from 'vue'
import moxios from 'moxios'
import { mount } from '@vue/test-utils';
import Login from '@/components/Login'
import router from '@/routes'

describe('Login', () => {
  let wrapper

  window.axiosConfig = {
    baseURL: 'http://localhost:9086/v1',
    headers: {
      Authorization: ''
    }
  }

  beforeEach(() => {
    moxios.install()

    wrapper = mount(Login, {
      router
    })
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it('should have a login form object', () => {

    expect(wrapper.vm.form.data)
      .toEqual(new Vue.form({
        email: '',
        password: ''
      }).data)

  })

  it('should render login form', () => {

    Vue.see(wrapper, 'Login')

    expect(wrapper.contains('input[type="email"]')).toBe(true)
    expect(wrapper.contains('input[type="password"]')).toBe(true)
    expect(wrapper.contains('button[type="submit"]')).toBe(true)

  })

  it('should fail login', (done) => {

    Vue.type(wrapper, 'bad@email.test', 'input[type="email"]')
    Vue.type(wrapper, 'bad pass', 'input[type="password"]')

    wrapper.find('form').trigger('submit')

    moxios.wait(function () {
      let request = moxios.requests.mostRecent()
      request.respondWith({
        status: 403,
        response: {
          status_code: 403,
          message: "Invalid email or password."
        }
      }).then(() => {
        Vue.see(wrapper, 'Invalid email or password.')

        done()
      })
    })

  })

  it('should succeed login', (done) => {

    let validUser = {
      id: 10,
      email: "good@email.test",
      username: "foo",
      token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjkwODYvdjEvYXV0aGVudGljYXRlIiwiaWF0IjoxNTE5NDI1MzA2LCJleHAiOjE1MTk0Mjg5MDYsIm5iZiI6MTUxOTQyNTMwNiwianRpIjoiZDNmM2QxMTE2ZDcyMDQ4ODhjMWJiNjZmMzNjNzgwMzUiLCJzdWIiOjF9.F9vw3EnVKVH2D-3f9Qgub01ZCg8nP6X8xfXo0MAWN7w"
    }

    Vue.type(wrapper, 'good@email.test', 'input[type="email"]')
    Vue.type(wrapper, 'good pass', 'input[type="password"]')

    wrapper.find('form').trigger('submit')

    moxios.wait(function () {
      let request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: validUser
      }).then(() => {
        // No errors on the form
        expect(wrapper.vm.form.errors.hasErrors()).toBe(false)

        done()
      })
    })

  })

  it('should show user validated message with url param', (done) => {

    wrapper.vm.params = {v: 1}

    Vue.nextTick(() => {
      Vue.see(wrapper, 'Your account has been validated!')

      done()
    })

  })

  // TODO: test clicking on auth providers
  // it('click github login button and get redirected', () => {
  //
  //   Vue.click(wrapper, '.btn-github')
  //
  //   expect(window.location)
  //     .toBe(window.axiosConfig.baseURL + '/authenticate/github/' + btoa(wrapper.vm.baseUrl + '/auth-consumer/github'))
  //
  // })

})
