import { Component, Input } from '@angular/core';
import { IResumenPokemon } from '../Interfaces/IResumenPokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  @Input() poke? : IResumenPokemon;
}
