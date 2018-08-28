<template>
  <div class="overview-tab tracker-tab" style="font-size: 20px;padding-left:35px ">
    <div v-for="(official, id) in officials" :key="id">
      <div style="width:150px;float:left;font-weight:bold;">{{ official.officialType }}</div>
      <div style="float:left;">{{ official.official.fullName }}</div>
      <div style="clear:both;width:1px;height:10px;"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'features-tab',
    props: {
      officials: {
        type: Array,
        required: true,
      }
    }
  }
</script>

<style lang="scss" scoped>
  .overview-item {
    display: flex;
    align-items: center;
    height: 55px;
    margin-bottom: 3rem;
    padding-right: 1rem;
    font-size: 1.25rem;
    font-weight: bold;

    .overview-icon-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      min-width: 85px;
      max-width: 85px;
      height: 100%;
    }
  }

  .overview-row {
    @include media-breakpoint-down(xs) {
      flex-wrap: wrap;
    }
  }

  .overview-col:first-child {
    margin-left: 2rem;
    @include media-breakpoint-down(md) {
      margin-left: 0;
    }
  }

  .explore-btn {
    margin-top: 6rem;
    margin-bottom: 1rem;
  }

</style>
