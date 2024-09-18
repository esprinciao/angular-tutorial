import { Component, OnInit, ViewChild } from '@angular/core';
import { DonutChartService } from '../donut-chart.service';
import {
  AccumulationChartComponent,
  AccumulationChartAllModule,
  AccumulationTheme,
} from '@syncfusion/ej2-angular-charts';
import {
  IAccLoadedEventArgs,
  IPointRenderEventArgs,
} from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css'],
})
export class DonutChartComponent  {
  @ViewChild('chart') public chart: AccumulationChartComponent | undefined;
  public data: Object[] = [];
  public legendSettings: Object = { visible: false };
  public dataLabel: Object = {
    visible: true,
    position: 'Outside',
    font: { fontWeight: '600' },
    connectorStyle: { length: '20px', type: 'Curve' },
  };
  public centerLabel: Object = {
    text: 'Work vs Family Hours',
    hoverTextFormat: '${point.x}<br>${point.y} Hours',
    textStyle: { fontWeight: '600', size: '15px' },
  };
  public radius: string = '70%';
  public startAngle: number = 62;
  public border: object = { width: 1 };

  constructor(private donutChartService: DonutChartService) {}

  // ngOnInit(): void {
  //   // Fetch data for the default date or the current date
  //   const defaultDate = new Date().toISOString().split('T')[0];
  //   this.fetchData(defaultDate);
  // }

  fetchData(date: string): void {
    this.donutChartService.getWorkLifeBalanceData(date).subscribe((data) => {
      this.data = [
        { x: 'Work Hours', y: data.workingHours },
        { x: 'Family Hours', y: data.familyHours },
      ];
      if (this.chart) {
        this.chart.refresh();
      }
    });
  }

  onDateChange(event: any): void {
    const selectedDate = event.target.value;
    if (selectedDate) {
      this.fetchData(selectedDate);
    }
  }

  

  public pointRender(args: IPointRenderEventArgs): void {
    this.SetTheme(args);
  }

  public SetTheme(args: IPointRenderEventArgs): void {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    let seriesColor = ['#FFE066', '#FAB666'];
    if (selectedTheme === 'fluent' || selectedTheme === 'bootstrap5') {
      args.fill = seriesColor[args.point.index % 2];
    }
    args.border.color =
      selectedTheme.indexOf('dark') > -1 ? '#222222' : '#FFFFFF';
  }

  public load(args: IAccLoadedEventArgs): void {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.accumulation.theme = <AccumulationTheme>(
      (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(
        /-dark/i,
        'Dark'
      )
    );
  }
}
