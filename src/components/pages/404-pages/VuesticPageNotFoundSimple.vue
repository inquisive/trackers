<template>
  <div class="vuestic-page-not-found-simple">
    <vuestic-page-not-found-sad-wallpaper/>
      <div class="vuestic-page-not-found-simple__wallpaper">
        <h3 class="vuestic-page-not-found-simple__text">You are lost.  </h3>
      </div>
      
      <div class="vuestic-page-not-found-simple__wallpaper-button col-md-12" style="padding-bottom:20px">
        <router-link :to="{ name: 'dashboard' }">
          <button class="btn btn-primary back-button">
            Do something else.
          </button>
        </router-link>
      </div>    
  </div>
</template>

<script>
import VuesticPageNotFoundSadWallpaper from './VuesticPageNotFoundSadWallpaper.vue'

export default {
  name: 'vuestic-page-not-found-simple',
  components: {
    VuesticPageNotFoundSadWallpaper
  }
}
</script>

<style lang="scss">
.vuestic-page-not-found-simple {
  min-height: 100vh;
  padding-bottom: 84px;
  background-color: $top-nav-bg;
  &__text {
    padding-top: 10%;
    color: white;
  }
  &__text-small {
    font-size: $font-size-root;
    line-height: 1.5;
    text-align: center;
    color: white;
    font-weight: normal;
  }
  &__i-vuestic {
    margin-top: 10%;
  }
  &__wallpaper {
    background-color: $top-nav-bg;
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
  &__wallpaper-button {
    padding-top: 20px;
    background-color: $top-nav-bg;
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
  &__i-vuestic {
    z-index: 2;
    height: $auth-wallpaper-ivuestic-h;
    width: 100%;
  }
  @include media-breakpoint-down(xs) {
    .vuestic-page-not-found-simple {
      height: $auth-mobile-main-h;

      &__wallpaper-button {
        width: 100%;
        margin-left: 0;

        .back-button {
          max-width: 300px;
          padding-left: 30px;
          padding-right: 30px;
        }
      }
      &__message {
        justify-content: center;
      }
      &__i-vuestic {
        margin-top: 5%;
      }
      &__text-small {
        font-size: 15px;
      }
    }
  }
}
</style>
