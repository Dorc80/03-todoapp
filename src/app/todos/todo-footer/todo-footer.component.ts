import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { setFiltro } from '../../filtro/filtro.action';
import { limpiarTodos } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: string = 'todos';
  filtros: string[] = ['todos', 'completados', 'pendientes'];
  pendientes: number = 0;

  constructor(private _store: Store<AppState>) { }

  ngOnInit(): void {
    // this._store.select('filtro').subscribe(filtro => this.filtroActual = filtro)
    this._store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter(todo => !todo.completado).length;
    });
  }

  cambiarFiltro(filtro: string) {
    this._store.dispatch(setFiltro({ filtro }))
  }

  limpiarCompletados() {
    this._store.dispatch(limpiarTodos());
  }

}
