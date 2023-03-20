import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { IPokedex } from './Interfaces/IPokedex';
import { IPokemon } from './Interfaces/IPokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  apiUrlBase = 'https://pokeapi.co/api/v2/pokemon/'

  constructor(public api: HttpClient) { }

  getListaPokemons(): Observable<IPokedex>{
    return this.api.get<IPokedex>(this.apiUrlBase)
    // .pipe(
    // catchError(this.manejarError<IPokedex>('getProductos',
    // []))
    // )
    }

    getDetallesPokemon(): Observable<IPokemon>{
      return this.api.get<IPokemon>(this.apiUrlBase)
    }

    // manejarError<T>(operacion = 'Operación', resultado?: T){
    //   return (error: any) : Observable<T> => {
    //   console.error(`La operación ${operacion} falló con el
    //   siguiente codigo de error: ${error.message}`);
    //   return of(resultado as T)
    //   }
    //   }
}
