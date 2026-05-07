import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

import { TaskService }
from '../../services/task';

import { AuthService }
from '../../services/auth';

@Component({
  selector: 'app-dashboard',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
  ],

  templateUrl: './dashboard.html',

  styleUrl: './dashboard.css',
})
export class Dashboard
implements OnInit {

  tasks: any[] = [];

  title = '';

  constructor(

    private taskService: TaskService,
    private authService: AuthService,
    private cdr: ChangeDetectorRef,
    private router: Router

  ) {}

  ngOnInit() {

    this.fetchTasks();
  }


  fetchTasks() {

    this.taskService.getTasks()
      .subscribe({

        next: (response: any) => {

          this.tasks = response;
          this.cdr.detectChanges();
        },

        error: (error) => {

          console.log(error);
        }
      });
  }


  addTask() {

    const data = {
      title: this.title,
    };

    this.taskService.createTask(data)
      .subscribe({

        next: () => {

          this.title = '';

          this.fetchTasks();
        },

        error: (error) => {

          console.log(error);
        }
      });
  }


  deleteTask(id: string) {

    this.taskService.deleteTask(id)
      .subscribe({

        next: () => {

          this.fetchTasks();
        },

        error: (error) => {

          console.log(error);
        }
      });
  }


  logout() {

    this.authService.logout();

    this.router.navigate(['/login']);
  }
}