import { Component, Input } from '@angular/core';
import { tasks } from 'src/app/mock-servic';
import { task } from 'src/app/task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})

export class TasksItemComponent {
  faTimes = faTimes;
  @Input() task:task=tasks[0];
}
