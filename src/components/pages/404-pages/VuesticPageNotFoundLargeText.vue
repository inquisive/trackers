<template>
  <div class="vuestic-page-not-found-large-text">
    <div class="vuestic-page-not-found-large-text__content">
      
      <div class="vuestic-page-not-found-large-text__wallpaper">
        <h1 class="vuestic-page-not-found-large-text__number">404</h1>
      </div>
      <div class="vuestic-page-not-found-large-text__wallpaper">
        <h3 class="vuestic-page-not-found-large-text__text">You are lost.  Go somewhere else.</h3>
      </div>
     
      <div class="vuestic-page-not-found-large-text__wallpaper-button col-md-12">
        <router-link :to="{ name: 'dashboard' }">
          <button class="btn btn-primary back-button">
            {{'Back to dashboard'}}
          </button>
        </router-link>
      </div>
    </div>
    <vuestic-page-not-found-sad-wallpaper/>
  </div>
</template>

<script>
import VuesticPageNotFoundSadWallpaper from './VuesticPageNotFoundSadWallpaper.vue'

export default {
  name: 'vuestic-page-not-found-large-text',
  components: {
    VuesticPageNotFoundSadWallpaper
  }
}
</script>

<style lang="scss">
.vuestic-page-not-found-large-text {
  min-height: 100vh;
  padding-bottom: 84px;
  background-color: $top-nav-bg;

  &__number {
    font-size: 350px;
    text-align: center;
    line-height: 1.4;
    letter-spacing: 15px;
    margin-right: -15px;
    margin-bottom: 0;
    color: white;
  }
  &__text {
    color: white;
  }
  &__text-small {
    font-size: $font-size-root;
    line-height: 1.5;
    text-align: center;
    color: white;
    font-weight: normal;
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
    margin-top: 8%;
    height: $auth-wallpaper-ivuestic-h;
    width: 100%;
  }
  @include media-breakpoint-down(xs) {
    .vuestic-page-not-found-large-text {
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
      &__number {
        font-size: 150px;
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
