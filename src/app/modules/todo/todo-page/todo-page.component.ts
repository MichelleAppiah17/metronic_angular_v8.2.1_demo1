import { Component } from '@angular/core';
import { FormService } from '../services/form.service';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent {
  tasks: any[] = [];

  constructor(private formService: FormService, private taskService: TaskService) { 
    this.taskService.getTasks().subscribe((tasks: any[]) => {
      this.tasks = tasks;
    });
  }

  toggleForm(): void {
    this.formService.toggleFormVisibility(true);
    console.log('Add Task button clicked!');
  }

  deleteRow(index: number): void {
  this.tasks.splice(index, 1); 
  this.taskService.updateTasks(this.tasks);
}
}

