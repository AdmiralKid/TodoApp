import {createAction, props} from '@ngrx/store';
import { Todo } from 'src/app/models/entities/todo.model';
export enum TodoAction {
    loadTodo = '[Todo] Load',
    createtodo = '[Todo] Create',
    loadSuccess = '[Todo] LoadSuccess',
    createTodoSuccess = '[Todo] CreateSuccess',
    deleteTodo = '[Todo] Delete',
    deleteTodoSuccess = '[Todo] DeleteSuccess'
}
export const loadTodo = createAction(TodoAction.loadTodo);
export const loadSuccess = createAction(TodoAction.loadSuccess, props<{todoList: Todo[]}>());
export const createtodo = createAction(TodoAction.createtodo, props<Todo>());
export const createTodoSuccess = createAction(TodoAction.createTodoSuccess, props<{todo : Todo}>());
export const deleteTodo = createAction(TodoAction.deleteTodo, props<{todoId : string}>());
export const deleteTodoSuccess = createAction(TodoAction.deleteTodoSuccess, props<{todoId : string}>());
