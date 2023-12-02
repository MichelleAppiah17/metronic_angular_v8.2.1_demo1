
import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormService} from '../../services/form.service';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-todo-table-list',
  templateUrl: './todo-table-list.component.html',
  styleUrls: ['./todo-table-list.component.scss']
})
export class TodoTableListComponent implements OnDestroy {
  showForm = false;
  subscription: Subscription;
  todoForm: FormGroup;
  taskArray: any[] = [];
  isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private taskService: TaskService
  ) {
    this.todoForm = this.fb.group({
      task: ['', Validators.required],
      dueDate: ['', Validators.required]
    });

    this.subscription = this.formService.showForm$.subscribe(show => {
      this.showForm = show;
    });
  }

  logToConsole(): void {
    console.log('Save button clicked!');
  }

  toggleForm(show: boolean): void {
    this.showForm = show;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(): void {
    const formValue = this.todoForm.value;
    this.taskArray.push({
      taskName: formValue.task,
      dueDate: formValue.dueDate,
    });
    this.isSubmitted = true;
    this.todoForm.reset();
    this.showForm = false;
    this.taskService.updateTasks([...this.taskArray]);
  }
}
