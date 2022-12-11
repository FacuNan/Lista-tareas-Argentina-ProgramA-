import { Component, Input, EventEmitter, Output } from '@angular/core';
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
  @Output() onDeleteTask: EventEmitter<task> = new EventEmitter(); 
  @Output() onToggleReminder: EventEmitter<task> = new EventEmitter(); 

  onDelete(task:task){
    this.onDeleteTask.emit(task);
  }

  onToggleTask(task:task){
    this.onToggleReminder.emit(task);
  }
}
