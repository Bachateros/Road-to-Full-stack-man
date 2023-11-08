<template>
  <v-card class="mx-auto my-3" color="grey-lighten-3" max-width="550">
    <v-card-text>
      <v-text-field
        label="new task"
        :placeholder="getRandomExample"
        density="compact"
        variant="solo"
        hide-details
        append-inner-icon="mdi-plus-circle"
        v-model="newTask"
        @click:append-inner="onClick"
      ></v-text-field>
    </v-card-text>
  </v-card>
</template>

<script>
import { useTasksStore } from "../store/tasks"
export default {
  name: "appAddTask",
  data() {
    return {
      tasks: useTasksStore(),
      newTask: "",
      exampleTasks: [
        "Погладить кота",
        "Прибраться дома",
        "Закончить проходить курс по Angular",
        "Научиться танцевать фокстрот",
      ],
    }
  },
  computed: {
    getRandomExample() {
      return this.exampleTasks[
        Math.floor(Math.random() * this.exampleTasks.length)
      ]
    },
  },
  methods: {
    onClick() {
      if (this.newTask.trim() && !this.tasks.tasks.includes(this.newTask)) {
        this.tasks.addTask(this.newTask)
        this.newTask = ""
      }
    },
  },
}
</script>

<style scoped lang="scss"></style>
