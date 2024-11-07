import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  standalone: true,
  template: `<h2>Lista de Clientes</h2>`,
})
export class ClientListComponent {
  clients = [
    { name: 'Juan Pérez', email: 'juan.perez@example.com', phone: '123456789', sharedKey: 'JP123' },
    { name: 'Ana López', email: 'ana.lopez@example.com', phone: '987654321', sharedKey: 'AL456' }
  ];

  constructor(private router: Router) {}

  navigateToCreate() {
    this.router.navigate(['/clients/new']);
  }
}
