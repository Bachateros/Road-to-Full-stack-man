import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent {
  constructor(public taskService: TasksService) {}

  @ViewChild('item') itemRef!: ElementRef;

  @Input() task!: string;
  @Input() id!: number;

  deleteTask(task: string): void {
    this.taskService.deleteTask(task);
  }

  editTask(id: number): void {
    console.log(this.taskService.isEdit);
    console.log(this.taskService.isEdit$.subscribe((val) => val));

    if (!this.taskService.isEdit$) {
      this.taskService.editTask(id);
      this.itemRef.nativeElement.classList.add('active');
      // this.onEdit.emit(id);
    }
  }
  getTitle(task: string): string {
    let title = task.slice(0, 15);
    const titleEnd = title.indexOf(' ') < 0 ? title.length : title.indexOf(' ');
    return `${title.slice(0, titleEnd)}`;
  }

  checkTask(): void {
    this.itemRef.nativeElement.classList.toggle('checked');
  }
}
//     this.listRef.nativeElement.children[this.editID].classList.remove(
// 'active'
// );
