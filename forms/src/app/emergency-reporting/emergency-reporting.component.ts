import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-emergency-reporting',
  templateUrl: './emergency-reporting.component.html',
  styleUrls: ['./emergency-reporting.component.css'],
})
export class EmergencyReportingComponent {
  report = {
    type: '',
    location: '',
    description: '',
    priority: 'medium',
    contact: '',
  };

  constructor(private http: HttpClient) {}

  submitReport() {
    const url = 'http://localhost:8080/api/emergency-report';
    this.http.post(url, this.report).subscribe(
      (response) => {
        alert('Report submitted successfully!');
      },
      (error) => {
        alert('There was an error submitting your report.');
      }
    );
  }
}
