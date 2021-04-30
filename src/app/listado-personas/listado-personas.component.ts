import { Component, OnInit } from '@angular/core';
import {ListadoPersonasService} from '../listado-personas.service'
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})

export class ListadoPersonasComponent implements OnInit {
  listado:any;
  activerouter: any;

  constructor(public listadoPersonasService: ListadoPersonasService) { }

  ngOnInit() {
    this.listadoPersonasService.getListadoPersonas().subscribe(data => {
      this.listado = data;
    });
  }

}
