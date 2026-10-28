import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  templateUrl: './contador.html',
  styleUrl: './contador.css'
})
export class ContadorComponent {

  contador = signal(0);

  incrementar() {
    this.contador.update(valor => valor + 1);
  }

  decrementar() {
    this.contador.update(valor => valor - 1);
  }

  incrementarCinco() {
    this.contador.update(valor => valor + 5);
  }

  decrementarCinco() {
    this.contador.update(valor => valor - 5);
  }

  reiniciar() {
    this.contador.set(0);
  }
}