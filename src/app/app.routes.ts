import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./components/order-page/order-page.component').then(m => m.OrderPageComponent)},
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];