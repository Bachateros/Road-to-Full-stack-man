<template>
  <v-toolbar dark color="indigo" prominent class="header">
    <v-toolbar-title>ToDo vue Monster</v-toolbar-title>
    <v-spacer></v-spacer>

    <div class="clock">{{ date }}</div>
  </v-toolbar>
</template>
<script>
import format from "date-fns/format"
export default {
  name: "appHeader",
  data() {
    return {
      date: null,
    }
  },
  methods: {
    switchTime() {
      setInterval(() => {
        this.date = format(new Date(), "HH:mm:ss")
      }, 1000)
    },
  },
  mounted() {
    this.switchTime()
  },
}
</script>

<style lang="scss" scoped>
.header {
  padding: 0 8px 0 2px;
}
</style>
