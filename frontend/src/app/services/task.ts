import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class Task {
  apiUrl = "http://localhost:5000/api/tasks";
  
  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get(this.apiUrl);
  }

  createTask(taskData: any) { 
    return this.http.post(this.apiUrl, taskData);
  }

  updateTask(taskId: string, taskData: any) {
    return this.http.put(`${this.apiUrl}/${taskId}`, taskData);
  }
  
  deleteTask(taskId: string) {
    return this.http.delete(`${this.apiUrl}/${taskId}`);
  }
}
