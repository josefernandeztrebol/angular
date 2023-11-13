import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { PokemonsService } from '../../service/pokemons.service';

@Component({
  selector: 'pokemons-limit-search',
  templateUrl: './limit-search.component.html',
  styleUrls: ['./limit-search.component.css']
})
export class LimitSearchComponent implements AfterViewInit {

  @ViewChild('numberLimit')
  public limitInput!: ElementRef<HTMLInputElement>;

  constructor(private pokemonService: PokemonsService) { }

  ngAfterViewInit(): void {
    if (this.pokemonService.pokemonList.length > 0) {
      this.handlePokemonListData();
    } else {
      this.searchLimitOnInit();
    }
  }

  handlePokemonListData(): void {
    console.log('Using existing pokemonList data:', this.pokemonService.pokemonList);
  }

  searchLimitOnInit(): void {
    const limit = parseInt(this.limitInput.nativeElement.value, 10);
    this.pokemonService.removeLocalStorage();
    this.pokemonService.searchPokemonList(limit);
  }

  searchLimit(): void {
    const limit = parseInt(this.limitInput.nativeElement.value, 10);
    this.pokemonService.searchPokemonList(limit);
    this.limitInput.nativeElement.value = '';
  }
}
