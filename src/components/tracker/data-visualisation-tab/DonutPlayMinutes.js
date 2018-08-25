let run = (t) => {
  let feed = t.feed
  let labels = []
  let backgroundColor = []
  let data = []

  // add the play minutes
  labels.push('action')
  backgroundColor.push('#3F94A1')
  data.push(feed.playMinutes)

  // add the other minutes
  let other = feed.gameMinutes - feed.playMinutes
  labels.push('dead time')
  backgroundColor.push('#c13f10')
  data.push(other)

  let dataset = {
    label: 'Live Action Time in Minutes',
    backgroundColor,
    data
  }

  return {
    labels: labels,
    datasets: [dataset]
  }
}

export default run

