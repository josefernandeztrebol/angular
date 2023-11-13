import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonTableComponent } from './components/table/table.component';
import { LimitSearchComponent } from './components/limit-search/limit-search.component';
import { PokemonsPokemonFormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    PokemonComponent,
    PokemonTableComponent,
    LimitSearchComponent,
    PokemonsPokemonFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    HomeComponent,
  ]
})
export class PokemonsModule { }
