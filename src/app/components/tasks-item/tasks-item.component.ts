import { Component, Input } from '@angular/core';
import { tasks } from 'src/app/mock-servic';
import { task } from 'src/app/task';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})

export class TasksItemComponent {
  @Input() task:task=tasks[0];
}
