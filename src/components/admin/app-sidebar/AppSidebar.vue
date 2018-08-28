<template>
  <vuestic-sidebar :hidden="isOpen" style="width:250"> 
    <template slot="menu">
      <sidebar-link
        :to="{ name: 'dashboard' }">
        <span slot="title">
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-tables"></span>
          <span>{{ $t('menu.dashboard') }}</span>
        </span>
      </sidebar-link>
      <sidebar-link
        :to="{ name: 'tracker' }">
        <span slot="title">
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-time"></span>
          <span>{{ $t('menu.tracker') }}</span>
        </span>
      </sidebar-link>
      <sidebar-link
        :to="{ name: 'schedule' }">
        <span slot="title">
          <span
            class="sidebar-menu-item-icon vuestic-icon vuestic-icon-files"></span>
          <span>{{ $t('menu.schedule') }}</span>
        </span>
      </sidebar-link>
      <div >
        <vuestic-date-picker
          :config="{inline: true, dateFormat: 'm/d/Y'}"
          id="date-picker-basic"
          :value="day"
          @on-change="setDate"
          style="display:none;font-size:18px;background:transparent;color:#FFF;border:none;font-weight:bold;"
        />
      </div>
    </template>
      
  </vuestic-sidebar>
</template>

<script>

import VuesticSidebar
  from '../../../vuestic-theme/vuestic-components/vuestic-sidebar/VuesticSidebar'
import SidebarLink from './components/SidebarLink'
import SidebarLinkGroup from './components/SidebarLinkGroup'
import moment from 'moment'

export default {
  name: 'app-sidebar',
  components: {
    VuesticSidebar,
    SidebarLink,
    SidebarLinkGroup
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      current: false
    }
  },
  computed: {
    day () {
      const day = this.$store.getters.day
      const d = moment.isMoment(day) ? day : moment(day)
      return d.toDate()
    }
  },
  methods: {
    clear (field) {
      this[field] = ''
    },
    setDate (v, s) {
      if (this.current !== s) {
        this.current = s
        this.$router.push({ name: 'setDate', params: { date: moment(s, 'MM/DD/YYYY') } })
      }
    }
  }
}

</script>

<style
