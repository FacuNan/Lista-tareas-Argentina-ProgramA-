import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tasks } from 'src/app/mock-servic';
import { task } from 'src/app/task';
import {HttpClient, HttpHandler  } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class TasksServiceService {
private apiUrl = 'http://localhost:5000/tasks';
  constructor(private http:HttpClient) {
    
   }
  getTasks():Observable <task[]>{
   return this.http.get<task[]>(this.apiUrl);
  }
}
function Of(tasks: task[]) {
  throw new Error('Function not implemented.');
}

