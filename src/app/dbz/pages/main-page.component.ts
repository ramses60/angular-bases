import { Caracter } from './../interfaces/caracter.interface';
import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(private DbzService: DbzService ){}

  get caracteres(): Caracter[] {
    return [...this.DbzService.caracteres];
  }

  onEliminarCaracterPorIdMain(id: string):void {
    this.DbzService.onEliminarCaracterPorIdMain(id);
  }

  onNuevoCaracterMain(caracter: Caracter):void {
    this.DbzService.onNuevoCaracterMain(caracter);
  }
}
