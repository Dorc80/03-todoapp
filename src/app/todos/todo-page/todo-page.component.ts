import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { toggleAll } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  completado: boolean = false;

  constructor(private _store: Store<AppState>) { }

  ngOnInit(): void {
  }

  toggleAll() {

    this.completado = !this.completado;
    this._store.dispatch(toggleAll({ completado: this.completado }));
  }

}
