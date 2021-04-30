import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListadoPersonasComponent } from './listado-personas/listado-personas.component';
import { HttpClientModule } from "@angular/common/http";
import {ListadoPersonasService} from '../app/listado-personas.service';
import { DetalleComponent } from './detalle/detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListadoPersonasComponent,
    DetalleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ListadoPersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
