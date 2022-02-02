import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatetodoComponent } from './components/createtodo/createtodo.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'createtodo', component: CreatetodoComponent },
  { path: 'todolist', component: TodolistComponent },
  { path: '', redirectTo: '/todolist', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
