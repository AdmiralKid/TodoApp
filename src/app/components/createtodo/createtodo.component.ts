import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/models/entities/todo.model';
import { createtodo } from 'src/app/store/todoStore/todo.actions';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-createtodo',
  templateUrl: './createtodo.component.html',
  styleUrls: ['./createtodo.component.css'],
})
export class CreatetodoComponent implements OnInit {
  createTodo: FormGroup;
  submitError: boolean = false;
  ngOnInit(): void {}
  submitHandler() {
    console.log(this.createTodo);
    if (this.createTodo.status !== 'VALID') {
      this.submitError = true;
    } else {
      this.submitError = false;
      let todo: Todo = this.createTodo.value as Todo;
      todo.todoId = uuidv4();
      this.store.dispatch(createtodo(todo));
      this.router.navigate(['/todolist']);
    }
  }
  get title() {
    return this.createTodo.get('title') as FormControl;
  }
  constructor(private formBuilder: FormBuilder, private store: Store,  private router: Router ) {
    this.createTodo = formBuilder.group({
      todoId: [''],
      title: [
        '',
        {
          validators: [Validators.required, Validators.minLength(3)],
          updateOn: 'blur',
        },
      ],
      desc: [''],
    });
  }
}
