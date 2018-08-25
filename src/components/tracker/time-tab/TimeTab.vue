<template>
  <div class="data-visualisation-tab tracker-tab">
    <div class="row">
      <div class="col-md-12">
        <h3>Projected Minutes</h3>
        <div style="height:400px">
          <vuestic-chart :data="projectedEndLineChartData" type="line"></vuestic-chart>
        </div>
      </div>
    </div>
    <div class="row" style="margin-top:65px">
      <div class="col-md-4">
        <h3>Game Breakdown</h3>
        <div class="chart-container">
          <vuestic-chart v-bind:data="donutInningMinutes" type="pie"></vuestic-chart>
        </div>
      </div>
      <div class="col-md-4">
        <h3>In a Play</h3>
        <div class="chart-container">
          <vuestic-chart v-bind:data="donutPlayMinutes" type="pie"></vuestic-chart>
        </div>
      </div>
      
      <div class="col-md-4">
        <h3>Team in a Play</h3>
        <div class="chart-container">
          <vuestic-chart v-bind:data="donutPlayTeamMinutes" type="pie"></vuestic-chart>
        </div>
      </div>
     
    </div>
  </div>
</template>

<script>
  import DonutPlayMinutes from './DonutPlayMinutes'
  import DonutInningMinutes from './DonutInningMinutes'
  import DonutPlayTeamMinutes from './DonutPlayTeamMinutes'
  import ProjectedEndLineChartData from '@/data/charts/ProjectedEndLineChartData'

  export default {
    name: 'data-visualisation-tab',
    data () {
      return {}
    },
    computed: {
      track () {
        return this.$store.getters.track
      },
      donutInningMinutes () {
        return DonutInningMinutes(this.$store.getters.track)
      },
      donutPlayMinutes () {
        return DonutPlayMinutes(this.$store.getters.track)
      },
      donutPlayTeamMinutes () {
        return DonutPlayTeamMinutes(this.$store.getters.track)
      },
      projectedEndLineChartData () {
        let feed = this.$store.getters.feed
        return ProjectedEndLineChartData(feed)
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "../../../sass/_variables.scss";
  @import "~bootstrap/scss/functions";
  @import "~bootstrap/scss/variables";
  @import "~bootstrap/scss/mixins/breakpoints";

  .chart-container {
    padding: 0 2rem;
    height: 24rem;
  }


</style>
