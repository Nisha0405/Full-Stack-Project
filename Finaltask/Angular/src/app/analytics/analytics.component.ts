import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { NgChartsModule } from 'ng2-charts'


@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  constructor() { }

  
  ngOnInit(): void {
  }

  public barChartOptions: ChartOptions = {
    responsive: true,
 };
 public barChartLabels = ['2006', '2007', '2008', '2009', '2010', 
 '2011', '2012'];
 public barChartType: ChartType = 'bar';
 public barChartLegend = true;
 public barChartPlugins = [];
 
 public barChartData: ChartDataset[] = [
 { data: [65, 59, 80, 81, 56, 55, 40], label: 'Angular' },
 { data: [28, 48, 40, 19, 86, 27, 90], label: 'Django' }
 ];

 
}
