import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonRow } from '../../interfaces/pokemon.interfaces';
import { trigger } from '@angular/animations';

@Component({
  selector: 'pokemons-pokemon-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class PokemonsPokemonFormComponent {
  @Input() pokemonRow: PokemonRow | undefined;
  @Output()
  public onEditPokemon: EventEmitter<PokemonRow>= new EventEmitter();
  public poke: PokemonRow = {
    name: '',
    attack: 0,
    types: [''],
    image: ''
  }

  emitPokemon(): void{
    this.onEditPokemon.emit({...this.poke});
    this.poke.name= '';
    this.poke.attack= 0;
    this.poke.types= [''];
    this.poke.image= '';
  }
}

