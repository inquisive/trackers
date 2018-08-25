let run = (t) => {
  let feed = t.feed
  let labels = []
  let backgroundColor = []
  let data = []

  // add the top minutes
  labels.push(feed.away + ' at bat in play')
  backgroundColor.push('#1B2544')
  let n = 0
  feed.innings.forEach(e => {
    n += e.top.playMinutes
  })
  data.push(n)

  // add the bottom minutes
  labels.push(feed.home + ' at bat in play')
  backgroundColor.push('#e96c19')
  let nn = 0
  feed.innings.forEach(e => {
    nn += e.bottom.playMinutes
  })
  data.push(nn)

  // add the final minutes
  let other = feed.gameMinutes - (n + nn)
  labels.push('Waiting for them to play')
  backgroundColor.push('#707070')
  data.push(other)

  let dataset = {
    label: 'In Play While At Bat',
    backgroundColor,
    data
  }

  return {
    labels: labels,
    datasets: [dataset]
  }
}

export default run

