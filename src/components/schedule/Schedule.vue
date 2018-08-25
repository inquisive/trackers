<template>
  <div class="schedule">
    <table class="table table-striped first-td-padding">
      <thead>
          <tr>
            <td>Day</td>
            <td>Time</td>
            <td>Opponent</td>
            <td>PitchCast</td>
            <td>BTS</td>
            <td>Scrubber</td>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>Tues 8/28 </td>
              <td>7:35pm</td>
              <td>Tampa Bay Rays</td>
              <td>David Lemcoe</td>
              <td>Brett Newman</td>
              <td>Jewel Newman</td>
          </tr>
          <tr>
              <td>Wed 8/29 </td>
              <td>7:35pm</td>
              <td>Tampa Bay Rays </td>
              <td>David Lemcoe </td>
              <td>Jewel Newman </td>
              <td>Brett Newman </td>
          </tr>
          <tr>
              <td>Thurs 8/30 </td>
              <td>7:35pm</td>
              <td>Chicago Cubs </td>
              <td>David Lemcoe </td>
              <td>Hunter Siniard </td>
              <td>Corey Eckard </td>
          </tr>
          <tr>
              <td>Fri 8/31 </td>
              <td>7:35pm</td>
              <td>Pittsburgh Pirates </td>
              <td>Brett Newman </td>
              <td>David Lemcoe </td>
              <td>Hunter Siniard </td>
          </tr>
          <tr>
              <td>Sat 9/1 </td>
              <td>7:10pm</td>
              <td>Pittsburgh Pirates </td>
              <td>Brett Newman </td>
              <td>Hunter Siniard </td>
              <td>David Lemcoe </td>
          </tr>
          <tr>
              <td>Sun 9/2 </td>
              <td>5:05pm</td>
              <td>Pittsburgh Pirates </td>
              <td>Hunter Siniard </td>
              <td>Corey Eckard </td>
              <td>Brett Newman </td>
          </tr>
          <tr>
              <td>Mon 9/3 </td>
              <td>1:00pm</td>
              <td>Boston Red Sox </td>
              <td>David Lemcoe </td>
              <td>Corey Eckard </td>
              <td>Gary Campbell </td>
          </tr>
          <tr>
              <td>Tues 9/4 </td>
              <td>7:35pm</td>
              <td>Boston Red Sox </td>
              <td>David Lemcoe </td>
              <td>Corey Eckard </td>
              <td>Gary Campbell </td>
          </tr>
          <tr>
              <td>Wed 9/5 </td>
              <td>12:10pm</td>
              <td>Boston Red Sox </td>
              <td>Gary Campbell </td>
              <td>David Lemcoe </td>
              <td>Hunter Siniard </td>
          </tr>
          <tr>
              <td>Fri 9/14 </td>
              <td>7:35pm</td>
              <td>Washington Nationals </td>
              <td>David Lemcoe </td>
              <td>Hunter Siniard </td>
              <td>Brett Newman </td>
          </tr>
          <tr>
              <td>Sat 9/15 </td>
              <td>7:10pm</td>
              <td>Washington Nationals </td>
              <td>David Lemcoe </td>
              <td>Brett Newman </td>
              <td>Hunter Siniard </td>
          </tr>
          <tr>
              <td>Sun 9/16 </td>
              <td>1:35pm</td>
              <td>Washington Nationals </td>
              <td>Hunter Siniard </td>
              <td>Corey Eckard </td>
              <td>Brett Newman </td>
          </tr>
          <tr>
              <td>Mon 9/17 </td>
              <td>7:35pm</td>
              <td>St. Louis Cardinals </td>
              <td>Brett Newman </td>
              <td>Hunter Siniard </td>
              <td>Corey Eckard </td>
          </tr>
          <tr>
              <td>Tues 9/18</td>
              <td> 7:35pm</td>
              <td>St. Louis Cardinals </td>
              <td>Brett Newman </td>
              <td>Corey Eckard </td>
              <td>Gary Campbell </td>
          </tr>
          <tr>
              <td>Wed 9/19</td>
              <td> 12:10pm</td>
              <td>St. Louis Cardinals </td>
              <td>Gary Campbell </td>
              <td>Corey Eckard </td>
              <td>David Lemcoe </td>
          </tr>
          <tr>
              <td>Thurs 9/20 </td>
              <td>7:35pm</td>
              <td>Philadelphia Phillies </td>
              <td>Brett Newman </td>
              <td>Gary Campbell </td>
              <td>Corey Eckard </td>
          </tr>
          <tr>
              <td>Fri 9/21 </td>
              <td>7:35pm</td>
              <td>Philadelphia Phillies </td>
              <td>Brett Newman </td>
              <td>Hunter Siniard </td>
              <td>Gary Campbell </td>
          </tr>
          <tr>
              <td>Sat 9/22 </td>
              <td>7:10pm</td>
              <td>Philadelphia Phillies </td>
              <td>David Lemcoe </td>
              <td>Corey Eckard </td>
              <td>Gary Campbell </td>
          </tr>
          <tr>
              <td>Sun 9/23 </td>
              <td>1:35pm</td>
              <td>Philadelphia Phillies </td>
              <td>David Lemcoe </td>
              <td>Gary Campbell </td>
              <td>Hunter Siniard </td>
          </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
  import ScheduleInfoWidgets from './ScheduleInfoWidgets'
  import FeaturesTab from './features-tab/FeaturesTab.vue'
  import DataVisualisationTab from './data-visualisation-tab/DataVisualisation.vue'
  import ScheduleBottomWidgets from './ScheduleBottomWidgets.vue'

  export default {
    name: 'schedule',
    components: {
      DataVisualisationTab,
      ScheduleInfoWidgets,
      FeaturesTab,
      ScheduleBottomWidgets
    },
    methods: {},
    computed: {
      track () {
        return this.$store.getters.track
      }
    },
    mounted () {}
  }

</script>
<style lang="scss" scoped>
</style>
