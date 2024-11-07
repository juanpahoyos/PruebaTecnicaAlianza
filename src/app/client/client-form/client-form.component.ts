import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-form',
  standalone: true,
  template: `<h2>Formulario de Cliente</h2>`,
})
export class ClientFormComponent {
  client = { name: '', email: '', phone: '', sharedKey: '' };

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Cliente Guardado:', this.client); // Log para verificar la captura de datos
    alert('Cliente guardado exitosamente');
    this.router.navigate(['/clients']); // Redirigir a la lista de clientes
  }
}
