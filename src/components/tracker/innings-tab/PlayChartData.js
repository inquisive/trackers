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
  let ttt = 0
  for (i = 1; i <= numOfInnings; i++) {
    labels.push(getOrdinal(i))
    backgroundColor.push(colors[i])
    let use = find(innings, ['inning', i]) || {}
    data.push(use.playMinutes)
    ttt += use.playMinutes
  }

  // add the other minutes
  let other = feed.gameMinutes - ttt
  labels.push('Ghost')
  backgroundColor.push('#707070')
  data.push(other)

  let dataset = {
    label: 'Live Play in Minutes',
    backgroundColor,
    data
  }

  return {
    labels: labels,
    datasets: [dataset]
  }
}

export default run
