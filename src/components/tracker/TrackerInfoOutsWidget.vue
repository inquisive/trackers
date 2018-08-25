<template>
  <div class="col-md-12 col-lg-6">
      
        <div class="inningbug">
            <div class="inning">
                <div v-bind:class="['highlighted number', feed.half === 1 ? 'top' : 'bottom']">{{ feed.inning }}</div>
                <div v-bind:class="['leftabit', feed.half === 1 ? 'bottom' : 'top']">
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
            </div>
            
        </div>
    
  </div>
</template>

<script>
  export default {
    name: 'inning-widget',
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
