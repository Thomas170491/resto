import { Routes } from '@angular/router';
import { OrderPageComponent } from './components/order-page/order-page.component'; // Assurez-vous que le chemin est correct

export const routes: Routes = [
  {
    path: 'home',
    component: OrderPageComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];