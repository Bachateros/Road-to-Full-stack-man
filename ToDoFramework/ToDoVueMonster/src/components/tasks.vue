<template>
  <!-- <div class="wrapper gradient">
    <main class="main">
      <div class="main__container _container">
        <div class="main__tasks tasks">
          <ul class="tasks__list"></ul>
        </div>
      </div>
    </main>
  </div> -->
  <h2 class="text-center">Tasks</h2>
  <v-card class="mx-auto pa-2 my-2" max-width="550">
    <v-list density="compact">
      <v-card
        hover
        class="my-3"
        v-for="(task, index) in tasks.tasks"
        :key="index"
      >
        <v-list-item item-props color="primary">
          <v-list-item-title v-text="task"></v-list-item-title>
          <template v-slot:append>
            <v-icon
              @click="editTask(task)"
              class="icon mr-2"
              :icon="updateIcon"
            ></v-icon>
            <v-icon
              @click="deleteTask(task)"
              class="icon"
              icon="mdi-close"
            ></v-icon>
          </template> </v-list-item
      ></v-card>
    </v-list>
  </v-card>
</template>
<script>
import { useTasksStore } from "../store/tasks"

export default {
  name: "appTasks",
  data() {
    return {
      tasks: useTasksStore(),
      updateIcon: "mdi-pencil",
    }
  },
  methods: {
    editTask(task) {
      //   this.updateIcon = "mdi-check"
      this.$emit("updateTask", task)
    },
    deleteTask(task) {
      this.tasks.deleteTask(task)
    },
  },
}
</script>

<style lang="scss" scoped>
.icon {
  font-size: 1.3em;
  border-radius: 10px;
  background: hsl(0, 0%, 80%, 50%);
  &:hover {
    font-size: 1.5em;
    background: hsl(0, 0%, 80%, 80%);
  }
  &:active {
    background: rgb(172, 172, 172);
  }
}
</style>
