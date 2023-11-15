import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ElementRef,
  OnChanges,
} from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnChanges {
  editID: number = -1;

  constructor(public taskService: TasksService) {}

  @Input() isEdit!: boolean;

  @Output('editedTask')
  onEdit: EventEmitter<number> = new EventEmitter<number>();

  ngOnChanges(): void {
    if (this.editID != -1) {
      this.editID = -1;
    }
  }
}
