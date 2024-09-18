// ai-chat.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AIChatService {

  private baseUrl = 'http://localhost:8093/api/menu';

  constructor(private http: HttpClient) { }

  chat(prompt: string): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/chat`, prompt);
  }
}
