import { Component, ElementRef, OnChanges, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnChanges {
  @ViewChild('input') inputRef!: ElementRef;

  newTask = '';
  btnText = 'Добавить';
  isEdit$: Observable<boolean>;
  constructor(public taskService: TasksService) {
    this.isEdit$ = taskService.isEdit;
  }

  ngOnChanges(): void {
    if (this.taskService.isEdit) {
      this.btnText = 'Обновить';
      this.inputRef.nativeElement.value = this.taskService.getEditedTask();
      this.inputRef.nativeElement.focus();
    }
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
