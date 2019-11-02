import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Todo } from '../todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  @Output() submit = new EventEmitter<Todo>();
  title: string;

  constructor() { }

  ngOnInit() {
  }

  addTodo() {
    if (this.title) {
      const todo: Todo = { title: this.title, completed: false };
      this.submit.emit(todo);
      this.title = '';
    }
}

}