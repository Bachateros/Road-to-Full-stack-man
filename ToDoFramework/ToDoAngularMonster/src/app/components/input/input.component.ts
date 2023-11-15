import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @ViewChild('input') inputRef!: ElementRef;

  newTask = new FormControl('');
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
    const newTask = this.newTask.value as string;
    if (this.btnText === 'Добавить') {
      this.taskService.addTask(newTask);
    } else {
      //update task
      this.taskService.updateTask(newTask);
      this.taskService.changeIsEdit();
      this.inputRef.nativeElement.blur();
    }
    this.newTask.setValue('');
  }

  cancelEdit(): void {
    this.btnText = 'Добавить';
    this.inputRef.nativeElement.blur();
    this.taskService.changeIsEdit();
    this.newTask.setValue('');
  }
}
