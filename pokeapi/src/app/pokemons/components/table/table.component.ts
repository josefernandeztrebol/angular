import { Component, Input } from '@angular/core';
import { Result, PokemonRow } from '../../interfaces/pokemon.interfaces';

@Component({
  selector: 'pokemon-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class PokemonTableComponent {
  @Input() public listPokemons!: Result[];
  public pokemonRows: PokemonRow[] = [];
  public selectedPokemonRow: PokemonRow | undefined;

  handlePokemonRowData(event: PokemonRow): void {
    this.pokemonRows.push(event);
  }

  handleEditButtonClick(event: PokemonRow): void {
    // Set the selectedPokemonRow to the clicked Pokemon row for editing
    this.selectedPokemonRow = { ...event }; // Create a copy to avoid modifying the original row
  }

  handleFormSubmit(updatedPokemonRow: PokemonRow): void {
    // Find the index of the selected row in the data
    const index = this.pokemonRows.findIndex(pokemon => pokemon.name === updatedPokemonRow.name);

    if (index !== -1) {
      // Update the original row in your data with the updated data
      this.pokemonRows[index] = { ...updatedPokemonRow };
    }

    // Clear the selected row to hide the form
    this.selectedPokemonRow = undefined;
  }
}
