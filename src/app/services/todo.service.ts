import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/entities/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private _baseUrl: string;
  constructor(private http: HttpClient) {
    this._baseUrl = 'https://localhost:7278/api/';
  }
  public getJSON(): Observable<Todo[]> {
    return this.http.get(`${this._baseUrl}Todo`) as Observable<Todo[]>;
  }
  public addTodo(todo: Todo): Observable<Todo> {
    return this.http.post(`${this._baseUrl}Todo`, todo, {
      headers : {
        'Content-Type':'application/json'
      }
  }) as Observable<Todo>;
  }
  public deleteTodo(todoId: string): Observable<string> {
    return this.http.delete(`${this._baseUrl}Todo/${todoId}`, {
      headers : {
        'Content-Type':'application/json',
        'accept':'application/json'
      }}) as Observable<string>;
  }
}
