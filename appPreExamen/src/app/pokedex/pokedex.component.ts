import { Component, OnInit } from '@angular/core';
import { IResumenPokemon } from '../Interfaces/IResumenPokemon';
import { PokeapiService } from '../pokeapi.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  conteo: number = 0;
  resumenPokes? : IResumenPokemon[];

  constructor(public pokeapiService: PokeapiService){

  }
  ngOnInit(): void {
    this.pokeapiService.getListaPokemons().subscribe(data => {
      this.conteo = data.count
      this.resumenPokes = data.results
    });
  }
}
