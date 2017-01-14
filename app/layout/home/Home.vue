<template>
  <div class="home">
    <div class="root_container">
      {{word}}
    </div>
  </div>
</template>

<script>
  import Rx from 'rxjs/Rx'

  export default {
    name: 'home',
    components: {},

    created () {
    },

    data () {
      return {
        word: 'Hello worldaaaaa'
      }
    },

    methods: {}
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
  }

  /**/

  .root_container {
    margin: auto auto;
    padding-bottom: 200px;
  }

</style>
