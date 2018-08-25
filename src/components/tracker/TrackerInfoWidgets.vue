<template>
  <div>
    

    <div class="row tracker-info-widgets">
      
      <div class="col-md-6 col-xl-3">
        <vuestic-widget  class="info-widget  " style="background:transparent;-webkit-box-shadow:none;box-shadow:none">
          <div  v-bind:class="[{ 'has-chart': feed.live }, 'info-widget-inner']">
            <div class="stats" style="padding:0 0 0 10px;;margin-bottom:0px">
              <div class="stats-title title-above">{{feed.displayInning}}</div>
              <div class="stats-number" >
                {{feed.iorf}}
              </div>
              
            </div>
            <div v-bind:class="[{ 'd-none': feed.notLive }, 'stats']" style="padding:0 20px 0 0;margin-bottom:0px" >
              <div class="stats-title">{{feed.outText}}</div>
              <div class="stats-number" >
                {{feed.outs}}
              </div>
              
            </div>
          </div>
        </vuestic-widget>
      </div>
     


      <div class="col-md-6 col-xl-3">
        <vuestic-widget style="-webkit-box-shadow:none;box-shadow:none" v-bind:class="[ `mlb-${feed.away.toLowerCase()}`, 'info-widget']">
          <div v-bind:class="['info-widget-inner', 'has-chart']">
             
            <div class="stats">
              <div class="stats-number" style="font-size:40px">
                {{ feed.away }}
              </div>
              <div class="stats-title" >{{feed.awayTeamData.leagueRecord.wins}} - {{feed.awayTeamData.leagueRecord.losses}}</div>
            </div>
           <div class="chart-container"   style="font-size:50px;font-weight:bold;margin-bottom:0px">
                {{feed.awayScore}}
            </div>
          </div>
        </vuestic-widget>
      </div>

      <div class="col-md-6 col-xl-3">
        <vuestic-widget style="-webkit-box-shadow:none;box-shadow:none" v-bind:class="[ `mlb-${feed.home.toLowerCase()}`, 'info-widget']">
          <div class="info-widget-inner has-chart">
            <div class="chart-container" style="padding-top:0px;font-size:50px;font-weight:bold">
                {{feed.homeScore}}
            </div>
            <div clas="stats">
              <div class="stats-number" style="font-size:40px">
                {{ feed.home }}
              </div>
              <div class="stats-title">{{feed.homeTeamData.leagueRecord.wins}} - {{feed.homeTeamData.leagueRecord.losses}}</div>
            </div>
            
          </div>
        </vuestic-widget>
      </div>

       <div class="col-md-6 col-xl-3">
       <vuestic-widget class="info-widget  " style="background:transparent;-webkit-box-shadow:none;box-shadow:none">
          <div class="info-widget-inner has-chart" style="margin-bottom:12px">
              
            <div class="stats " style="padding:0 0px 0 0px" >
              <div class="stats-number">
                {{feed.totalOuts}} <span style="font-size:16px"> &nbsp; of &nbsp; </span> {{feed.projectedOuts}}
              </div>
              <div class="stats-title" style="margin-bottom:0px">{{'tracker.totalOuts' | translate}}</div>
            </div>
           <div class="stats " style="padding:0 0px 0 0;margin-bottom:0px" >
              <div class="stats-number">
                {{feed.outsleft}}
              </div>
              <div class="stats-title" style="margin-bottom:0px">Left</div>
            </div>
          </div>
        </vuestic-widget> 
      </div>

      
    </div> 


    <div class="row tracker-info-widgets">
      <div class="col-md-6 col-xl-3">
        <vuestic-widget class="info-widget bg-primary white" style="border-top:0">
          <div class="info-widget-inner">
            <div class="stats">
              
              <div class="stats-number" style="font-size:1.7rem;">
                {{feed.start}}
              </div>
              <div class="stats-title " style="margin-bottom:0px">Start Time</div>
            </div>
          </div>
        </vuestic-widget>
      </div>
      
      
      <div class="col-md-6 col-xl-3">
        <vuestic-widget class="info-widget bg-primary white" style="border-top:0">
          <div class="info-widget-inner">
            <div class="info-widget-inner ">
              <div class="stats">
                <div class="stats-number white" style="font-size:1.7rem;margin-bottom:0px">
                  {{ feed.projectedEnd }}
                </div>
                <div class="stats-title" style="margin-bottom:0px" >{{feed.projectedEndText}}</div>
              </div>
             
            </div>
          </div>
        </vuestic-widget>
      </div>
      <div class="col-md-6 col-xl-3">
        <vuestic-widget class="info-widget bg-primary white" style="border-top:0">
          <div class="info-widget-inner">
            <div class="stats">
              <div class="stats-number" style="font-size:1.7rem;">
                {{feed.projectedLength}}
              </div>
              <div class="stats-title">{{feed.projectedLengthText}}</div>
            </div>
          </div>
        </vuestic-widget>
      </div>
      <div class="col-md-6 col-xl-3">
        <vuestic-widget class="info-widget bg-primary white" style="border-top:0">
          <div class="info-widget-inner">
            <div class="stats" >
              
              <div class="stats-number" style="font-size:1.7rem;">
                {{runtime}}
              </div>
              <div class="stats-title " style="">{{'tracker.runtime' | translate}}</div>
            </div>
          </div>
        </vuestic-widget>
      </div>
    </div>



  </div>
