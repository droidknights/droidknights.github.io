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
      <div class="more-detail-inline-block more-detail-margin-bottom">
        <div class="more-detail-label">
          난이도
        </div>
        <div>
          {{level}}
        </div>
        <div class="more-detail-label">
          세션소개
        </div>
        <div class="more-detail-description" v-html="detail">
        </div>
      </div>

      <div class="more-detail-inline-block more-detail-right">
        <div class="more-detail-profile-image"  v-bind:style="{ 'background-image': 'url(' + profileImage + ')' }"/>
        <div class="more-detail-label">
          발표자 소개
        </div>
        <div class="more-detail-introduce" v-html="introduce">
        </div>
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
      profileImage: {
        type: String
      },
      level: {
        type: String,
        default: "중"
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
    /*height: 76px;*/
    margin-top: -18px;
    position: relative;
  }

  .mini-container {
    height: 62px;
    margin-top: -24px;
    margin-bottom: 20px;
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
    padding: 15px 30px 15px 30px;
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

  .more-detail-label {
    font-weight: bold;
    font-size: 18px;
    margin-top: 26px;
    margin-bottom: 10px;
    font-family: 'Spoqa Han Sans', 'Montserrat', 'Sans-serif';
  }

  .more-detail-inline-block {
    width: 49%;
    display: inline-block;
  }

  .more-detail-right {
    margin-left: 12px;
    position: relative;
    right: -10px;
  }

  .more-detail-description {
    font-size: 14px;
    font-family: 'Spoqa Han Sans', 'Montserrat', 'Sans-serif';
  }

  .more-detail-introduce {
    font-size: 14px;
    font-family: 'Spoqa Han Sans', 'Montserrat', 'Sans-serif';
  }

  .more-detail-margin-bottom {
    margin-bottom: 30px
  }

  .more-detail-profile-image {
    background-size: cover;
    background-repeat: no-repeat;
    width: 120px;
    height: 120px;
    margin-top: 15px;
    margin-bottom: -10px;
    margin-left: 160px;
    margin-right: auto;
    border-radius: 50%;
    position: relative;
  }

</style>
