import * as types from '../mutation-types'
import moment from 'moment'

let colors = []
let i
let color = () => ('#' + ('283842' + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6))
for (i = 0; i < 75; i++) {
  colors.push(color())
}

const state = {
  sidebar: {
    opened: false,
    withoutAnimation: false
  },
  config: {
    googleMaps: {
      apiKey: 'AIzaSyBNAqPrTQoz9P4NBlDDyfxrnKiafkaL8iQ'
    },
    windowMatchSizeLg: '(min-width: 992px)',
    palette: {
      primary: '#1B2544',
      danger: '#e34a4a',
      info: '#cae1ff',
      success: '#db76df',
      warning: '#e96c19',
      white: '#fff',
      black: '#000',
      fontColor: '#34495e',
      transparent: 'transparent',
      lighterGray: '#ddd'
    }
  },
  isLoading: true,
  track: {
    schedule: [],
    day: moment(),
    feed: {},
    gamepk: ''
  },
  colors
}

const mutations = {
  [types.CLOSE_MENU] (state) {
    if (document.documentElement.clientWidth < 992) {
      state.sidebar.opened = false
    }
  },
  [types.TOGGLE_SIDEBAR] (state, opened) {
    // console.log('set sidebar', opened)
    state.sidebar.opened = opened
  },
  changeDay (state, day) {
    // console.log('set day', day)
    state.track.day = moment(day)
  },
  changeGamePk (state, gamepk) {
    // console.log('set gamepk', gamepk)
    state.track.gamepk = gamepk
  },
  setTracker (state, track) {
    // console.log('set tracker', track)
    // state.track.schedule = track.schedule
    // state.track.feed = track.feed
  },
  [types.TOGGLE_WITHOUT_ANIMATION] (state, value) {
    state.sidebar.withoutAnimation = value
  },
  setLoading (state, isLoading) {
    state.isLoading = isLoading
  },
  setFeed (state, feed) {
    state.track.feed = feed
  },
  setSchedule (state, schedule) {
    state.track.schedule = schedule
  },
  SOCKET_FEED (state, feed) {
    // console.log('commit SOCKET_FEED feed', feed)
    state.track.feed = feed[0]
  },
  SOCKET_SCHEDULE (state, schedule) {
    // console.log('commit SOCKET_SCHEDULE', schedule)
    state.track.schedule = schedule[0]
  },
  SOCKET_CONNECT (state) {
    state.isConnected = true
  },
  SOCKET_DISCONNECT (state) {
    state.isConnected = false
  },

}

const actions = {
  closeMenu ({ commit }) {
    commit(types.CLOSE_MENU)
  },
  toggleSidebar ({ commit }, opened) {
    commit(types.TOGGLE_SIDEBAR, opened)
  },
  changeDay ({ commit }, day) {
    commit('changeDay', day)
  },
  changeGamePk ({ commit }, gamepk) {
    commit('changeGamePk', gamepk)
  },
  setTracker ({ commit }, track) {
    commit('setTracker', track)
  },
  isToggleWithoutAnimation ({ commit }, value) {
    commit(types.TOGGLE_WITHOUT_ANIMATION, value)
  },
  feed ({ commit }, feed) {
    console.log('set feed', feed)
    commit('SOCKET_FEED', feed)
  },
  schedule ({ commit }, schedule) {
    console.log('set socket_schedule', schedule)
    commit('SOCKET_SCHEDULE', schedule)
  }
}

export default {
  state,
  mutations,
  actions
}
