import { Component, ViewChild, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ImageViewerComponent, ImageViewerModule } from '../../../ngx-image-viewer-17/src/public-api';
import { CustomEvent, ImageViewerConfig } from '../../../ngx-image-viewer-17/src/lib/image-viewer/image-viewer-config.model';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    ImageViewerModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  title = 'ngx-image-viewer-16';


  @ViewChildren("imgView") imgView!:ImageViewerComponent;

  images = [
    'https://www.planetware.com/wpimages/2021/10/turkey-top-attractions-oludeniz.jpg',
    'https://www.planetware.com/wpimages/2023/05/turkey-top-attractions-intro-paragraph-ephesus.jpg',
    'https://www.planetware.com/wpimages/2021/10/turkey-top-attractions-pamukkale.jpg',
    'https://www.planetware.com/wpimages/2021/10/turkey-top-attractions-oludeniz.jpg',
    
  ];

  imageIndexOne = 0;
  imageIndexTwo = 0;

  config: ImageViewerConfig = {
    customBtns: [
      {name: 'print', icon: 'fa fa-print'}, 
      {name: 'link', icon: 'fa fa-link'}]
    };

  async handleEvent(event: CustomEvent) {
    console.log(`${event.name} has been click on img ${event.imageIndex + 1}`);

    switch (event.name) {
      case 'print':
        console.log('run print logic',this.imgView);
        window.print();
        break;
        case 'link':
          const src:string = this.images[event.imageIndex]; 
          await navigator.clipboard.writeText(src);          
          console.log('clipboard copied');
          break;
  
    }
  }
}
