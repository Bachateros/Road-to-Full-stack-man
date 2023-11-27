import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TasksService } from './services/tasks.service';
import { TaskItemComponent } from './components/task-item/task-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputComponent,
    TaskListComponent,
    TaskItemComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [TasksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
