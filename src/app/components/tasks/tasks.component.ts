import { Component, OnInit } from '@angular/core';
import { TasksServiceService } from 'src/app/service/tasks-service.service';
import { task } from 'src/app/task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: task[] = [];

  constructor(private taskService: TasksServiceService) {

  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((task) => {
      this.tasks = task
    });

  }

  deleteTask(task: task){
    this.taskService.deleteTask(task).subscribe(()=>{
      this.tasks= this.tasks.filter(t => t.id !== task.id)
    })
  }

  onToggleReminder(task: task){
  task.recordatorio = !task.recordatorio;
  this.taskService.updateTaskRecordatorio(task).subscribe();
  }
  addTask(task: task){
this.taskService.addTask(task).subscribe((task)=>{
this.tasks.push(task);
  })
  }

}
