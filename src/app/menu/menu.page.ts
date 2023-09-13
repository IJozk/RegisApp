import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

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
  escanearQr(){
    this.router.navigateByUrl('/qr-scanner');
  }
  ngOnInit() {
  }

}
