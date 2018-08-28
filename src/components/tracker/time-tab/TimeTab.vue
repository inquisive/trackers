<template>
  <div class="data-visualisation-tab tracker-tab">
    <div class="row">
      <div class="col-md-12">
        <h3>projected minutes</h3>
        <div style="height:400px">
          <vuestic-chart :data="projectedEndLineChartData" type="line"></vuestic-chart>
        </div>
      </div>
    </div>
    <div class="row" style="margin-top: 0px;">
      <div class="col-md-12">
        <h3>outsline</h3>
        <div style="width:100%;overflow: 'hidden'">
          <div  v-for="(data, id) in projectedEndLineChartDataStretch" :key="id" :class="data.class" :title="data.label" :style="{ border: '1px dashed ' + data.border, overflow: 'hidden', height: '35px', width: data.size, float: 'left', background: data.color }" >
          </div>
        </div>
      </div>
    </div>
    <div class="row" style="margin-top:65px">
      <div class="col-md-4" style="text-align:center;">
        <h3>game breakdown</h3>
        <div class="chart-container">
          <vuestic-chart v-bind:data="donutInningMinutes" type="pie"></vuestic-chart>
        </div>
      </div>
      <div class="col-md-4" style="text-align:center;">
        <h3>in a play</h3>
        <div class="chart-container">
          <vuestic-chart v-bind:data="donutPlayMinutes" type="pie"></vuestic-chart>
        </div>
      </div>
      
      <div class="col-md-4" style="text-align:center;">
        <h3>team in a play</h3>
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
  import ProjectedEndLineChartDataStretch from '@/data/charts/ProjectedEndLineChartDataStretch'

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
      projectedEndLineChartDataStretch () {
        let feed = this.$store.getters.feed
        return ProjectedEndLineChartDataStretch(feed)
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
