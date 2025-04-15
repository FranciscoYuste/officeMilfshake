<<<<<<< HEAD
import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
=======
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
>>>>>>> f33e696 (1er Commit - proyecto oficina Milfshakes)

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto Oficinas Milfshakes';
=======
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'Proyecto Oficinas Milfshakes';
  videoMuted = true;

  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    const video = this.videoPlayer.nativeElement;

    // Asegurar que esté silenciado (para autoplay en móvil)
    video.muted = true;

    // Cuando el vídeo esté listo, forzar reproducción inmediata
    video.addEventListener('canplay', () => {
      const playedPromise = video.play();

      if (playedPromise !== undefined) {
        playedPromise
          .then(() => {
            console.log('🎥 Reproducción forzada con éxito');
          })
          .catch(err => {
            console.warn('❌ Falló la reproducción:', err);
          });
      }
    });
  }

  toggleMute(): void {
    const video = this.videoPlayer.nativeElement;
    this.videoMuted = !this.videoMuted;
    video.muted = this.videoMuted;
  }
>>>>>>> f33e696 (1er Commit - proyecto oficina Milfshakes)
}
