import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Asegúrate de importar FormsModule
import { CommonModule } from '@angular/common'; // Importa CommonModule para usar *ngIf

@Component({
  selector: 'app-root',
  standalone: true,  // Asegúrate de que el componente sea standalone
  imports: [CommonModule, FormsModule],  // Agrega CommonModule para las directivas estructurales
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Datos para el nuevo cliente
  newClient = {
    name: '',
    email: ''
  };

  // Variable para abrir y cerrar el modal
  isModalOpen = false;

  // Función para abrir/cerrar el modal
  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  // Función para guardar el cliente
  saveClient() {
    if (this.newClient.name && this.newClient.email) {
      console.log('Cliente guardado:', this.newClient);
      this.toggleModal();  // Cierra el modal después de guardar
      // Aquí puedes agregar más lógica como enviar el cliente a una API, etc.
    }
  }
}
