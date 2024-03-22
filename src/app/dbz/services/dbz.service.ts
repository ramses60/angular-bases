import { Caracter } from './../interfaces/caracter.interface';
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'

@Injectable({providedIn: 'root'})
export class DbzService {

  public caracteres: Caracter[] = [{
    id: uuid(),
    nombre: 'Krilin',
    poder: 1000
  },{
    id: uuid(),
    nombre: 'Goku',
    poder: 9500
  },{
    id: uuid(),
    nombre: 'Vegetta',
    poder: 8500
  }
];

onNuevoCaracterMain(caracter: Caracter): void {
  //debugger;
  //console.log(caracter);

  const nuevoCaracter: Caracter = { id: uuid(), ...caracter};

  console.log(nuevoCaracter);

  this.caracteres.push(nuevoCaracter);
}

// onEliminarCaracterMain(index: number): void {
//   this.caracteres.splice(index, 1);
// }

onEliminarCaracterPorIdMain(id: string): void {
  this.caracteres = this.caracteres.filter(caracter => caracter.id !== id);
}

}
