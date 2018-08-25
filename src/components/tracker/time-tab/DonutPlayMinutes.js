let run = (t) => {
  let feed = t.feed
  let labels = []
  let backgroundColor = []
  let data = []

  // add the play minutes
  labels.push('Playing Baseball')
  backgroundColor.push('#1B2544')
  data.push(feed.playMinutes)

  // add the other minutes
  let other = feed.gameMinutes - feed.playMinutes
  labels.push('Waiting to Play Baseball')
  backgroundColor.push('#707070')
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

