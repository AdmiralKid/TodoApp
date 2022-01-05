import { createFeatureSelector } from "@ngrx/store";
import { Todo } from "src/app/models/entities/todo.model";

export const selectTodos = createFeatureSelector<Array<Todo>>('todos');