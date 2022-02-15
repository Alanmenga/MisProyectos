import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { HeroeModel } from "src/app/models/heroe.models";

import Swal from 'sweetalert2'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HeroeModel[] = [];
  cargando: boolean = false;

  constructor( private heroeService: HeroesService) { }

  ngOnInit(): void {
    this.cargando = true;
    this.heroeService.getHeroes()
      .subscribe( resp => {
        this.heroes = resp;
        this.cargando = false;
      });
  }

  borrarHeroe( heroe: HeroeModel | any, index: number ) {

    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro que desea borrar a ${ heroe.nombre }?`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {
      if( resp.value ) {
        this.heroes.splice(index, 1);
        this.heroeService.borrarHeroe( heroe.id ).subscribe();
      }
    });

  }

}
