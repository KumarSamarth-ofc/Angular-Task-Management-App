import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    const userData=  {
      email: this.email,
      password: this.password,
    }

    this.authService.login(userData).subscribe({
      next: (response: any) => {
        console.log(response);

        localStorage.setItem('token',response.token);
        alert('Login successful!');
        this.router.navigate(['/dashboard']);
      },
      
      error: (error) => {
        console.error('Login failed:', error);
        alert('Login failed. Please check your credentials and try again.');
      }
    })
  }
 }

