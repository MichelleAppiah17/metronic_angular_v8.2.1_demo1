import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { RouterModule } from '@angular/router';
import { todoRouting } from './todo-routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { CardsModule, WidgetsModule } from 'src/app/_metronic/partials';
import { TodoTableListComponent } from './components/todo-table-list/todo-table-list.component';
import { FormService } from './services/form.service';
import { TaskService } from './services/task.service';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';




@NgModule({
  declarations: [
    TodoComponent,
    TodoTableListComponent,
    TodoPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    CardsModule,
    WidgetsModule,
    DropDownListModule,
    RouterModule.forChild(todoRouting)
  ],
  providers: [
    FormService,
    TaskService,
  ],
  bootstrap: [TodoComponent],
})
export class TodoModule { }
