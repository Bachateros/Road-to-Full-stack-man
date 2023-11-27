import { defineStore } from "pinia"

const getTasks = () => {
  const tasksInLocalStorage = window.localStorage.getItem("tasks")
  if (tasksInLocalStorage) {
    return JSON.parse(tasksInLocalStorage)
  } else return []
}

export const useTasksStore = defineStore("tasks", {
  state: () => {
    return {
      tasks: getTasks(),
    }
  },
  actions: {
    addTask(task) {
      if (!this.tasks.includes(task)) this.tasks.push(task)
      localStorage.setItem("tasks", JSON.stringify(this.tasks))
    },
    deleteTask(task) {
      this.tasks = this.tasks.filter(item => item != task)
      localStorage.setItem("tasks", JSON.stringify(this.tasks))
    },
    updateTask(id, updatedTask) {
      this.tasks[id] = updatedTask
      localStorage.setItem("tasks", JSON.stringify(this.tasks))
    },
  },
})
