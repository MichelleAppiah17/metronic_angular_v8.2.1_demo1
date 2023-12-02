import { Routes } from "@angular/router";
import { TodoComponent } from "./todo.component";
import { TodoPageComponent } from "./todo-page/todo-page.component";

export const todoRouting: Routes = [
    {
        path: "",
        component: TodoComponent,
        children: [
            {
                path: "",
                component: TodoPageComponent
            }
        ]
    }
]