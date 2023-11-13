import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PokemonRow } from '../../interfaces/pokemon.interfaces';

@Component({
  selector: 'pokemons-pokemon-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class PokemonsPokemonFormComponent implements OnInit {
  @Input() pokemonRow: PokemonRow | undefined;
  @Output() formSubmit = new EventEmitter<PokemonRow>();

  pokemonForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.pokemonForm = this.fb.group({
      name: ['', Validators.required],
      types: ['', Validators.required],
      attack: [undefined, Validators.pattern(/^\d+$/)], // Ensure it's a number
    });
  }

  ngOnInit(): void {
    // Initialize the form with the input values if available
    if (this.pokemonRow) {
      this.pokemonForm.patchValue(this.pokemonRow);
    }
  }

  submitForm() {
    if (this.pokemonForm.valid) {
      this.formSubmit.emit(this.pokemonForm.value);
    }
  }
}
