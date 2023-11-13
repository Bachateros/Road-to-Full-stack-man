import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  Provider,
  forwardRef,
  ElementRef,
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
  isEdit = false;
  @Output('editedTask')
  onEdit: EventEmitter<number> = new EventEmitter<number>();

  @ViewChild('item') itemRef!: ElementRef;
  @ViewChild('list') listRef!: ElementRef;

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

  addClass(id: number) {
    if (!this.isEdit) {
      this.listRef.nativeElement.children[id].classList.add('active');
      this.isEdit = true;
    }
    console.log(this.listRef.nativeElement.children[id].classList);
    // console.log(this.itemRef.nativeElement);
  }
  editTask(id: number) {
    if (!this.isEdit) {
      this.onEdit.emit(id);
    }
  }
  getTitle(task: string) {
    let title = task.slice(0, 15);
    return `${title.slice(0, title.indexOf(' '))}...`;
  }
}
