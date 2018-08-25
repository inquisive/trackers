<template>
  <div class="data-visualisation-tab tracker-tab">
    <div class="row">
      <div class="col-md-12">
        <h3>Length of Outs by Minute</h3>
        <div class="chart-container">
          <vuestic-chart v-bind:data="outsByInningData" type="vertical-bar"></vuestic-chart>
        </div>
      </div>
      
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="chart-container">
          <vuestic-chart v-bind:data="outsByInningData" :options="{ legend: { display: false } }" type="donut"></vuestic-chart>
        </div>
      </div>
      <div class="col-md-6">
        <div class="chart-container">
          <vuestic-chart v-bind:data="outsByInningData" :options="{ legend: { display: false } }" type="pie"></vuestic-chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import OutsByInningData from '@/data/charts/OutsByInningData'

  export default {
    name: 'data-visualisation-tab',
    data () {
      return {
        htmlLegend: null,
      }
    },
    computed: {
      track () {
        return this.$store.getters.track
      },
      outsByInningData () {
        return OutsByInningData(this.$store.getters.feed)
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
