import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  inputTodo: string = "";

  constructor() { }

  ngOnInit(): void {

  }

  ColocaNaTela(id: Number) {
    this.todos.map((v, i) => {
      if (i == id) v.completado = !v.completado;

      return v;
    })
  }

  removeTodo(id: Number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addNaLista() {
    this.todos.push({
      content: this.inputTodo,
      completado: false
    });

    this.inputTodo = "";
  }

}