import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filtroActual: string;

  constructor(private _store: Store<AppState>) { }

  ngOnInit(): void {
    // this._store.select('todos').subscribe(todos => {
    //   this.todos = todos
    //   console.log('ngrx todos changed');
    // });
    this._store.subscribe(state => {
      this.todos = state.todos
      this.filtroActual = state.filtro;
    });
  }

}
