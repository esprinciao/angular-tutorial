import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8091/api/users'; // Adjust this to your backend URL

  constructor(private http: HttpClient) {}

  // Register a new user
  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, userData);
  }

  // Login an existing user
  loginUser(emailaddress: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, null, {
      params: {
        emailaddress,
        password
      }
    });
  }
}
