import Vue from 'vue'
import moxios from 'moxios'
import { mount } from '@vue/test-utils';
import CurrentUserService from '@/services/CurrentUserService'
import Teams from '@/components/Teams'
import moment from "moment/moment";


describe('Teams', () => {
  let wrapper

  let user = {
    id: 10,
    email: "good@email.test",
    username: "foo",
    token: "123abc"
  }

  let currentUser = new CurrentUserService()

  let validTeams = {
    "data": [
      {
        "id": 1,
        "name": "team1",
        "created_at": {
          "date":"2018-02-22 20:12:25.000000",
          "timezone_type": 3,
          "timezone":"UTC"
        }
      },
      {
        "id": 5,
        "name": "team 5",
        "created_at": {
          "date":"2018-03-01 20:12:25.000000",
          "timezone_type": 3,
          "timezone":"UTC"
        }
      }
    ]
  }

  beforeEach(() => {

    moxios.install()

    currentUser.user = user
    wrapper = mount(Teams, {
      currentUser
    })

  })

  afterEach(() => {

    moxios.uninstall()

  })



  it('should have teams title', () => {

    Vue.see(wrapper, 'Teams')

  })

  it('should initially display no teams', () => {

    Vue.see(wrapper, 'You are not part of any teams.')

    expect(wrapper.vm.teams).toEqual({})

  })

  it('should load teams and display them', (done) => {

    moxios.wait(function () {
      let request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: validTeams
      }).then(() => {
        // No errors on the form
        expect(wrapper.vm.teams.length).toBe(2)

        Vue.see(wrapper, 'team1')

        Vue.see(wrapper, moment.utc('2018-03-01 20:12:25.000000').local().format('l LTS'))

        done()
      })
    })

  })

})
