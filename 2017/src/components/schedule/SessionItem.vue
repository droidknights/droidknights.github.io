<template>
  <div class="session-container" :class="{'mini-container': isLunch || isOpening, 'more-detail-con': isMoreDetail}">
    <div class="border" :class="{'not-border': isLunch || isOpening, 'more-detail-border': isMoreDetail}">

      <div class="time">{{time}}</div>
      <div class="title">{{title}}</div>
      <div class="presenter" v-if="!isLunch && !isOpening">{{presenter}}</div>

    </div>

    <div class="down-arrow" v-if="!isLunch && !isOpening" @click="onClickDownSession()" :class="{'more-detail-button': isMoreDetail}">
      <div class="icon-down" :class="{'more-detail-icon-color': isMoreDetail}" v-if="!isMoreDetail"></div>
      <div class="icon-up" :class="{'more-detail-icon-color': isMoreDetail}" v-if="isMoreDetail"></div>
    </div>

    <div class="more-detail" v-if="isMoreDetail">
      <div>
        난이도
      </div>
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
      return {
        isMoreDetail: false
      }
    },
    methods: {
      onClickDownSession: function () {
        this.isMoreDetail = !this.isMoreDetail
      }
    }
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
    font-family: 'Spoqa Han Sans', 'Montserrat', 'Sans-serif';
  }

  .title {
    display: inline-block;
    font-weight: bold;
    text-align: center;
    position: relative;
    width: 652px;
    font-size: 18px;
    font-family: 'Spoqa Han Sans', 'Montserrat', 'Sans-serif';
  }

  .presenter {
    display: inline-block;
    float: right;
    font-size: 18px;
    font-family: 'Spoqa Han Sans', 'Montserrat', 'Sans-serif';
  }

  .more-detail {
    padding: 15px 45px 15px 45px;
    margin: 0 auto;
    border: 5px solid #76ff03;
    border-radius: 4px;
    margin-right: 10px;
    margin-left: 10px;
    position: relative;
    top: -45px;
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
    height: 12px;
    top: 16px;
    left: 7px;
    position: relative;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(../../assets/image/dk_main_arrow.svg);
  }

  .icon-up {
    font-weight: bold;
    height: 12px;
    top: 14px;
    left: 7px;
    position: relative;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(../../assets/image/dk_main_arrow_up.svg);
  }

  /**/

  .more-detail-con {
    height: 206px;
  }

  .more-detail-border {
    border: 5px solid #76ff03;
  }

  .more-detail-button {
    width: 40px;
    height: 40px;
    background: #000;
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

  .more-detail-icon-color {
    color: #76ff03;
  }

  /* */

</style>
