<template>

  <div class="main-title-back">
    <!--<div class="logo_image" :style="{ width: image_width }"></div>-->
    <div class="logo_image"></div>
  </div>

</template>

<script>
  export default {
    name: 'firstSectionNew',
    data() {
      return {
        image_width: '50vw'
      }
    },

    created() {
      window.addEventListener('resize', this.handleResize)
    },

    beforeDestroy () {
      window.removeEventListener('resize', this.handleResize)
    },

    methods: {
      handleResize (event) {
        document.documentElement.clientHeight
        console.log('scrollHeight -> ' + document.documentElement.scrollHeight)
        console.log('height -> ' + document.documentElement.clientHeight)
        console.log('width -> ' + document.documentElement.clientWidth)
      }
    }
  }
</script>

<style scoped>

  .main-title-back {
    position: relative;
    background-color: #000;
    height: 95vh;
    padding-top: 42px;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    left: inherit;
    top: inherit;
  }

  .logo_image {
    height: 75vh;
    margin-bottom: 20px;
    margin-top: 50px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url(../../assets/image/dk_main_badge.svg);
  }

</style>
