import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pokemon, Result, PokemonRow } from '../../interfaces/pokemon.interfaces';
import { PokemonsService } from '../../service/pokemons.service';

@Component({
  selector: 'pokemons-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() public result!: Result;
  @Output() public pokemonRowData = new EventEmitter<PokemonRow>();

  public pokemonData: Pokemon | undefined;
  public pokemonImage: string | undefined;

  constructor(private pokemonService: PokemonsService) {}

  ngOnInit(): void {
    if (!this.result) throw new Error('Result is required.');
    this.fetchPokemonData();
    this.fetchPokemonImage();
  }

  fetchPokemonData() {
    this.pokemonService.searchPokemonName(this.result)
      .subscribe((data: Pokemon) => {
        const pokemonRow: PokemonRow = this.processPokemon(data);
        this.pokemonService.savePokemonData(pokemonRow);
        this.pokemonRowData.emit(pokemonRow);
      });
  }

  processPokemon(pokemon: Pokemon): PokemonRow {
    return {
      name: pokemon.name || 'N/A',
      types: pokemon.types ? pokemon.types.map(type => type.type.name) : [],
      attack: pokemon.stats ? pokemon.stats.find(stat => stat.stat.name === 'attack')?.base_stat : undefined,
      image: this.pokemonService.searchPokemonImage(this.result) || undefined,
    };
  }

  fetchPokemonImage() {
    this.pokemonImage = this.pokemonService.searchPokemonImage(this.result);
  }
}
