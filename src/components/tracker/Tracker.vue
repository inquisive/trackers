<template>
  <div class="tracker">

    <tracker-info-widgets></tracker-info-widgets>

    <vuestic-widget class="no-padding no-v-padding">
      <vuestic-tabs
        :names="['time charts', 'inning charts', 'out charts', 'umpires', 'raw data']"
        ref="tabs">
        
        <div slot="time charts">
          <time-tab></time-tab>
        </div>
        <div slot="inning charts">
          <innings-tab></innings-tab>
        </div>
        <div slot="out charts">
          <data-visualisation-tab></data-visualisation-tab>
        </div>
        <div slot="umpires">
          <features-tab v-bind:officials="track.feed.officials" ></features-tab>
        </div>
        <div slot="raw data">
          <pre id="json">{{rawdata}}</pre>
        </div>
      </vuestic-tabs>
    </vuestic-widget>


  </div>
</template>

<script>
  import TrackerInfoWidgets from './TrackerInfoWidgets'
  import InningsTab from './innings-tab/InningsTab.vue'
  import TimeTab from './time-tab/TimeTab.vue'
  import FeaturesTab from './features-tab/FeaturesTab.vue'
  import DataVisualisationTab from './data-visualisation-tab/DataVisualisation.vue'
  import TrackerBottomWidgets from './TrackerBottomWidgets.vue'
  import store from 'vuex-store'

  export default {
    name: 'tracker',
    components: {
      DataVisualisationTab,
      TrackerInfoWidgets,
      FeaturesTab,
      TrackerBottomWidgets,
      InningsTab,
      TimeTab
    },
    methods: {},
    computed: {
      track () {
        return this.$store.getters.track
      },
      rawdata () {
        return JSON.stringify(this.$store.getters.feed, undefined, 4)
      }
    },
    mounted () {},
    beforeRouteEnter (to, from, next) {
      let gamepk = store.getters.gamepk
      if (!gamepk) {
        // store.commit('setLoading', false)
        next({ name: 'dashboard' })
      } else {
        next()
      }
    }
  }

</script>
<style lang="scss" scoped>
</style>
