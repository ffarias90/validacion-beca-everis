import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Persona } from './model/persona';

@Injectable({
  providedIn: 'root'
})
export class ListadoPersonasService {

  constructor(private http: HttpClient) { }

  getListadoPersonas(){
    return this.http.get<Persona[]>("http://localhost:8000/all");
  }

  getPersona(id){
    return this.http.get<Persona[]>("http://localhost:8000/find/1");
  }

}
