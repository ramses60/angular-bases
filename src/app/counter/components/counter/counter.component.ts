import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>
    Contador: {{ contador }}
  </h3>
  <button (click)="ModificarValor(+1)">+1</button>
  <button (click)="ModificarValor(-1)">-1</button>
  <button (click)="Resetear()">Reset</button>
  `
})

export class CounterComponent {
  public contadorInicial: number = 10;
  public contador: number = this.contadorInicial;

  ModificarValor(valor: number): void {
    this.contador += valor;
  }

  Resetear(): void {
    this.contador = this.contadorInicial;
  }
}
