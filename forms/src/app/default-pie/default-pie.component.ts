import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Browser } from '@syncfusion/ej2-base';
import { AccumulationChartComponent, IAccLoadedEventArgs, AccumulationTheme } from '@syncfusion/ej2-angular-charts';
import { AccumulationChartAllModule } from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'app-default-pie',
  templateUrl: './default-pie.component.html',
  styleUrls: ['./default-pie.component.css']
})
export class DefaultPieComponent implements OnInit {
  public data: Object[] = [];
  public legendSettings: Object = {
    visible: false
  };

  public dataLabel: Object = {
    visible: true,
    position: 'Outside',
    name: 'name',
    font: { fontWeight: '600' },
    connectorStyle: { length: '20px', type: 'Curve' }
  };
dataLabelSettings: any;
animationSettings: any;

  public load(args: IAccLoadedEventArgs): void {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.accumulation.theme = <AccumulationTheme>(
      (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1))
        .replace(/-dark/i, 'Dark')
        .replace(/contrast/i, 'Contrast')
        .replace(/-highContrast/i, 'HighContrast')
    );
  }

  public startAngle: number = Browser.isDevice ? 55 : 35;
  public radius: string = Browser.isDevice ? '40%' : '70%';
  public explode: boolean = true;
  public enableAnimation: boolean = true;
  public tooltip: Object = {
    enable: true,
    format: '<b>${point.x}</b><br>Usage: <b>${point.y}%</b>',
    header: ''
  };

  public title: string = 'Screen Time Usage';
  public selectedDate: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchPieChartData('2024-09-01');  // Default date or use user input
  }

  fetchPieChartData(date: string): void {
    this.apiService.getPieChartData(date).subscribe(data => {
      this.data = data;
    });
  }

  onDateChange(event: any): void {
    const date = event.target.value;
    this.selectedDate = date;
    this.fetchPieChartData(date);
  }
}
