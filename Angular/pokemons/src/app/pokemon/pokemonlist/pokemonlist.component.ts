import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.intefaces';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.css']
})
export class PokemonlistComponent implements OnInit {

  public pokemons : Pokemon[] = [];
  public page: number = 0;

  constructor( private pokemonService: PokemonService ) {  }

  ngOnInit(): void {

    this.pokemonService.getAllPokemons()
      .subscribe( pokemons => {
        this.pokemons = pokemons;
      });

  }


  nextPage() {
    this.page += 5;
  }

  prevPage() {
    if ( this.page >0 )
    this.page -= 5;
  }

}
