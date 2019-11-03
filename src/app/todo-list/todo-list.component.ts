import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  
  colum: string[] =['title', 'completed'];
  @Input() todoList: Todo[];

  constructor() {}

  ngOnInit() {
  }

}