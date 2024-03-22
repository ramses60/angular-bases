import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Caracter } from '../../interfaces/caracter.interface';

@Component({
  selector: 'dbz-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  @Input()
  public listaCaracteres: Caracter[] = [{
    nombre: 'Yamcha',
    poder: 1300
  }]

  @Output()
  public onEliminarCaracter: EventEmitter<string> = new EventEmitter();

  // onEmitirEliminarCaracter(index: number):void {
  //   //TODO: Emitir el Id del personaje
  //   console.log({index});
  //   this.onEliminarCaracter.emit(index);
  // }

  onEmitirEliminarCaracterPorId(id: string):void {
    //TODO: Emitir el Id del personaje
    console.log({id});
    this.onEliminarCaracter.emit(id);
  }
}
