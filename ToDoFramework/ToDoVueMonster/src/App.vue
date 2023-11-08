<template>
  <appHeader />
  <!-- Input -->
  <v-card class="mx-auto my-3" color="grey-lighten-3" max-width="550">
    <v-card-text>
      <v-text-field
        ref="input"
        label="new task"
        :placeholder="getRandomExample"
        density="compact"
        variant="solo"
        hide-details
        :append-inner-icon="inputIcon"
        v-model="newTask"
        @keyup.enter="addTask"
        @click:append-inner="addTask"
      ></v-text-field>
    </v-card-text>
  </v-card>
  <!-- Tasks -->
  <h2 class="text-center">Tasks</h2>
  <v-card class="mx-auto pa-2 my-2" max-width="550">
    <v-list density="compact" class="pa-1">
      <v-card
        hover
        class="my-3 d-flex"
        v-for="(task, index) in tasks.tasks"
        :key="index"
      >
        <v-card-text class="flex-0-0 align-self-center">
          <v-checkbox-btn @click="checkTask(index)"></v-checkbox-btn>
        </v-card-text>
        <v-list-item
          item-props
          color="primary"
          @click="editTask(task, index)"
          ref="task"
          class="flex-1-0 d-flex justify-space-between"
          max-width="85%"
        >
          <v-list-item-title
            v-text="getTaskTitle(task)"
            class="taskTitle"
          ></v-list-item-title>
          {{ task }}
          <template v-slot:append>
            <v-icon
              @click="editTask(task, index)"
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
import appHeader from "./components/header.vue"
import { useTasksStore } from "./store/tasks"

export default {
  name: "ToDoList",
  components: {
    appHeader,
  },
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
      updateIcon: "mdi-pencil",
      inputIcon: "mdi-plus-circle",
      editedTaskIndex: -1,
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
    getTaskTitle(task) {
      const maxLength = 30
      if (task.length > maxLength) {
        return `${task.slice(0, maxLength - 3)}...`
      } else return task
    },
    addTask() {
      //update task
      if (this.inputIcon === "mdi-check") {
        if (this.newTask.trim()) {
          this.tasks.updateTask(this.editedTaskIndex, this.newTask.trim())
        } else {
          this.tasks.deleteTask(this.tasks.tasks[this.editedTaskIndex])
        }
        this.$refs.task[this.editedTaskIndex].$el.classList.remove("active")
        this.inputIcon = "mdi-plus-circle"
        this.editedTaskIndex = -1
      }
      //add task
      else if (this.newTask.trim()) {
        this.tasks.addTask(this.newTask)
      }
      this.newTask = ""
      this.$refs.input.blur()
    },
    editTask(task, id) {
      this.$refs.task[id].$el.classList.add("active")
      this.newTask = task
      this.$refs.input.focus()
      this.inputIcon = "mdi-check"
      this.editedTaskIndex = id
    },
    deleteTask(task) {
      this.tasks.deleteTask(task)
    },
    checkTask(id) {
      this.$refs.task[id].$el.classList.toggle("check")
    },
  },
}
</script>
<style scoped lang="scss">
.taskTitle {
  font-weight: 700;
  font-size: 1.35em;
  padding-left: 6px;
  margin-bottom: 6px;
}
.check {
  text-decoration: line-through;
  background: #d7d7d7;
  opacity: 0.7;
}
.active {
  background: #c6c6c6;
}
</style>
