import { Component } from '@angular/core';
import { PokemonsService } from '../../service/pokemons.service';
import { Result } from '../../interfaces/pokemon.interfaces';

@Component({
  selector: 'pokemons-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor( private pokemonService: PokemonsService ) {}

  get pokemons(): Result[] {
    return this.pokemonService.pokemonList;
  }

}
