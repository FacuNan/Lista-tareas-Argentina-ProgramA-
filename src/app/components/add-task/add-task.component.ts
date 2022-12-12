import { Component, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { InterfaceService } from 'src/app/service/interface.service';
import { task } from 'src/app/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<task> = new EventEmitter();
  text: String = "";
  dia: String = "";
  Recordatorio: boolean = false;
  showAddTask: Boolean = false;
  subscription?:Subscription;
constructor(private interfaceService: InterfaceService){
  this.subscription = this.interfaceService.onToggle().subscribe(value => this.showAddTask=value);
}
  onSubmit() {
    if (this.text.length == 0) {
      alert('ingrese un texto')
      return
    }
    const { text, dia, Recordatorio } = this
    const newTask = {
      text,
      dia,
      Recordatorio
    }
    this.onAddTask.emit(newTask);
  }
}
