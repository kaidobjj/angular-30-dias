
import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent {

  titulo = 'Proyecto de ejercio';

  // Signal metodo de almacenamiento
  contador = signal(3);

  /// calcula el doble
  doble = computed(() => this.contador() * 2);


  incrementar() {
    this.contador.update(valor => valor + 1);
  }

  decrementar() {
    this.contador.update(valor => Math.max(0, valor - 1));
  }

   
  decrementarCinco() {
    this.contador.update(valor => Math.max(0, valor - 5));
  }


  incrementarCinco() {
    this.contador.update(valor => valor + 5);
  }

  // renicio de contador
  reiniciar() {
    this.contador.set(0);
  }
}
