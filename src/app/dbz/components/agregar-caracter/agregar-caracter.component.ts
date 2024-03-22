import { Component, EventEmitter, Output } from '@angular/core';
import { Caracter } from '../../interfaces/caracter.interface';

@Component({
  selector: 'dbz-agregar-caracter',
  templateUrl: './agregar-caracter.component.html',
  styleUrl: './agregar-caracter.component.css'
})
export class AgregarCaracterComponent {

  @Output()
  public onNuevoCaracter: EventEmitter<Caracter> = new EventEmitter();

  public caracter: Caracter = {
    nombre: '',
    poder: 0
  }

  emitirAgregarCaracter(): void {
    //console.log(this.caracter);

    if (this.caracter.nombre.length === 0) return;

    this.onNuevoCaracter.emit(this.caracter);

    this.caracter = {nombre: '', poder: 0};
  }
}
