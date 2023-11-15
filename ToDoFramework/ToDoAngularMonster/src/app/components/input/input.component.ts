import { Component, ElementRef, ViewChild } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @ViewChild('input') inputRef!: ElementRef;

  newTask = '';
  btnText = 'Добавить';

  constructor(public taskService: TasksService) {
    taskService.isEdit$.subscribe((v) => {
      if (v) {
        this.btnText = 'Обновить';
        this.inputRef.nativeElement.value = this.taskService.getEditedTask();
        this.inputRef.nativeElement.focus();
      } else {
        this.btnText = 'Добавить';
      }
    });
  }

  addTask(): void {
    if (this.btnText === 'Добавить') {
      this.taskService.addTask(this.newTask);
    } else {
      //update task
      this.taskService.updateTask(this.newTask);
      this.btnText = 'Добавить';
      this.inputRef.nativeElement.blur();
      this.taskService.changeIsEdit();
    }
    this.newTask = '';
  }

  cancelEdit(): void {
    this.btnText = 'Добавить';
    this.inputRef.nativeElement.value = '';
    this.inputRef.nativeElement.blur();
    this.taskService.changeIsEdit();
  }
}
