import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent {
  @ViewChild('item') itemRef!: ElementRef;

  constructor(public taskService: TasksService) {
    taskService.isEdit$.subscribe((val) => {
      if (val) {
      } else {
        this.itemRef?.nativeElement.classList.remove('active');
      }
    });
  }

  @Input() task!: string;
  @Input() id!: number;

  deleteTask(task: string): void {
    this.taskService.deleteTask(task);
  }

  editTask(id: number): void {
    if (!this.taskService.isEdit$.value) {
      this.taskService.editTask(id);
      this.itemRef.nativeElement.classList.add('active');
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
