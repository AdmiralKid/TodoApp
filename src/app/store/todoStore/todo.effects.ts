import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, merge } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TodoService } from 'src/app/services/todo.service';
import {
  createTodoSuccess,
  deleteTodoSuccess,
  loadSuccess,
  loadTodo,
  TodoAction,
} from './todo.actions';

@Injectable()
export class TodoEffects {
  loadTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoAction.loadTodo),
      mergeMap(() =>
        this.todoServices
          .getJSON()
          .pipe(map((todos) => loadSuccess({ todoList: todos })))
      ),
      catchError(() => EMPTY)
    )
  );

  createTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoAction.createtodo),
      mergeMap((todo) =>
        this.todoServices
          .addTodo(todo)
          .pipe(map((todo) => createTodoSuccess({ todo })))
      ),
      catchError(() => EMPTY)
    )
  );

  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoAction.deleteTodo),
      mergeMap(({ todoId }) =>
        this.todoServices
          .deleteTodo(todoId)
          .pipe(map((todoId) => deleteTodoSuccess({ todoId })))
      ),
      catchError(() => EMPTY)
    )
  );

  constructor(private actions$: Actions, private todoServices: TodoService) {}
}
