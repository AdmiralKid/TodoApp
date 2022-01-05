import {createAction, props} from '@ngrx/store';
import { Todo } from 'src/app/models/entities/todo.model';
export enum TodoAction {
    loadTodo = '[Todo] Load',
    createtodo = '[Todo] Create'
}
//export const loadTodo = createAction(TodoAction.loadTodo, props<{todoList: Todo[]}>());
export const createtodo = createAction(TodoAction.createtodo, props<Todo>());