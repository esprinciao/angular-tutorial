import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:8094/api/screen-time/pie-chart-data'; // Ensure this URL is correct

  constructor(private http: HttpClient) {}

  getPieChartData(date: string): Observable<any[]> {
    const params = new HttpParams().set('date', date);
    return this.http.get<any[]>(this.apiUrl, { params });
  }
}
