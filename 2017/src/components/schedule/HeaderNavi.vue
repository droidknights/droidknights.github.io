<template>
  <div class="header-back">
    <div class="header">
      <div class="logo">
      </div>

      <div class="menus">
        <div class="section" @click="onClickMenu(0)">
        <span class="go-facebook" @click="goFacebook" target="_blank">
          <i class="fa fa-facebook-square" aria-hidden="true"></i>
      </span>
        </div>
        <div class="section" @click="onClickMenu(0)">
          INTRODUCE
        </div>
        <div class="section" @click="onClickMenu(1)">
          SESSION
        </div>
        <div class="section" @click="onClickMenu(2)">
          PLACE
        </div>
        <div class="section" @click="onClickMenu(3)">
          SPONSOR
        </div>
        <div class="section border" @click="onClickRegister()">
          REGISTER
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    created() {
      window.addEventListener('resize', this.handleResize)
      window.requestAnimFrame = (function () {
        return window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          function (callback) {
            window.setTimeout(callback, 1000 / 60);
          };
      })();
    },

    beforeDestroy () {
      window.removeEventListener('resize', this.handleResize)
    },

    data() {
      return {
        windowHeight: document.documentElement.clientHeight
      }
    },

    methods: {
      handleResize (event) {
        this.windowHeight = document.documentElement.clientHeight
      },
      /* todo? fixme?: 해당 섹션의 div 위치를 찾아서 scroll 해주도록 수정 */
      onClickMenu: function (index) {
        switch (index) {
          case 0:
            scrollToY(this.windowHeight, 1000, 'easeInOutQuint');
            break;
          case 1:
            scrollToY(this.windowHeight + 520, 1000, 'easeInOutQuint');
            break;
          case 2:
            scrollToY(this.windowHeight + 520 + 1300, 1000, 'easeInOutQuint');
            break;
          case 3:
            scrollToY(this.windowHeight + 520 + 1300 + 800, 1000, 'easeInOutQuint');
            break;
        }
      },
      onClickRegister: function () {
        window.open("http://onoffmix.com/event/92727", '_blank');
      },
      goFacebook () {
        window.open("https://www.facebook.com/droidknights/", '_blank');
      }
    }
  }

  function scrollToY (scrollTargetY, speed, easing) {

    var scrollY = window.scrollY,
      scrollTargetY = scrollTargetY || 0,
      speed = speed || 2000,
      easing = easing || 'easeOutSine',
      currentTime = 0;

    // min time .1, max time .8 seconds
    var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

    // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
    var PI_D2 = Math.PI / 2,
      easingEquations = {
        easeOutSine: function (pos) {
          return Math.sin(pos * (Math.PI / 2));
        },
        easeInOutSine: function (pos) {
          return (-0.5 * (Math.cos(Math.PI * pos) - 1));
        },
        easeInOutQuint: function (pos) {
          if ((pos /= 0.5) < 1) {
            return 0.5 * Math.pow(pos, 5);
          }
          return 0.5 * (Math.pow((pos - 2), 5) + 2);
        }
      };

    // add animation loop
    function tick () {
      currentTime += 1 / 60;

      var p = currentTime / time;
      var t = easingEquations[easing](p);

      if (p < 1) {
        requestAnimFrame(tick);

        window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
      } else {
        console.log('scroll done');
        window.scrollTo(0, scrollTargetY);
      }
    }

    // call it once to get started
    tick();
  }


</script>

<style scoped>

  .header-back {
    position: relative;
    background-color: #76ff03;
    height: 75px;
  }

  .header {
    max-width: 1024px;
    padding-left: 15px;
    padding-right: 15px;
    margin: 0 auto;
  }

  .logo {
    width: 21%;
    height: 51px;
    color: #000;
    margin-top: 12px;
    display: inline-block;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(../../assets/image/dk_main_logo.svg);
  }

  .menus{
    text-align: right;
    display: inline-block;
    width: 78%;
  }

  .go-facebook {
    cursor: pointer;
    color: #4862A3;
    font-size: 23px;
    vertical-align: middle;
  }

  .section {
    display: inline-block;
    margin-right: 14px;
    margin-bottom: 5px;
    color: #000;
    cursor: pointer;
    position: relative;
    top: -20px;
    font-family: 'Montserrat', sans-serif;
  }

  .section:hover {
    font-weight: bold;
  }

  @media (max-width: 1100px) {
    .section {
      display: none;
    }

    .logo {
      margin-left: auto;
      margin-right: auto;
      margin-top: 0px;
      display: block;
      background-position: center;
      top: 10px;
      position: relative;
    }
  }

  .border {
    padding: 5px 10px 5px 10px;
    border: 4px solid #000000;
    border-radius: 3px;
    margin-right: 6px;
  }

</style>
