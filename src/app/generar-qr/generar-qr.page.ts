import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generar-qr',
  templateUrl: './generar-qr.page.html',
  styleUrls: ['./generar-qr.page.scss'],
})
export class GenerarQrPage {

  qrData = null;
  createdCode = null;

  constructor() {}

  createCode () {
    this.createdCode = this.qrData;
    console.log(this.createdCode);
  }

}
