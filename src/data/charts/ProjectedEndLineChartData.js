import utils from 'services/utils'
import store from 'vuex-store'
import moment from 'moment'

let palette = store.getters.palette

export default (feed) => {
  let events = feed.events

  let labels = []
  let datasets = [
    {
      label: 'Actual',
      backgroundColor: utils.hex2rgb(palette.primary, 0.3).css,
      borderColor: utils.hex2rgb(palette.info, 0.8).css,
      data: []
    },
    {
      label: 'Projected',
      backgroundColor: utils.hex2rgb(palette.info, 0.9).css,
      borderColor: utils.hex2rgb(palette.primary, 0.8).css,
      data: []
    },
    {
      label: 'Average',
      borderColor: utils.hex2rgb(palette.warning, 0.7).css,
      backgroundColor: palette.transparent,
      pointBorderColor: palette.transparent,
      borderWidth: 2,
      data: []
    },
  ]

  if (feed.isFinal) {
    // add a line for the gameMinutes
    datasets.push({
      label: 'Final',
      borderColor: utils.hex2rgb('#2b2b2b', 0.9).css,
      backgroundColor: palette.transparent,
      pointBorderColor: palette.transparent,
      borderWidth: 3,
      data: []
    })
  }

  for (let i = 0; i < events.length; i++) {
    labels.push((i + 1))
    datasets[1].data.push(Math.round(events[i].projectedMinutes))
    datasets[2].data.push(180)
    if (feed.isFinal) {
      datasets[3].data.push(feed.gameMinutes)
    }
    const a = moment(events[i].timeOfEvent).unix() - moment(events[i].startTime).unix()
    datasets[0].data.push(Math.round(a / 60))
  }
  // console.log(datasets)
  return {
    labels,
    datasets
  }
}


