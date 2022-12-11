import { Component, Output, EventEmitter } from '@angular/core';
import { task } from 'src/app/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<task>= new  EventEmitter(); 
text: String="";
dia: String="";
Recordatorio: boolean=false;

onSubmit(){
  if(this.text.length== 0){
    alert('ingrese un texto')
    return
  }
const {text,dia,Recordatorio} =this
  const newTask = {
   text,
   dia,
Recordatorio
  }
  this.onAddTask.emit(newTask);
}
}
