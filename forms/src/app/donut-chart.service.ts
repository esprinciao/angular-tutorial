import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DonutChartService {
  private apiUrl = 'http://localhost:8094/api/work-life-balance/date'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  getWorkLifeBalanceData(date: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?date=${date}`);
  }
}
