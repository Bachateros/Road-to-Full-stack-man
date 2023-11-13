import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tasks: Array<string> = [];
  editedTaskId: number = -1;

  // @ViewChild('input', { static: false }) inputRef!: any;
  editTask(id: number) {
    this.editedTaskId = id;
    // this.inputRef.newTask = '123';
    // console.log(this.editedTask);
  }
}
