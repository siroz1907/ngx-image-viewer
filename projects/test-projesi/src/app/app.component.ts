import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageViewerModule } from 'projects/ngx-image-viewer-17/src/public-api';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    ImageViewerModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test-projesi';
}
