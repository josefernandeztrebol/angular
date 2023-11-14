import { Component } from '@angular/core';
import { PokemonsService } from '../../service/pokemons.service';
import { PokemonRow, Result } from '../../interfaces/pokemon.interfaces';

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

  onNewEdit(pokemon: PokemonRow): void {
    console.log(pokemon);

    const index = this.pokemonService.savedPokemonData.findIndex(
      (p) => p.name === pokemon.name
    );
    if (index !== -1) {
      this.pokemonService.savedPokemonData[index] = pokemon;
    }
  }
}