</template>

<script>
  import moment from 'moment'

  export default {
    name: 'tracker-info-widgets',
    data: () => ({
      htmlLegend: null,
      interval: null,
      runtime: '00:00:00'
    }),
    methods: {
      getRuntime (then, now) {
        now = moment(now).unix()
        const time = (Math.floor((now - moment(then).unix())) / 60)
        let hours = Math.floor(time / 60)
        if (hours.toString().length === 1) hours = '0' + hours
        let minutes = Math.floor(time % 60)
        if (minutes.toString().length === 1) minutes = '0' + minutes
        let seconds = Math.floor((time * 60) - (((hours * 60) * 60) + (minutes * 60)))
        if (seconds.toString().length === 1) seconds = '0' + seconds
        // gameMinutes NEEDS AN ADJUSTMENT
        // const h = Math.floor(feed.gameMinutes / 60)
        // const m = feed.gameMinutes % 60
        return `${hours}:${minutes}:${seconds}`
      },
      setInterval () {
        this.interval = setInterval(() => {
          if (this.feed.isFinal) {
            this.runtime = this.getRuntime(this.feed.startTime, moment(this.feed.innings[this.feed.innings.length - 1].endTime))
            return
          }
          if (this.feed.startTime) {
            this.runtime = this.getRuntime(this.feed.startTime)
          }
        }, 1000)
      },
      clearInterval () {
        clearInterval(this.interval)
      }
    },
    mounted () {
      this.clearInterval()
      this.setInterval()
    },
    computed: {
      feed () {
        const feed = { ...this.$store.getters.track.feed }
        feed.color1 = 'white'
        feed.live = true
        feed.notLive = false
        feed.pregame = false
        /*eslint-disable */
        feed.isHomeWinning = feed.homeScore > feed.awayScore ? true : false
        feed.isAwayWinning = feed.homeScore < feed.awayScore ? true : false
        /*eslint-enable */
        feed.start = moment(feed.startTime).format('LTS')
        feed.projectedEnd = feed.projectedEndTime ? moment(feed.projectedEndTime).format('LTS') : moment(feed.startTime).add(3, 'h').format('LTS')
        feed.percentDone = feed.gameMinutes === 0 ? 0 : Math.round((feed.gameMinutes / feed.projectedMinutes) * 100)
        feed.projectedEndText = 'Projected End'
        feed.outsleft = feed.projectedOuts - feed.totalOuts
        const hh = Math.floor(feed.projectedMinutes / 60)
        const mm = Math.round(feed.projectedMinutes) - (hh * 60)
        feed.projectedLength = feed.projectedMinutes ? `${hh} hr ${mm} mins` : '3 hrs'
        feed.projectedLengthText = 'Projected Length'
        feed.displayInning = feed.half === 1 ? 'Top' : 'Bottom'
        feed.iorf = feed.inning
        feed.outText = 'Outs'
        if (feed.status.statusCode === 'S' || feed.status.statusCode === 'P' || feed.gameMinutes < 1) {
          // PREGAME
          feed.projectedEnd = moment(feed.startTime).fromNow(true)
          feed.projectedEndText = 'till first pitch'
          feed.pregame = true
          feed.notLive = true
          feed.live = false
          this.runtime = '00:00:00'
        }
        if (feed.status.abstractGameCode === 'F') {
          // FINAL
          feed.projectedLength = 'Final'
          feed.projectedEndText = 'End of Game'
          feed.projectedEnd = moment(feed.innings[feed.innings.length - 1].endTime).format('LTS')
          feed.projectedLengthText = feed.inning + ' innings'
          feed.notLive = true
          feed.live = false
          this.runtime = this.getRuntime(feed.startTime, moment(feed.innings[feed.innings.length - 1].endTime))
          //  feed.displayInning = 'Winner'
          // feed.iorf = feed.awayScore > feed.homeScore ? feed.away : feed.home
        }
        return feed
      }
    },
  }
</script>

<style lang="scss" scoped>
  .stats-number, .stats-title {
    line-height: 1.2;
  }
  .white {
    color: white;
  }
  .stats-score {

  }
  .info-widget-inner {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;

    &.has-chart {
      justify-content: space-between;
    }

    .stats {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  }
  .smaller-font {
    font-size: 1.9rem
  }
  .stats-number {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 1.9rem;
    margin-bottom: 0;

    .stats-icon {
      font-size: 1.5625rem;
      position: absolute;
      top: 0.625rem;
      left: -1.25rem;

      &.icon-wide {
        left: -1.875rem;
      }
    }

    .smaller-font {
      font-size: 2rem
    }
  }

</style>
