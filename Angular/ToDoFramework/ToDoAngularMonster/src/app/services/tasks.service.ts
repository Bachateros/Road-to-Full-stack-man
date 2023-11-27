import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: Array<string> = [];
  editedTaskId: number = -1;
  isEdit$ = new BehaviorSubject<boolean>(false);
  constructor() {}

  addTask(newTask: string): void {
    //add task
    if (newTask.trim() && !this.tasks.includes(newTask)) {
      this.tasks.push(newTask.trim());
    }
  }
  updateTask(newTask: string) {
    //update task
    if (newTask.trim()) {
      this.tasks[this.editedTaskId] = newTask.trim();
    }
  }
  editTask(id: number): void {
    this.editedTaskId = id;
    this.changeIsEdit();
  }
  deleteTask(task: string): void {
    this.tasks = this.tasks.filter((el) => el != task);
  }
  changeIsEdit(): void {
    this.isEdit$.next(!this.isEdit$.value);
  }

  getTasks(): Array<string> {
    return this.tasks;
  }
  getEditedTask(): string {
    return this.tasks[this.editedTaskId];
  }
}
