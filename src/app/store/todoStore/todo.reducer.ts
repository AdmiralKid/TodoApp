import { createReducer, on } from "@ngrx/store";
import { Todo } from "src/app/models/entities/todo.model";
import { createtodo, createTodoSuccess, deleteTodo, deleteTodoSuccess, loadSuccess } from "./todo.actions";
export const initialState: Todo[] = [];
export const todoReducer = createReducer(
    initialState,
    on(createTodoSuccess, (state, {todo}) => {
        return [...state, todo];
    }),
    on(loadSuccess, (state, {todoList}) =>{
      return todoList;
    }),
    on(deleteTodoSuccess, (state, {todoId}) => {
      const updatedState = state.filter((todo) => {
        return todo.todoId !== todoId;
      })
      return updatedState;
    })
)
