import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChartComponent } from '@syncfusion/ej2-angular-charts';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  public chartData: any[] = []; // Initialize with an empty array
  public selectedDate: Date | null = null;

  @ViewChild('chart', { static: false }) public chart!: ChartComponent;

  public chartSeries: any[] = [
    {
      type: 'Bar',
      dataSource: this.chartData,
      xName: 'date',
      yName: 'duration',
      name: 'Sleep Duration',
    },
  ];

  public chartTitle: string = 'Sleep Duration for the Week';
  public legendSettings: object = {
    visible: true,
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  public onDateChange(event: MatDatepickerInputEvent<Date>): void {
    this.selectedDate = event.value;
    if (this.selectedDate) {
      this.fetchChartData(this.selectedDate);
    }
  }

  private fetchChartData(date: Date): void {
    const startOfWeek = this.getStartOfWeek(date);
    this.http
      .get<Map<string, number>>(
        `http://localhost:8094/api/sleep-schedule/week?start=${startOfWeek}`
      )
      .subscribe((data) => {
        this.chartData = Object.entries(data).map(([date, duration]) => ({
          date,
          duration,
        }));
        this.chart.series[0].dataSource = this.chartData; // Update chart data source
        this.chart.refresh(); // Refresh the chart to reflect new data
      });
  }

  private getStartOfWeek(date: Date): string {
    const startOfWeek = new Date(date);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay() + 1);
    return startOfWeek.toISOString().split('T')[0]; // Return in YYYY-MM-DD format
  }
}
