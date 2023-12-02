import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private showFormSource = new BehaviorSubject<boolean>(false);
  showForm$ = this.showFormSource.asObservable();

  toggleFormVisibility(show: boolean): void {
    this.showFormSource.next(show);
  }
}
