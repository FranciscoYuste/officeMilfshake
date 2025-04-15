import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'entrada-principal', pathMatch: 'full' },

  {
    path: 'entrada-principal',
    loadComponent: () =>
      import('./components/galeria/galeria.component').then(m => m.GaleriaComponent)
  },
  {
    path: 'cafeteria',
    loadComponent: () =>
      import('./components/galeria/galeria.component').then(m => m.GaleriaComponent)
  },
  {
    path: 'oficinas-superiores',
    loadComponent: () =>
      import('./components/galeria/galeria.component').then(m => m.GaleriaComponent)
  },
  {
    path: 'sala-reuniones',
    loadComponent: () =>
      import('./components/galeria/galeria.component').then(m => m.GaleriaComponent)
  },
  {
    path: 'general',
    loadComponent: () =>
      import('./components/galeria/galeria.component').then(m => m.GaleriaComponent)
  }
];
