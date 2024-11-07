import { Routes } from '@angular/router';
import { ClientListComponent } from './client/client-list/client-list.component';
import { ClientFormComponent } from './client/client-form/client-form.component';

export const routes: Routes = [
  { path: 'clients', component: ClientListComponent },
  { path: 'clients/new', component: ClientFormComponent },
  { path: '', redirectTo: '/clients', pathMatch: 'full' }
];
