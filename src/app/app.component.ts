
import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent {

  // Título de nuestra aplicación
  titulo = 'Proyecto de ejercio';

  // Signal para almacenar el contador
  contador = signal(3);

  /// Calcula automáticamente el doble
  doble = computed(() => this.contador() * 2);

  // Incrementar en 1
  incrementar() {
    this.contador.update(valor => valor + 1);
  }

  // Decrementar sin permitir negativos
  decrementar() {
    this.contador.update(valor => Math.max(0, valor - 1));
  }

   // Decrementar sin permitir negativos
  decrementarCinco() {
    this.contador.update(valor => Math.max(0, valor - 5));
  }

  // Incrementar en 5
  incrementarCinco() {
    this.contador.update(valor => valor + 5);
  }

  // Reiniciar el contador
  reiniciar() {
    this.contador.set(0);
  }
}
