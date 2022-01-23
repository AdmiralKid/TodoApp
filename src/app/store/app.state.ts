import { Todo } from "../models/entities/todo.model";

export interface AppState {
    todos: Array<Todo>;
}