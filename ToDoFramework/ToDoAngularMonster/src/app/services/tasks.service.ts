import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: Array<string> = [];
  editedTaskId: number = -1;
  isEdit: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isEdit$: Observable<boolean> = this.isEdit.asObservable();
  constructor() {}

  addTask(newTask: string): void {
    //add task
    if (newTask.trim() && !this.tasks.includes(newTask)) {
      this.tasks.push(newTask.trim());
    }
  }
  updateTask(newTask: string, id?: number) {
    //update task
    let editId: number = -1;
    if (typeof id === undefined) {
      editId = this.tasks.indexOf(newTask);
    } else {
      editId = id!;
    }
    if (newTask.trim()) {
      this.tasks[editId] = newTask.trim();
    }
  }
  editTask(id: number): void {
    this.editedTaskId = id;
    console.log('edit');

    this.changeIsEdit();
    // this.isEdit = true;
  }
  deleteTask(task: string): void {
    this.tasks = this.tasks.filter((el) => el != task);
  }
  getTasks(): Array<string> {
    return this.tasks;
  }
  getEditedTask(): string {
    return this.tasks[this.editedTaskId];
  }
  changeIsEdit(): void {
    this.isEdit$.pipe(take(1)).subscribe(() => {
      let oldValue;
      this.isEdit$.subscribe((isEdit) => {
        oldValue = isEdit;
      });
      console.log('oldValue', oldValue);
      console.log('newValue', !oldValue);

      this.isEdit.next(!oldValue);
    });
  }
}
