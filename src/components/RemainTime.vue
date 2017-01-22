<template>
  <div>
    <div>남은시간</div>
    <div class="section">
      <div class="time">{{days}}</div>
      <div>Days</div>
    </div>
    <div class="section">
      <div class="time">{{hours}}</div>
      <div>Hours</div>
    </div>
    <div class="section">
      <div class="time">{{minutes}}</div>
      <div>Minutes</div>
    </div>
    <div class="section last">
      <div class="time">{{seconds}}</div>
      <div>Seconds</div>
    </div>
  </div>
</template>

<script>
  import Rx from 'rxjs/Rx'

  export default {
    props: {
      dueDate: {
        type: String,
        required: true,
        default: 20170301
      },
    },
    created() {
      this.$subscribeTo(Rx.Observable.interval(1000), (index) => {
        var t = Date.parse(this.dueDate) - Date.parse(new Date());
        this.seconds = Math.floor((t / 1000) % 60);
        this.minutes = Math.floor((t / 1000 / 60) % 60);
        this.hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        this.days = Math.floor(t / (1000 * 60 * 60 * 24));
      })
    },
    data() {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    },
    computed: {},
    methods: {}
  }
</script>

<style scoped>
  .section {
    display: inline-block;
    margin-right: 40px;
  }

  .last {
    margin-right: 0px;
  }

  .time {
    font-size: 80px;
  }
</style>
