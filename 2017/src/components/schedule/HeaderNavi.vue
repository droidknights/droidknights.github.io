<template>
  <div class="header-back">
    <div class="header">
      <div class="logo">

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
      <div class="section border">
        REGISTER
      </div>


    </div>
  </div>
</template>

<script>
  export default {
    created() {
      window.requestAnimFrame = (function () {
        return window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          function (callback) {
            window.setTimeout(callback, 1000 / 60);
          };
      })();
    },
    data() {
      return {}
    },
    methods: {
      onClickMenu: (index) => {
        switch (index) {
          case 0:
            scrollToY(850, 1000, 'easeInOutQuint');
            break;
          case 1:
            scrollToY(1450, 1000, 'easeInOutQuint');
            break;
          case 2:
            scrollToY(2450, 1000, 'easeInOutQuint');
            break;
        }
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
    min-width: 1024px;
    padding-left: 15px;
    padding-right: 15px;
    margin: 0 auto;
  }

  .logo {
    width: 25%;
    height: 51px;
    font-size: 20px;
    color: #000;
    margin-top: 12px;
    font-weight: bold;
    letter-spacing: 2px;
    margin-right: 250px;
    display: inline-block;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(../../assets/image/dk_main_logo.svg);
  }

  .section {
    display: inline-block;
    font-weight: bold;
    margin-right: 14px;
    margin-bottom: 5px;
    color: #000;
    cursor: pointer;
    position: relative;
    top: -20px;
    font-family: 'Montserrat', sans-serif;
  }

  .border {
    padding: 5px 10px 5px 10px;
    border: 4px solid #000000;
    border-radius: 3px;
    margin-right: 6px;
  }

</style>
