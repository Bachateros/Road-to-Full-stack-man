import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tasks: Array<string> = [];
  editedTaskId: number = -1;

  editTask(id: number) {
    this.editedTaskId = id;
  }
}
