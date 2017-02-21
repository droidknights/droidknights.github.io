<template>
  <div class="session-container" :class="{'mini-container': isLunch || isOpening}">
    <div class="border" :class="{'not-border': isLunch || isOpening}">

      <div class="time">{{time}}</div>
      <div class="title">{{title}}</div>
      <div class="presenter" v-if="!isLunch && !isOpening">{{presenter}}</div>

    </div>

    <div class="down-arrow" v-if="!isLunch && !isOpening">
      <i class="fa fa-angle-down icon-down" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      time: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      presenter: {
        type: String,
        required: true
      },
      detail: {
        type: String,
        required: true
      },
      introduce: {
        type: String,
        required: true
      },
      isLunch: {
        default: false
      },
      isOpening: {
        default: false
      }
    },
    created() {
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
  .session-container {
    height: 76px;
  }

  .mini-container {
    height: 62px;
  }

  .border {
    padding: 15px 45px 15px 45px;
    margin: 0 auto;
    border: 5px solid #000000;
    border-radius: 4px;
    margin-right: 10px;
    margin-left: 10px;
  }

  .not-border {
    border: 0px solid #000000;
  }

  /*
  */

  .time {
    display: inline-block;
    font-weight: bold;
    font-size: 18px;
  }

  .title {
    display: inline-block;
    font-weight: bold;
    text-align: center;
    position: relative;
    width: 652px;
    font-size: 18px;
  }

  .presenter {
    display: inline-block;
    float: right;
    font-size: 18px;
  }

  .down-arrow {
    width: 40px;
    height: 40px;
    background: #76ff03;
    -moz-border-radius: 25px;
    -webkit-border-radius: 25px;
    border-radius: 25px;
    vertical-align: middle;
    text-align: center;
    font-size: 30px;
    top: -50px;
    left: 922px;
    display: inline-block;
    position: relative;
    cursor: pointer;
  }

  .icon-down {
    font-weight: bold;
    margin-top: 5px;
    font-size: 32px;
  }

</style>
