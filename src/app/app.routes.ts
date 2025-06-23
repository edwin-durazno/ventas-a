import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Productos } from './pages/products/products';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'productos', component: Productos },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '' }
];
