<template>
  <div class="dashboard">
        <div  class="d-flex justify-content-center">
          <table class="table table-striped first-td-padding">
            <thead>
                <tr>
                  <td>Time</td>
                  <td>Away</td>
                  <td>Home</td>
                  <td>Score</td>
                  <td>Status</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(sched, id) in schedule" :key="id" >
                    
                    <router-link tag="td" :to="{ name: 'setGamePk', params: { gamepk: sched.gamepk }}" style="cursor:pointer">{{sched.start}}</router-link>
                    <router-link tag="td" :to="{ name: 'setGamePk', params: { gamepk: sched.gamepk }}" style="cursor:pointer">{{sched.awayTeam}}</router-link>
                    <router-link tag="td" :to="{ name: 'setGamePk', params: { gamepk: sched.gamepk }}" style="cursor:pointer">{{sched.homeTeam}}</router-link>
                    <router-link tag="td" :to="{ name: 'setGamePk', params: { gamepk: sched.gamepk }}" style="cursor:pointer">{{sched.awayScore + ' - ' + sched.homeScore}}</router-link>
                    <router-link tag="td" :to="{ name: 'setGamePk', params: { gamepk: sched.gamepk }}" style="cursor:pointer">{{sched.stat}}</router-link>
                </tr>
            </tbody>
          </table>
        </div>
        
  </div>
</template>

<script>
  import moment from 'moment'

  export default {
    name: 'dashboard',
    components: {},
    methods: {},
    computed: {
      schedule () {
        let track = this.$store.getters.schedule
        track.forEach(v => {
          v.start = moment(v.startTime).format('LT')
          const h = Math.floor(v.gameMinutes / 60)
          const m = v.gameMinutes - (h * 60)
          const ist = v.half === 1 ? 'Top ' : 'Bot '
          v.stat = v.status.abstractGameCode === 'F' ? `Final / ${h} hr ${m} mins` : v.status.abstractGameCode === 'L' ? ist + v.inning + '  /  ' + `${h} hr ${m} mins` : v.status.detailedState
        })
        return track
      }
    },
    mounted () {}
  }

</script>
<style lang="scss" scoped>
</style>
