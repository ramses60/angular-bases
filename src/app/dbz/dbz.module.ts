import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListaComponent } from './components/lista/lista.component';
import { AgregarCaracterComponent } from './components/agregar-caracter/agregar-caracter.component';


@NgModule({
  declarations: [
    MainPageComponent,
    ListaComponent,
    AgregarCaracterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
