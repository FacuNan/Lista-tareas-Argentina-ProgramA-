import { Component } from '@angular/core';
import { tasks } from 'src/app/mock-servic';
import { task } from 'src/app/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
tasks: task[] = tasks;
}