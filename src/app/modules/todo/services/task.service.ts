import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  
  getTasks(): Observable<any[]> {
    return this.tasksSubject.asObservable();
  }

  updateTasks(tasks: any[]): void {
    this.tasksSubject.next(tasks);
  }
}

