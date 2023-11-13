import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  Provider,
  forwardRef,
  ElementRef,
  OnChanges,
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
export class TaskListComponent implements ControlValueAccessor, OnChanges {
  tasks!: Array<string>;
  @Input()
  isEdit!: boolean;
  editID: number = -1;

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

  editTask(id: number) {
    this.editID = id;
    if (!this.isEdit) {
      this.listRef.nativeElement.children[id].classList.add('active');
      this.onEdit.emit(id);
    }
  }
  getTitle(task: string) {
    let title = task.slice(0, 15);
    return `${title.slice(0, title.indexOf(' '))}...`;
  }

  ngOnChanges(): void {
    if (this.editID != -1) {
      this.listRef.nativeElement.children[this.editID].classList.remove(
        'active'
      );
      this.editID = -1;
    }
  }
}
