import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8091/api/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    console.log('Requesting users from API...');
    return this.http.get<User[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<User> {
    console.log(`Requesting user with ID ${id} from API...`);
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  createUser(user: User): Observable<User> {
    console.log('Creating user with data:', user);
    return this.http.post<User>(this.apiUrl, user);
  }

  updateUser(id: number, user: User): Observable<User> {
    console.log(`Updating user with ID ${id} with data:`, user);
    return this.http.put<User>(`${this.apiUrl}/${id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    console.log(`Deleting user with ID ${id}...`);
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
