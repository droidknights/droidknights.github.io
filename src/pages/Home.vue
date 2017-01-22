<template>
  <header id="top" class="header">
    <div class="title">
      <h2>DroidKnights 2017 in Seoul</h2>
    </div>

    <div class="text-vertical-center">
      <h1>Comming Soon ..</h1>
      <br>
      <remain-time dueDate="bbbbbbbb"></remain-time>
    </div>
  </header>
</template>

<script>
  import RemainTime from '../components/RemainTime.vue'

  export default {
    created() {
    },
    components: {
      RemainTime
    }
  }
</script>

<style scoped>
  .header {
    display: table;
    position: relative;
    width: 100%;
    height: 100%;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    -o-background-size: cover;
  }

  .title {
    display: table-header-group;
    padding-left: 100px;
    color: white;
  }

  .text-vertical-center {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    color: white;
  }

  .text-vertical-center h1 {
    margin: 0;
    padding: 0;
    font-size: 4.5em;
    font-weight: 700;
  }
</style>
