import moment from 'moment'

// let colors = store.getters.colors

export default (feed) => {
  let events = feed.events

  let data = []
  if (!events || events.length === 0) {
    return data
  }
  let time = events[0].startTime
  for (let i = 0; i < events.length; i++) {
    const a = (moment(events[i].timeOfEvent).unix() - moment(time).unix()) / 60
    time = events[i].timeOfEvent
    const allMinutes = moment(events[i].timeOfEvent).diff(moment(events[i].startTime), 'minutes')
    const hh = Math.floor(allMinutes / 60)
    const mm = Math.floor(allMinutes - (hh * 60))
    const lab = `${hh} hr ${mm} mins`
    const half = events[i].half === 1 ? 'T' : 'B'
    const team = events[i].half === 1 ? feed.away : feed.home
    data.push({
      class: 'mlb-' + team.toLowerCase(),
      borderColor: '#eee',
      border: '#eee',
      size: ((a / feed.gameMinutes) * 100) + '%',
      label: `${half}${events[i].inning} ${team} / Out ${i + 1} / ${lab} `
    })
  }
  // console.log(datasets)
  return data
}


