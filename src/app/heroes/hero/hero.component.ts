import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public nombre: string = 'ironman'
  public edad: number = 35;

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  obtenerDescripcionHeroe(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre():void {
    this.nombre = "Spiderman";
  }

  cambiarEdad():void {
    this.edad = 20;
  }

  Reiniciar():void {
    this.edad = 35;
    this.nombre = 'ironman';
  }
}
