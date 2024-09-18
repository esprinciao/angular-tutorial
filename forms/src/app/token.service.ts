import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Token } from './token'; // Import Token interface
import { AuthenticationResponse } from './authentication-response'; // Import AuthenticationResponse interface

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private jwt!: string;

  private apiUrl = 'http://localhost:8092/authenticate'; // URL to the backend API

  constructor(private http: HttpClient) {}

  authenticate(
    username: string,
    password: string
  ): Observable<AuthenticationResponse> {
    console.log('generating jwt...');

    const credentials: Token = { username, password };

    return this.http.post<AuthenticationResponse>(this.apiUrl, credentials);
  }

  sendAuthRequest(jwt: string) {
    console.log('validating...');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwt}`);
    return this.http.get('http://localhost:8092/greet', { headers, responseType:'text' as 'json' });
  }
}
