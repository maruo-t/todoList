import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-additional-form',
  templateUrl: './todo-additional-form.component.html',
  styleUrls: ['./todo-additional-form.component.css']
})
export class TodoAdditionalFormComponent implements OnInit {
  showFiller = false;
  constructor() { }

  ngOnInit() {
  }

}
