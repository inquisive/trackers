<template>
  <div class="date-picker">
    <vuestic-date-picker
      id="date-picker-basic"
      v-model="day"
      :config="{dateFormat: 'm/d/Y'}"
      @on-change="setDate"
      style="font-size:18px;background:transparent;color:#FFF;border:none;font-weight:bold;"
    />
    <i class="bar"></i>
  </div>
</template>

<script>
  import moment from 'moment'
  
  export default {
    name: 'date-picker',
    data () {
      return {}
    },
    methods: {
      clear (field) {
        this[field] = ''
      },
      setDate (v, s) {
        this.$router.push({ name: 'setDate', params: { date: moment(s, 'MM/DD/YYYY') } })
      }
    },
    computed: {
      day () {
        const day = this.$store.getters.day
        const d = moment.isMoment(day) ? day : moment(day)
        return d.toDate()
      }
    },
    created () {
      this.$nextTick(() => {
        this.$validator.validateAll()
      })
    },
  }
</script>

<style lang="scss">
  .header-selector {
    @include flex-center();
    cursor: pointer;
  }

</style>
