import { Injectable } from '@angular/core';
import galeriaJson from '../../assets/data/galeria.json';

@Injectable({
  providedIn: 'root'
})
export class GaleriaDataService {
  getImagenesPorSeccion(seccion: string): { antes: string; despues: string }[] {
    return (galeriaJson as any)[seccion] || [];
  }
}