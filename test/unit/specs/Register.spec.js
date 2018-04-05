import Vue from 'vue'
import moxios from 'moxios'
import { mount } from '@vue/test-utils';
import Register from '@/components/Register'


describe('Register', () => {
  let wrapper

  beforeEach(() => {
    moxios.install()

    wrapper = mount(Register)
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it('should have a register form object', () => {

    expect(wrapper.vm.form.data)
      .toEqual(new Vue.form({
        email: '',
        username: '',
        password: '',
        password_confirmation: ''
      }).data)

  })

  it('should load register page', () => {

    Vue.see(wrapper, 'Register')

    expect(wrapper.contains('input[type="email"]')).toBe(true)
    expect(wrapper.contains('input[type="password"]')).toBe(true)
    expect(wrapper.contains('input[type="password"]')).toBe(true)
    expect(wrapper.contains('button[type="submit"]')).toBe(true)

  })

  it('should fail register, passwords do not match', (done) => {

    wrapper.vm.form.data.email = 'meh@email.test'
    wrapper.vm.form.data.username = 'the_username'
    wrapper.vm.form.data.password = 'my pass'
    wrapper.vm.form.data.password_confirmation = 'not matching'

    wrapper.find('form').trigger('submit')

    moxios.wait(function () {
      let request = moxios.requests.mostRecent()
      request.respondWith({
        status: 422,
        response: {
          status_code: 422,
          message: "Could not create new account.",
          errors: {
            "password": ["The password confirmation does not match."]
          }

        }
      }).then(() => {
        Vue.see(wrapper, 'The password confirmation does not match.')

        done()
      })
    })

  })

  it('should succeed register', () => {

    wrapper.vm.form.data.email = 'meh@email.test'
    wrapper.vm.form.data.username = 'the_username'
    wrapper.vm.form.data.password = 'my pass'
    wrapper.vm.form.data.password_confirmation = 'my pass'

    wrapper.find('form').trigger('submit')

    moxios.wait(function () {
      let request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: {
          status_code: 200,
          data: {
            "id": 123,
            "email": "meh@email.test",
            "username": "the_username"
          }
        }
      }).then(() => {
        expect(wrapper.vm.form.errors.hasErrors()).toBe(false)

        expect(wrapper.vm.register).toBe(true)

        Vue.see(wrapper, 'We sent you an email to confirm your registration.')

        done()
      })
    })

  })

})
