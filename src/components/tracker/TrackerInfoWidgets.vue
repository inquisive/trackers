<template>
  <div>
    
    <div class="row " style="margin-bottom:25px">
      
    </div>

    <div class="row tracker-info-widgets" style="margin-bottom:25px">
      
      <tracker-score-widget v-bind:feed="feed" ></tracker-score-widget>

      <div class="col-md-12 col-lg-6">
        <div style="height:70px;width:100%;padding:10px 0px">
          <div class=" inningBar">
            <div class="inning" style="float:left;width:50%;height:70px;text-align:left;line-height:1">{{ feed.displayInning }}</div>
            <div style="float:left;width:50%;height:70px;text-align:center;line-height:1">
              <div class="" style="font-size:2.2rem;margin-top:0px">
                {{feed.outsleft}}
              </div>
              <div class="stats-title " style="margin-bottom:20px">Outs Left</div>
            </div>
            
          </div>
        </div>
        <div style="height:70px;width:100%;padding:0px">
          <div class=" inningBar" style="padding-top:6px;float:left;width:50%;height:70px;text-align:center;line-height:1">
            
            <div class="balls">
                <div v-bind:class="['dot', feed.balls > 0 ? 'ball' : '']"></div>
                <div v-bind:class="['dot', feed.balls > 1 ? 'ball' : '']"></div>
                <div v-bind:class="['dot', feed.balls > 2 ? 'ball' : '']"></div>
                <div v-bind:class="['dot', feed.balls > 3 ? 'ball' : '']"></div>
            </div>
            <div class="strikes">
                <div v-bind:class="['dot', feed.strikes > 0 ? 'strike' : '']"></div>
                <div v-bind:class="['dot', feed.strikes > 1 ? 'strike' : '']"></div>
                <div v-bind:class="['dot', feed.strikes > 2 ? 'strike' : '']"></div>
            </div>
            
            
            <div class="outs">
                <div v-bind:class="['dot', feed.outs > 0 ? 'out' : '']"></div>
                <div v-bind:class="['dot', feed.outs > 1 ? 'out' : '']"></div>
                <div v-bind:class="['dot', feed.outs > 2 ? 'out' : '']"></div>
            </div>
            
            
          </div>
          <div style="float:left;width:50%;height:70px;text-align:center;line-height:1">
            <div class="">
              <div class="" style="font-size:2.2rem;margin-top:0px">
                {{feed.totalOuts}} <span style="font-size:18px"> &nbsp; of &nbsp; </span> {{feed.projectedOuts}}
              </div>
              <div class="stats-title " style="margin-bottom:20px">Outs Made</div>
            </div>
          </div>
        </div>
      </div>     
    </div>  
    
    <div class="row tracker-info-widgets">
      <div class="col-md-6 col-lg-3">
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
      
      
      <div class="col-md-6 col-lg-3">
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
      <div class="col-md-6 col-lg-3">
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
      <div class="col-md-6 col-lg-3">
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
  import TrackerScoreWidget from './TrackerInfoScoreWidget'

  export default {
    name: 'tracker-info-widgets',
    components: {
      TrackerScoreWidget
    },
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
          if (this.feed.gameMinutes < 1) {
            this.runtime = 'waiting for'
            return
          }
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
        feed.displayInning += ' ' + feed.inning
        feed.outText = 'Outs'
        if (feed.status.statusCode === 'S' || feed.status.statusCode === 'P' || feed.gameMinutes < 1) {
          // PREGAME
          feed.projectedEnd = moment(feed.startTime).fromNow(true)
          feed.projectedEndText = 'till first pitch'
          feed.projectedLength = 'waiting for'
          feed.pregame = true
          feed.notLive = true
          feed.live = false
          this.runtime = 'waiting for'
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
