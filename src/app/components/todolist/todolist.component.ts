import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Todo } from 'src/app/models/entities/todo.model';
import { selectTodos } from 'src/app/store/todoStore/todo.selector';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  public todos$: Observable<Todo[]> = of([]);
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.todos$ = this.store.select(selectTodos)
  }

}
