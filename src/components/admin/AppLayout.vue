<template>
  <vuestic-layout v-layout>
    <app-navbar :isOpen="false" v-bind:track="track" @toggle-menu="toggleSidebar"/>
    <app-sidebar :isOpen="false" v-bind:track="track" @toggle-menu="toggleSidebar"/>
    <main slot="content" id="content" class="content" role="main">
      <vuestic-pre-loader v-show="isLoading" class="pre-loader"></vuestic-pre-loader>
      <router-view></router-view>
    </main>
    
  </vuestic-layout>
</template>

<script>

  import VuesticLayout from '../../vuestic-theme/vuestic-components/vuestic-layout/VuesticLayout'
  import AppNavbar from './app-navbar/AppNavbar'
  import AppSidebar from './app-sidebar/AppSidebar'
  import AppBreadcrumbs from './app-breadcrumbs/AppBreadcrumbs'
  import Layout from 'vuestic-theme/vuestic-directives/Layout'
  import {mapGetters} from 'vuex'
  import DataService from '@/services/DataService'
  import moment from 'moment'

  export default {
    name: 'app-layout',

    components: {
      VuesticLayout,
      AppNavbar,
      AppSidebar,
      AppBreadcrumbs
    },
    directives: {
      layout: Layout,
    },
    methods: {
      toggleSidebar (opened) {
        this.opened = opened
      },
      changeDay (day) {
        this.$store.dispatch('changeDay', day)
      },
      changeGamePk (gamepk) {
        this.$store.dispatch('changeGamePk', gamepk)
      },
      async loadDataOld () {
        const gamepk = this.$store.getters.gamepk
        const day = this.$store.getters.day
        console.log('get data', gamepk, day, moment(day).format('YYYYMMDD'))
        const response = await DataService.getData({ day: moment(day).format('YYYYMMDD'), gamepk: gamepk })
        let res = response.data
        console.log(res.query.day, res.query.gamepk)
        this.$store.dispatch('setTracker', res)
      },
      loadData () {
        DataService.getData()
      }
    },
    computed: {
      ...mapGetters([
        'isLoading',
        'track',
        'day',
        'schedule',
        'feed',
        'opened'
      ])
    },
    updated () {},
    created () {
      if (this.$route.query.day) {
        // this.changeDay(this.$route.query.day)
      }
      if (this.$route.query.gamepk) {
        // this.changeGamePk(this.$route.query.gamepk)
      }
      this.loadData()
      setInterval(() => {
        this.loadData()
      }, 5000)
    }
  }
</script>
