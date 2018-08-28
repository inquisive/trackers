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
  // import DataService from '@/services/DataService'
  // import moment from 'moment'

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
      loadData () {
        const day = this.$store.getters.formattedDay
        const gamepk = this.$store.getters.gamepk
        this.$socket.emit('schedule', day)
        if (gamepk) {
          this.$socket.emit('gamepk', gamepk)
        }
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
      this.loadData()
      setInterval(() => {
        // this.loadData()
      }, 5000)
    }
  }
</script>
