import {
  Component,
  EventEmitter,
  Input,
  Output,
  Provider,
  forwardRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
const VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TaskListComponent),
  multi: true,
};

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  providers: [VALUE_ACCESSOR],
})
export class TaskListComponent implements ControlValueAccessor {
  tasks!: Array<string>;
  @Output('editedTask')
  onEdit: EventEmitter<number> = new EventEmitter<number>();

  private onChange = (value: any) => {};

  writeValue(tasks: Array<string>): void {
    this.tasks = tasks;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}

  deleteTask(task: string): void {
    this.tasks = this.tasks.filter((el) => el != task);
    this.onChange(this.tasks);
  }

  editTask(id: number) {
    this.onEdit.emit(id);
    console.log('edit', id);
  }
  getTitle(task: string) {
    return `${task.slice(0, task.indexOf(' '))}...`;
  }
}
