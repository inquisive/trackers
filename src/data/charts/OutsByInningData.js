// import utils from 'services/utils'
import store from 'vuex-store'
import moment from 'moment'

let palette = store.getters.palette

export default (feed) => {
  if (!feed) {
    return {
      labels: [],
      datasets: {}
    }
  }
  let events = feed.events

  let labels = []
  let datasets = [
    {
      label: '1st Out',
      backgroundColor: palette.info,
      borderColor: palette.primary,
      data: []
    },
    {
      label: '2nd Out',
      backgroundColor: palette.primary,
      borderColor: palette.info,
      data: []
    },
    {
      label: '3rd Out',
      borderColor: palette.warning,
      backgroundColor: palette.danger,
      data: []
    },
  ]

  for (let i = 1; i <= feed.inning; i++) {
    labels.push('T' + i)
    labels.push('B' + i)
  }

  for (let i = 0; i < events.length; i++) {
    const e = events[i]

    switch (e.out) {
      case 1:
        let a = e.half === 1 ? feed.innings[e.inning - 1].top.startTime : feed.innings[e.inning - 1].bottom.startTime
        let b = e.timeOfEvent
        datasets[0].data.push(((moment(b).unix() - moment(a).unix()) / 60).toFixed(2))
        break
      case 2:
        const aa = events[i - 1].timeOfEvent
        const bb = e.timeOfEvent
        datasets[1].data.push(((moment(bb).unix() - moment(aa).unix()) / 60).toFixed(2))
        break
      case 3:
        const aaa = events[i - 1].timeOfEvent
        const bbb = e.timeOfEvent
        datasets[2].data.push(((moment(bbb).unix() - moment(aaa).unix()) / 60).toFixed(2))
        break
    }
  }
  return {
    labels,
    datasets
  }
}
