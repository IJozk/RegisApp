import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { ChartData, ChartEvent, ChartType } from 'chart.js';


@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  constructor(private router:Router) { }
  redirigiraLogin(){
    this.router.navigateByUrl('/login');
  }
  redirigiraMenu(){
    this.router.navigateByUrl('/menu');
  }
  redirigiraAsist(){
    this.router.navigateByUrl('/asistencia');
  }
  redirigiraCuenta(){
    this.router.navigateByUrl('/cuenta');
  }
  ngOnInit() {
  }

  // Doughnut
  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100] },
      { data: [50, 150, 120] },
      { data: [250, 130, 70] },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }
}



