let run = (t) => {
  let feed = t.feed
  let labels = []
  let backgroundColor = []
  let data = []

  // add the  minutes from half
  labels.push('Commercial Breaks')
  backgroundColor.push('#b2c6cf')
  let other = feed.gameMinutes - (feed.inningMinutes)
  data.push((feed.inningMinutes - feed.halfInningMinutes) + other)

  // add the top minutes
  labels.push(feed.away + ' at bat')
  backgroundColor.push('#1B2544')
  let n = 0
  feed.innings.forEach(e => {
    n += e.top.minutes
  })
  data.push(n)

  // add the bottom minutes
  labels.push(feed.home + ' at bat')
  backgroundColor.push('#e96c19')
  let nn = 0
  feed.innings.forEach(e => {
    nn += e.bottom.minutes
  })
  data.push(nn)

  let dataset = {
    label: 'Inning Time in Minutes',
    backgroundColor,
    data
  }

  return {
    labels: labels,
    datasets: [dataset]
  }
}

export default run

