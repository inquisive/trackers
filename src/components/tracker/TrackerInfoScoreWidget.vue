<template>
  <div class="col-md-12 col-xl-6">
    <vuestic-widget  class="info-widget  " style="background:transparent;-webkit-box-shadow:none;box-shadow:none">
        <div class="scorebug">
            <div class="inning">
                <div class="number">{{ feed.inning }}</div>
                <div v-bind:class="['top', feed.half === 1 ? 'highlighted' : '']"></div>
                <div v-bind:class="['bottom', feed.half === 2 ? 'highlighted' : '']"></div>
            </div>
            <div class="teams">
                <div class="home">
                    <div v-bind:class="['teamname', `mlb-${feed.home.toLowerCase()}`]">
                        {{ feed.home }}
                        <div class="record" >{{feed.homeTeamData.leagueRecord.wins}} - {{feed.homeTeamData.leagueRecord.losses}}</div>
                    </div>
                    <div class="info">
                        <div class="score">{{ feed.home }}</div>
                        <div class="other">
                            <div class="hits">{{ feed.homeHits }}</div>
                            <div class="errors">{{ feed.homeErrors }}</div>
                        </div>

                    </div>
                </div>
                <div class="away">
                    <div v-bind:class="['teamname', `mlb-${feed.away.toLowerCase()}`]">
                        {{ feed.away }}
                        <div class="record" >{{feed.awayTeamData.leagueRecord.wins}} - {{feed.awayTeamData.leagueRecord.losses}}</div>
                    </div>
                    <div class="info">
                        <div class="score">{{ feed.awayScore }}</div>
                        <div class="other">
                            <div class="hits">{{ feed.awayHits }}</div>
                            <div class="errors">{{ feed.awayErrors }}</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </vuestic-widget>
  </div>
</template>

<script>
  export default {
    name: 'score-widget',
    props: {
      feed: {
        type: Object,
        required: true,
      }
    }
  }
</script>

<style lang="scss" scoped>
  

</style>
