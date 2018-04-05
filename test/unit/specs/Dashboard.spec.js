import Vue from 'vue'
import moxios from 'moxios'
import { mount } from '@vue/test-utils';
import CurrentUserService from '@/services/CurrentUserService'
import Dashboard from '@/components/Dashboard'


describe('Dashboard', () => {
  let wrapper

  let user = {
    id: 10,
    email: "good@email.test",
    username: "foo",
    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjkwODYvdjEvYXV0aGVudGljYXRlIiwiaWF0IjoxNTE5NDI1MzA2LCJleHAiOjE1MTk0Mjg5MDYsIm5iZiI6MTUxOTQyNTMwNiwianRpIjoiZDNmM2QxMTE2ZDcyMDQ4ODhjMWJiNjZmMzNjNzgwMzUiLCJzdWIiOjF9.F9vw3EnVKVH2D-3f9Qgub01ZCg8nP6X8xfXo0MAWN7w"
  }

  let currentUser = new CurrentUserService()

  beforeEach(() => {
    currentUser.user = user
    wrapper = mount(Dashboard, {
      currentUser
    })

  })

  it('should have dashboard title and user greeting', () => {

    Vue.see(wrapper, 'Dashboard')

    Vue.see(wrapper, 'Hello there, foo')
  })


})
