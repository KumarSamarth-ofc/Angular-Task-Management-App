import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'http://localhost:5000/api/auth';

  constructor(private http: HttpClient) { }
  
  register(userData: any) {
    return this.http.post(`${this.apiUrl}/register`, userData)
  }

  login(userData: any) {
    return this.http.post(`${this.apiUrl}/login`, userData)
  }

  logout() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
