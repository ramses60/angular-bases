import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  public nombresHeroe: string[] = ["Spiderman", "Hulk", "Ironman", "Hulk", "Capitan america"];
  public heroeEliminado?: string;

  removerUltimoHeroe(): void {
    this.heroeEliminado = this.nombresHeroe.pop();
  }
}
