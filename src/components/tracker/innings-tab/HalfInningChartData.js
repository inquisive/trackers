import find from 'lodash/find'
import store from 'vuex-store'

let colors = store.getters.colors

let run = (t) => {
  let feed = t.feed
  let innings = feed.innings || []
  let numOfInnings = feed.innings.length
  let labels = []
  let backgroundColor = []
  let data = []

  let getOrdinal = (n) => {
    let s = [ 'th', 'st', 'nd', 'rd' ]
    let v = n % 100
    return n + (s[(v - 20) % 10] || s[v] || s[0])
  }
  let i
  let tt = 0
  for (i = 1; i <= numOfInnings; i++) {
    let use = find(innings, ['inning', i]) || {}
    if (use.top.playMinutes > 0) labels.push('Top ' + getOrdinal(i))
    if (use.bottom.playMinutes > 0) labels.push('Bottom ' + getOrdinal(i))
    if (use.top.playMinutes > 0) backgroundColor.push(colors[i])
    if (use.bottom.playMinutes > 0) backgroundColor.push(colors[i + 9])
    if (use.top.playMinutes > 0) data.push(use.top.playMinutes)
    if (use.bottom.playMinutes > 0) data.push(use.bottom.playMinutes)
    tt += use.playMinutes
  }

  // add the other minutes
  let other = feed.gameMinutes - tt
  labels.push('Ghost')
  backgroundColor.push('#707070')
  data.push(other)

  let dataset = {
    label: 'Time in Minutes',
    backgroundColor,
    data
  }

  return {
    labels: labels,
    datasets: [dataset]
  }
}

export default run
