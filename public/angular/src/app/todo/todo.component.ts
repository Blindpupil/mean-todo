import { Component, OnInit } from '@angular/core';

import { Todo } from './todo';
import { TodoService } from './todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  providers: [ TodoService ]
})
export class TodoComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos()
      .subscribe(todos => this.todos = todos);
  }
}
