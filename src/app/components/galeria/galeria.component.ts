import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GaleriaDataService } from '../../services/galeria-data.service';
import { CommonModule } from '@angular/common';

interface ImagenComparativa {
  antes: string;
  despues: string;
  mostrandoAntes: boolean;
}

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent implements OnInit {
  imagenes: ImagenComparativa[] = [];
  seccion: string = '';

  constructor(
    private galeriaService: GaleriaDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.url.subscribe(segments => {
      this.seccion = segments[0]?.path || 'entrada-principal';
      this.cargarImagenes();
    });
  }

  cargarImagenes(): void {
    const data = this.galeriaService.getImagenesPorSeccion(this.seccion);
    this.imagenes = data.map(img => ({
      antes: img.antes,
      despues: img.despues,
      mostrandoAntes: true
    }));
  }

  alternarImagen(index: number): void {
    this.imagenes[index].mostrandoAntes = !this.imagenes[index].mostrandoAntes;
  }
}
