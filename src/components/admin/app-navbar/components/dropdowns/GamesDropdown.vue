<template>
  <div class="col nav-item dropdown navbar-dropdown" v-dropdown>
    <a class="nav-link dropdown-toggle" href="#" style="color:white;font-weight:bold">
      {{ day }}
    </a>
    <div class="dropdown-menu">
      <div class="dropdown-menu-content">
        <div style="text-align:left;width:100%;padding-top:15px;padding-left:25px">
          <header-date-picker/>
        </div>
        <a v-for="(option, id) in schedule" :key="id" class="dropdown-item" href="#" style="color:white"> 
          <span class="ellipsis">
            <router-link :to="{ name: 'setGamePk', params: { gamepk: option.gamepk }}" style="color:white">{{option.time}} - {{ option.away }} vs {{ option.home }} </router-link>
          </span>
        </a>
        <div class="dropdown-item plain-link-item">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'
  import HeaderDatePicker from '../HeaderDatePicker'

  export default {
    name: 'games-dropdown',
    components: {
      HeaderDatePicker
    },
    computed: {
      schedule () {
        let schedA = this.$store.getters.schedule || []
        let sched = schedA.map(e => {
          e.time = moment(e.startTime).format('LT')
          return e
        })
        return sched
      },
      day () {
        return this.$store.getters.displayDaySmall
      }
    },
    mounted () {}
  }
</script>

<style lang="scss">
   .ios-baseball-outline {
    position: relative;
    color: #fff;
    &::after {
      content: '';
      position: absolute;
      right: -6px;
      top: -6px;
      background-color: $brand-primary;
      height: 12px;
      width: 12px;
      border-radius: 50%;
    }
  }

  .ios-baseball-outline {
    right: -4px;
    top: 0;
  }

</style>
