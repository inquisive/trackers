<template>
  <div class="date-picker">
    
    <i class="bar"></i>
  </div>
</template>

<script>
  import moment from 'moment'
  
  export default {
    name: 'date-picker',
    data () {
      return {
        current: false
      }
    },
    methods: {
      clear (field) {
        this[field] = ''
      },
      setDate (v, s) {
        if (this.current !== s) {
          this.current = s
          console.log('setdate', v, s)
          this.$router.push({ name: 'setDate', params: { date: moment(s, 'MM/DD/YYYY') } })
        }
      }
    },
    computed: {
      day () {
        console.log('new day', this.$store.getters.day)
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
