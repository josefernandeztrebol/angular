import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pokemon, PokemonResponse, PokemonRow, Result } from '../interfaces/pokemon.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  public pokemonList: Result[] = [];
  public savedPokemonData: PokemonRow[] = []; // New variable array to save each pokemonData

  private pokeApi: string = 'https://pokeapi.co/api/v2/';
  private imagePokemon: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  searchPokemonList(limit: number = 10): void {
    const params = new HttpParams().set('limit', limit.toString()).set('offset', '0');

    this.http.get<PokemonResponse>(`${this.pokeApi}pokemon`, { params })
      .subscribe(res => {
        this.pokemonList = res.results;
      });
  }

  private loadLocalStorage(): void {
    const storedPokemonList = localStorage.getItem('history');
    if (storedPokemonList) {
      this.savedPokemonData = JSON.parse(storedPokemonList);
    }
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this.savedPokemonData));
  }

  removeLocalStorage(): void {
    this.savedPokemonData = [];
    this.saveLocalStorage();
  }

  searchPokemonName(tag: Result): Observable<Pokemon> {
    return this.http.get<Pokemon>(tag.url);
  }

  searchPokemonImage(tag: Result): string {
    const parts = tag.url.split('/');
    return this.imagePokemon + parts[parts.length - 2] + '.png';
  }

  savePokemonData(pokemonData: PokemonRow): void {
    this.savedPokemonData.push(pokemonData);
    this.saveLocalStorage(); // Save to local storage whenever new data is added
  }
}
