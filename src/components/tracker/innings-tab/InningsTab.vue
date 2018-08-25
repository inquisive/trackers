<template>
  <div class="data-visualisation-tab tracker-tab">
    <h3>Complete Innings</h3>
    <div class="row">
      <div class="col-md-6">
        <div class="chart-container">
          <vuestic-chart v-bind:data="donutChartData" type="donut"></vuestic-chart>
        </div>
      </div>
      <div class="col-md-6">
        <div class="chart-container">
          <vuestic-chart v-bind:data="donutChartData" type="horizontal-bar"></vuestic-chart>
        </div>
      </div>
    </div>
    <div style="width:1px;height:75px"></div>
    <h3>Complete Inning Play Time</h3>
    <div class="row">
      <div class="col-md-6">
        <div class="chart-container">
          <vuestic-chart v-bind:data="playChartData" type="donut"></vuestic-chart>
        </div>
      </div>
      <div class="col-md-6">
        <div class="chart-container">
          <vuestic-chart v-bind:data="playChartData" type="horizontal-bar"></vuestic-chart>
        </div>
      </div>
    </div>
    <div style="width:1px;height:75px"></div>
    <h3>Half Inning Play Time</h3>
    <div class="row">
      <div class="col-md-6">
        <div class="chart-container">
          <vuestic-chart v-bind:data="halfInningChartData" type="donut"></vuestic-chart>
        </div>
      </div>
      <div class="col-md-6">
        <div class="chart-container">
          <vuestic-chart v-bind:data="halfInningChartData" type="horizontal-bar"></vuestic-chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import DonutChartData from './DonutChartData'
  import PlayChartData from './PlayChartData'
  import HalfInningChartData from './HalfInningChartData'

  export default {
    name: 'data-visualisation-tab',
    data () {
      return {}
    },
    computed: {
      track () {
        return this.$store.getters.track
      },
      donutChartData () {
        return DonutChartData(this.$store.getters.track)
      },
      halfInningChartData () {
        return HalfInningChartData(this.$store.getters.track)
      },
      playChartData () {
        return PlayChartData(this.$store.getters.track)
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
