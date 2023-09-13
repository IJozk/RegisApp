import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { NgChartsModule, NgChartsConfiguration } from 'ng2-charts'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, NgChartsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, {provide: NgChartsConfiguration, useValue: { generateColors: false }}],
  bootstrap: [AppComponent],
})
export class AppModule {}
