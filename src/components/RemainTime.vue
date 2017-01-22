<template>
  <div>
    {{ dueDate }}
  </div>
</template>

<script>
  export default {
    props: {
      dueDate: {
        type: String,
        required: true,
        default: 20170301
      },
    },
    computed: {},
    methods: {}
  }
</script>

<style scoped>

</style>
