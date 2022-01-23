import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { CreatetodoComponent } from './components/createtodo/createtodo.component';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './store/todoStore/todo.reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './store/todoStore/todo.effects';
@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    CreatetodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({todos: todoReducer}, {}),
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forRoot([TodoEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
