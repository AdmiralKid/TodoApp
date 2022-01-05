import { createReducer, on } from "@ngrx/store";
import { Todo } from "src/app/models/entities/todo.model";
import { createtodo } from "./todo.actions";
import { v4 as uuidv4 } from 'uuid';
export const initialState: Todo[] = [{id:uuidv4(),title:"Sample"}];
export const todoReducer = createReducer(
    initialState,
    on(createtodo, (state, todo) => {
        todo.id = uuidv4();
        return [...state, todo];
    })
)