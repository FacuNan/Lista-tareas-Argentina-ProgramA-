import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tasks } from 'src/app/mock-servic';
import { task } from 'src/app/task';
import {HttpClient, HttpHandler, HttpHeaders  } from "@angular/common/http";


const httpOptions={
headers: new HttpHeaders({'Content-Type':'application/json'})
}

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

  deleteTask(task: task): Observable<task>{
   const url = `${this.apiUrl}/${task.id}`
   return this.http.delete<task>(url);
  }

  updateTaskRecordatorio(task:task): Observable<task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.put<task>(url, task, httpOptions);
  }

  addTask(task:task):Observable<task>{
    return this.http.post<task>(this.apiUrl, task, httpOptions);
  }
  }

function Of(tasks: task[]) {
  throw new Error('Function not implemented.');
}

