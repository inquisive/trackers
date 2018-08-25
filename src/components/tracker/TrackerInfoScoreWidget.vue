<template>
  <div class="col-md-12 col-lg-6">
        
        <div class="scorebug" style="padding:0 0 1.5625rem 0">
            <div class="runs">
                <div class="team away">
                    <div v-bind:class="['info', `mlb-${feed.away.toLowerCase()}`]">
                        <div class="score">{{ feed.awayScore }}</div>
                        <div class="other">
                            <div class="hits"><div class="label">H</div> {{ feed.awayHits }}</div>
                            <div class="errors"><div class="label">E</div>{{ feed.awayErrors }}</div>
                        </div>

                    </div>
                </div>
                <div class="team home">
                     <div v-bind:class="['info', `mlb-${feed.home.toLowerCase()}`]">
                        <div class="score">{{ feed.homeScore }}</div>
                        <div class="other othertop">
                            <div class="hits"><div class="label">H</div>{{ feed.homeHits }}</div>
                            <div class="errors"><div class="label">E</div>{{ feed.homeErrors }}</div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="teams">
                <div class="team away">
                    <div v-bind:class="['teamname', `mlb-${feed.away.toLowerCase()}`]">
                        {{ feed.away }}
                        <div class="record" >{{feed.awayTeamData.leagueRecord.wins}} - {{feed.awayTeamData.leagueRecord.losses}}</div>
                    </div>
                    
                </div>

                <div class="team home">
                    <div v-bind:class="['teamname', `mlb-${feed.home.toLowerCase()}`]">
                        {{ feed.home }}
                        <div class="record" >{{feed.homeTeamData.leagueRecord.wins}} - {{feed.homeTeamData.leagueRecord.losses}}</div>
                    </div>
                   
                </div>

            </div>
        </div>
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
