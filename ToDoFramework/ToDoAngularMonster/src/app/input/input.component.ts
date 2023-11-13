import {
  Output,
  Component,
  ElementRef,
  Input,
  OnChanges,
  ViewChild,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnChanges {
  @Input() tasks!: Array<string>;
  @Input() editedTaskId!: number;

  @Output('finishEdit')
  finishEdit: EventEmitter<number> = new EventEmitter<number>();

  @ViewChild('input') inputRef!: ElementRef;

  newTask = '';
  btnText = 'Добавить';

  ngOnChanges(): void {
    if (this.editedTaskId >= 0) {
      this.btnText = 'Обновить';
      this.inputRef.nativeElement.value = this.tasks[this.editedTaskId];
      this.inputRef.nativeElement.focus();
    }
  }

  addTask(): void {
    if (this.btnText === 'Добавить') {
      //add task
      if (this.newTask.trim() && !this.tasks.includes(this.newTask)) {
        this.tasks.push(this.newTask.trim());
      }
    } else {
      //update task
      if (this.newTask.trim()) {
        this.tasks[this.editedTaskId] = this.newTask.trim();
      }
      this.btnText = 'Добавить';
      this.finishEdit.emit();
      this.inputRef.nativeElement.blur();
    }
    this.newTask = '';
  }

  cancelEdit(): void {
    this.btnText = 'Добавить';
    this.inputRef.nativeElement.value = '';
    this.finishEdit.emit();
    this.inputRef.nativeElement.blur();
  }
}
