import moment from 'moment'

const toggleWithoutAnimation = state => state.app.sidebar.withoutAnimation
const config = state => state.app.config
const palette = state => state.app.config.palette
const isLoading = state => state.app.isLoading
const track = state => state.app.track
const gamepk = state => state.app.track.gamepk
const day = state => state.app.track.day
const formattedDay = state => moment(state.app.track.day).format('YYYYMMDD')
const displayDaySmall = state => moment(state.app.track.day).format('L')
const schedule = state => state.app.track.schedule
const feed = state => state.app.track.feed
const colors = state => state.app.colors
const opened = state => state.app.sidebar.opened

export {
  toggleWithoutAnimation,
  config,
  palette,
  isLoading,
  track,
  day,
  schedule,
  feed,
  colors,
  gamepk,
  formattedDay,
  displayDaySmall,
  opened
}
