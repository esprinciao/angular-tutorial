import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WellbeingService {
  private apiUrl = 'http://localhost:8093/api/menu/analyze'; // Your Spring Boot API URL

  constructor(private http: HttpClient) {}

  getWellbeingAnalysis(prompt: string): Observable<string> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = { prompt };

    return this.http.post<string>(this.apiUrl, body, { headers, responseType: 'text' as 'json' });
  }
}
