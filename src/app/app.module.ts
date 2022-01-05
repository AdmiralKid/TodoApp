import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { CreatetodoComponent } from './components/createtodo/createtodo.component';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './store/todoStore/todo.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    CreatetodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({todos: todoReducer}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
