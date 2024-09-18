// sleep-record.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SleepRecordService {
  private apiUrl = 'http://localhost:8094/api/sleep-schedule'; // Adjust the URL if necessary

  constructor(private http: HttpClient) {}

  getSleepDurationForWeek(startDate: string): Observable<Map<string, number>> {
    return this.http.get<Map<string, number>>(
      `${this.apiUrl}/week?start=${startDate}`
    );
  }
}
