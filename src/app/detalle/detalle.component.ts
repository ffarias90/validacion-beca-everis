import { Component, OnInit } from '@angular/core';
import { ListadoPersonasService } from '../listado-personas.service';
import {Router, ActivatedRoute} from '@angular/router';
import { Persona } from '../model/persona';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  router: any;
  service: any;

  // persona: Persona[];
  
  // constructor(private service: ListadoPersonasService, private router:ActivatedRoute) { }

  

  persona: Persona[];
  activerouter: any;

  constructor(public listadoPersonasService: ListadoPersonasService) { }

  // ngOnInit() {
  //   this.listadoPersonasService.getPersona(this.personaid).subscribe(data => {
  //     this.persona = data;
  //     console.log(data);
  //   });
  // }

  ngOnInit(): void {
    // let personaid = this.activerouter.snapshot.paramMap.get('id');
    // console.log(personaid);

    let id = +this.router.snapshot.paramMap.get('id');
    this.service.getPersona(id).subscribe((data: Persona[])=>{
      this.persona=data;
      console.log(data);
    })
  }

}
