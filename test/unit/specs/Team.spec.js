import Vue from 'vue'
import moxios from 'moxios'
import { mount } from '@vue/test-utils';
import CurrentUserService from '@/services/CurrentUserService'
import Team from '@/components/Team'
import router from '@/routes'


describe('Team', () => {
  let wrapper

  let user = {
    id: 10,
    email: "good@email.test",
    username: "foo",
    token: "123abc"
  }

  let currentUser = new CurrentUserService()

  let teamResponse = {
    "data": {
      "id": 1,
      "name": "team1",
      "members": [
        {
          "id": 1,
          "username": "test1",
          "email": "test1@user.dev",
          "role": "manager"
        },
        {
          "id": 2,
          "username": "test2",
          "email": "test2@user.dev",
          "role": "member"
        }
      ],
      "created_at": {
        "date": "2018-02-22 20:12:25.000000",
        "timezone_type": 3,
        "timezone": "UTC"
      }
    }
  }

  beforeEach(() => {

    moxios.install()

    currentUser.user = user
    wrapper = mount(Team, {
      currentUser,
      router
    })

  })

  afterEach(() => {

    moxios.uninstall()

  })



  it('should have loading message', () => {

    Vue.see(wrapper, 'Loading...')

  })

  it('should initially display no team', () => {

    expect(wrapper.vm.team).toEqual({name:'', members: {}})

  })

  it('should fail loading team with not allowed', (done) => {

    moxios.wait(function () {
      let request = moxios.requests.mostRecent()
      request.respondWith({
        status: 404,
        response: {
          error: "Resource not found"
        }
      }).then(() => {

        expect(wrapper.vm.loading).toBe(false)

        expect(wrapper.vm.forbidden).toBe(true)

        Vue.see(wrapper, "You don't have access to this team.")

        done()
      })
    })

  })

  it('should load team users', (done) => {

    moxios.wait(function () {
      let request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: teamResponse
      }).then(() => {

        expect(wrapper.vm.loading).toBe(false)

        expect(wrapper.vm.team.members.length).toBe(2)

        Vue.see(wrapper, 'test1')
        Vue.see(wrapper, 'test1@user.dev')
        Vue.see(wrapper, 'manager')

        Vue.see(wrapper, 'test2')
        Vue.see(wrapper, 'test2@user.dev')
        Vue.see(wrapper, 'member')

        done()
      })
    })

  })

})
