import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  newTask = '';
  @Input()
  tasks!: Array<string>;

  addTask() {
    if (this.newTask.trim() && !this.tasks.includes(this.newTask)) {
      this.tasks.push(this.newTask);
    }
  }
}
