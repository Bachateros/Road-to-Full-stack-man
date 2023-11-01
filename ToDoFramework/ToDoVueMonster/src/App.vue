<template>
  <appHeader />
  <appSearch />
  <appTasks />
</template>
<!--     image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" -->
<script>
import appHeader from "./components/header.vue"
import appSearch from "./components/search.vue"
import appTasks from "./components/tasks.vue"
export default {
  name: "ToDoList",
  components: {
    appHeader,
    appSearch,
    appTasks,
  },
}
</script>
<style scoped lang="scss"></style>
