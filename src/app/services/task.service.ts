import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  //  private api = 'https://jsonplaceholder.typicode.com';
    private api = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getAllTasks() {
    const path = `${this.api}/tasks/`;
    return this.http.get<Task[]>(path);
  }

  getTask(id: string) {
    const path = `${this.api}/tasks/${id}`;
    return this.http.get<Task>(path);
  }

  createTask(task: Task) {
    const path = `${this.api}/tasks`;
    location.reload();
    return this.http.post<Task>(path, task);
  }

  updateTask(task: Task) {
    const path = `${this.api}/tasks/${task.id}`;
    location.reload();
    return this.http.put<Task>(path, task);
  }

  deleteTask(id: string) {
    const path = `${this.api}/tasks/${id}`;
    return this.http.delete<Task>(path);
  }
}
