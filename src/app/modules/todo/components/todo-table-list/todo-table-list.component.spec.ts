import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTableListComponent } from './todo-table-list.component';

describe('TodoTableListComponent', () => {
  let component: TodoTableListComponent;
  let fixture: ComponentFixture<TodoTableListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoTableListComponent]
    });
    fixture = TestBed.createComponent(TodoTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
